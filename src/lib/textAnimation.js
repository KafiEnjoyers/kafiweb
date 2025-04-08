// Text animation utilities

import { gsap } from 'gsap';

// 此函数被简化并直接在组件中实现
export function initTypewriter() {
    console.warn('initTypewriter() is deprecated. Please use repeatTypewriter() directly');
    return;
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