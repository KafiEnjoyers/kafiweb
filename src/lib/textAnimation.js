// Text animation utilities

import { gsap } from 'gsap';

// 主动调用打字机效果的函数
export function initTypewriter() {
    if (typeof document === 'undefined') return;

    // 检查页面在加载完成后是否已经初始化了打字机效果
    if (document.querySelector('#typing-initialized')) return;

    // 添加一个标记元素来表示我们已经初始化了打字机效果
    const marker = document.createElement('div');
    marker.id = 'typing-initialized';
    marker.style.display = 'none';
    document.body.appendChild(marker);

    // 获取需要应用打字机效果的元素
    const landingText = document.querySelector('#landing-text .typewriter-text');
    if (landingText) {
        const text = "Software built different";
        repeatTypewriter(landingText, text, 70);
    }

    // 获取副标语元素
    setTimeout(() => {
        const tagline = document.querySelector('#tagline');
        if (tagline) {
            tagline.style.visibility = 'visible';
            typewriterAnimation('#tagline', {
                speed: 60,
                delay: 10,
                onComplete: (el) => {
                    el.classList.add('typing-done');
                }
            });
        }
    }, 2000);
}

// 循环打字效果函数
export function repeatTypewriter(element, text, speed = 100) {
    let i = 0;
    let isDeleting = false;
    let fullTextDisplayed = false;
    const pauseDuration = 2000; // 完整显示文本的停留时间
    let timer;

    function typeEffect() {
        const fullText = text;
        const currentText = isDeleting 
            ? fullText.substring(0, i) 
            : fullText.substring(0, i);
        
        element.textContent = currentText;
        
        // 处理打字和删除状态的切换
        if (!isDeleting && !fullTextDisplayed && i === fullText.length) {
            fullTextDisplayed = true;
            clearTimeout(timer);
            // 完整显示后暂停
            timer = setTimeout(() => {
                isDeleting = true;
                typeEffect();
            }, pauseDuration);
            return;
        } else if (isDeleting && i === 0) {
            isDeleting = false;
            fullTextDisplayed = false;
            // 删除完后短暂暂停
            clearTimeout(timer);
            timer = setTimeout(typeEffect, 500);
            return;
        }
        
        // 计算打字速度（删除比输入更快）
        const typingSpeed = isDeleting ? speed / 1.5 : speed;
        
        // 增加或减少字符索引
        if (isDeleting) {
            i--;
        } else {
            i++;
        }
        
        // 继续循环
        clearTimeout(timer);
        timer = setTimeout(typeEffect, typingSpeed);
    }
    
    // 开始打字效果
    typeEffect();
    
    return {
        stop: () => clearTimeout(timer)
    };
}
/**
 * Creates a simple typewriter animation effect for the specified element
 * @param {string} elementId - CSS selector for the target element
 * @param {Object} options - Animation options
 */
export function typewriterAnimation(elementId, options = {}) {
    try {
        const element = document.querySelector(elementId);
        if (!element) {
            console.error(`Element with selector ${elementId} not found`);
            return;
        }
        
        // Default options
        const config = {
            speed: options.speed || 70,          // Typing speed in ms
            initialDelay: options.delay || 300,  // Initial delay before typing starts
            cursor: options.cursor !== false,     // Whether to show cursor
            onComplete: options.onComplete || null // Callback function when typing is complete
        };
        
        const text = element.textContent;
        element.textContent = '';
        element.style.visibility = 'visible';
        
        // Create and animate characters one by one
        let charIndex = 0;
        
        // Add initial delay
        setTimeout(() => {
            const typeInterval = setInterval(() => {
                if (charIndex < text.length) {
                    element.textContent += text.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                    
                    // Apply additional animations after typing if needed
                    gsap.to(element, {
                        duration: 0.5,
                        ease: 'power1.out'
                    });
                    
                    // Execute onComplete callback if provided
                    if (typeof config.onComplete === 'function') {
                        config.onComplete(element);
                    }
                }
            }, config.speed);
        }, config.initialDelay);
        
    } catch (error) {
        console.error(`Error in typewriterAnimation: ${error.message}`);
    }
}