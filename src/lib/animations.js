// Enhanced animations library
import { gsap } from 'gsap';

/**
 * Fade-in animation for elements
 * @param {HTMLElement} element - The element to animate
 * @param {Object} options - Animation options
 */
export function fadeIn(element, options = {}) {
    if (!element) return;
    
    // Default options
    const config = {
        duration: options.duration || 0.8,
        delay: options.delay || 0,
        ease: options.ease || 'power2.out',
        from: options.from || {
            opacity: 0,
            y: 20
        }
    };
    
    // Set initial state
    gsap.set(element, { ...config.from });
    
    // Animate
    gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: config.duration,
        delay: config.delay,
        ease: config.ease
    });
}

/**
 * Slide-up animation for elements
 * @param {HTMLElement} element - The element to animate
 * @param {Object} options - Animation options
 */
export function slideUp(element, options = {}) {
    if (!element) return;
    
    // Default options
    const config = {
        duration: options.duration || 0.8,
        delay: options.delay || 0,
        ease: options.ease || 'power3.out',
        from: options.from || {
            opacity: 0,
            y: 60
        }
    };
    
    // Set initial state
    gsap.set(element, { ...config.from });
    
    // Animate
    gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: config.duration,
        delay: config.delay,
        ease: config.ease
    });
}

/**
 * Staggered animation for multiple elements
 * @param {NodeList|Array} elements - The elements to animate
 * @param {Object} options - Animation options
 */
export function staggerElements(elements, options = {}) {
    if (!elements || elements.length === 0) return;
    
    // Default options
    const config = {
        duration: options.duration || 0.5,
        stagger: options.stagger || 0.1,
        delay: options.delay || 0,
        ease: options.ease || 'power2.out',
        from: options.from || {
            opacity: 0,
            y: 20
        }
    };
    
    // Set initial state
    gsap.set(elements, { ...config.from });
    
    // Animate
    gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: config.duration,
        stagger: config.stagger,
        delay: config.delay,
        ease: config.ease
    });
}

/**
 * Floating animation for elements (continuous)
 * @param {HTMLElement} element - The element to animate
 * @param {Object} options - Animation options
 */
export function floatingAnimation(element, options = {}) {
    if (!element) return;
    
    // Default options
    const config = {
        duration: options.duration || 2,
        distance: options.distance || 10,
        ease: options.ease || 'sine.inOut'
    };
    
    // Create floating animation
    gsap.to(element, {
        y: config.distance,
        duration: config.duration,
        repeat: -1,
        yoyo: true,
        ease: config.ease
    });
}

/**
 * Reveal text animation with split characters
 * @param {HTMLElement} element - The element containing text
 * @param {Object} options - Animation options 
 */
export function revealText(element, options = {}) {
    if (!element) return;
    
    // Default options
    const config = {
        duration: options.duration || 0.8,
        stagger: options.stagger || 0.03,
        delay: options.delay || 0,
        ease: options.ease || 'power2.out'
    };
    
    // Get text content
    const text = element.textContent;
    element.textContent = '';
    element.style.visibility = 'visible';
    
    // Create individual spans for each character
    [...text].forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        element.appendChild(span);
    });
    
    // Animate each character
    gsap.to(element.children, {
        opacity: 1,
        y: 0,
        duration: config.duration,
        stagger: config.stagger,
        delay: config.delay,
        ease: config.ease
    });
}