// Text animation utilities

import { gsap } from 'gsap';

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