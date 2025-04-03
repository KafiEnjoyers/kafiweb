// place files you want to import through the `$lib` alias in this folder.

import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export function typewriterAnimation(elementId) {
    const split = new SplitText(elementId, { type: "chars" });
    gsap.from(split.chars, {
        duration: 0.1,
        opacity: 0,
        stagger: 0.05,
        ease: "power1.inOut"
    });
}