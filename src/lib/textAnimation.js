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
    const landingText = document.querySelector('#landing-text');
    if (landingText) {
        landingText.style.visibility = 'visible';
        typewriterAnimation('#landing-text', {
            speed: 70,
            delay: 10,
            onComplete: (element) => {
                element.classList.add('typing-done');
                
                // 主标语结束后开始副标语
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
                }, 300);
            }
        });
    }
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