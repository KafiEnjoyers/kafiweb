<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import { typewriterAnimation } from '$lib/textAnimation';
    import { fadeIn, slideUp } from '$lib/animations';

    // Metadata for SEO
    const pageTitle = "Kafi Studio - Software built different";
    const pageDescription = "Innovative software solutions by Kafi Studio";
    
    // Services offered
    const services = [
        {
            title: "Web Development",
            description: "Custom websites and web applications built with modern technologies",
            icon: "code"
        },
        {
            title: "Mobile Apps",
            description: "Native and cross-platform applications for iOS and Android",
            icon: "smartphone"
        },
        {
            title: "UI/UX Design",
            description: "Beautiful and intuitive user interfaces for your digital products",
            icon: "design"
        }
    ];

    // Animation references
    let heroSection;
    let servicesSection;
    
    onMount(() => {
        // 初始化主标语打字动画
        typewriterAnimation('#landing-text', {
            speed: 70,
            delay: 800,
            onComplete: (element) => {
                // 主标语打字效果完成后的回调
                element.classList.add('typing-done');
                
                // 开始副标语的打字效果
                setTimeout(() => {
                    typewriterAnimation('#tagline', {
                        speed: 60,
                        delay: 100,
                        onComplete: (el) => {
                            el.classList.add('typing-done');
                        }
                    });
                }, 400); // 短暂延迟后开始副标语
            }
        });
        
        // 应用其他动画
        if (heroSection) fadeIn(heroSection, { delay: 200, duration: 1 });
        if (servicesSection) slideUp(servicesSection, { delay: 1500, duration: 0.8 });
        
        // Animate service cards on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 150);
                }
            });
        }, { threshold: 0.2 });
        
        // Observe service cards
        document.querySelectorAll('.service-card').forEach(card => {
            observer.observe(card);
        });
    });
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
</svelte:head>

<main>
    <!-- Hero Section -->
    <section class="hero-section" bind:this={heroSection}>
        <div class="hero-content">
            <h1 class="hero-title">Kafi Studio</h1>
            
            <div class="logo-container">
                <img class="logo" src="{base}/images/KafiTurtle.png" alt="Kafi Studio logo showing a turtle" />
                <div class="logo-glow"></div>
            </div>
            
            <div id="landing-text" class="landing-text" style="visibility: hidden;">
                Software built different
            </div>
            
            <p id="tagline" class="tagline" style="visibility: hidden;">Software built different</p>
            
            <div class="cta-buttons">
                <a href="#contact" class="btn primary-btn">Get in touch</a>
                <a href="#services" class="btn secondary-btn">Our services</a>
            </div>
        </div>
        
        <div class="scroll-indicator">
            <div class="mouse">
                <div class="wheel"></div>
            </div>
            <div class="arrow-scroll">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </section>
    
    <!-- Services Section -->
    <section id="services" class="services-section" bind:this={servicesSection}>
        <h2 class="section-title">Our Services</h2>
        <div class="services-grid">
            {#each services as service, i}
                <div class="service-card">
                    <div class="service-icon {service.icon}"></div>
                    <h3 class="service-title">{service.title}</h3>
                    <p class="service-description">{service.description}</p>
                </div>
            {/each}
        </div>
    </section>
    
    <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-container">
            <div class="contact-info">
                <p>Interested in working with us? Check out our GitHub organization:</p>
                <div class="contact-item">
                    <a href="https://github.com/KafiEnjoyers" target="_blank" class="contact-link">
                        <div class="github-icon"></div>
                        github.com/KafiEnjoyers
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<footer class="footer">
    <div class="footer-content">
        <div class="footer-logo">
            <img src="{base}/images/KafiTurtle.png" alt="Kafi Studio logo" class="footer-logo-img" />
            <span class="footer-brand">Kafi Studio</span>
        </div>
        
        <div class="footer-links">
            <a href="#" class="footer-link">Home</a>
            <a href="#services" class="footer-link">Services</a>
            <a href="#contact" class="footer-link">Contact</a>
        </div>
        
        <p class="copyright">&copy; {new Date().getFullYear()} Kafi Studio. All rights reserved.</p>
    </div>
</footer>

<style>
    /* Hero Section */
    .hero-section {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 2rem 1rem;
    }
    
    .hero-content {
        max-width: 1000px;
        text-align: center;
        z-index: 2;
    }
    
    .hero-title {
        font-size: 4rem;
        font-weight: 700;
        margin-bottom: 2rem;
        background: linear-gradient(135deg, var(--accent-color), var(--secondary-color));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 2px 10px rgba(80, 115, 184, 0.15);
    }
    
    .logo-container {
        position: relative;
        margin-bottom: 2rem;
    }
    
    .logo {
        max-width: 220px;
        height: auto;
        filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
        transition: transform 0.5s ease;
    }
    
    .logo:hover {
        transform: scale(1.05) rotate(5deg);
    }
    
    .logo-glow {
        position: absolute;
        width: 100%;
        height: 30px;
        bottom: -15px;
        left: 0;
        background: radial-gradient(ellipse at center, var(--accent-color) 0%, transparent 70%);
        opacity: 0.3;
        filter: blur(10px);
        z-index: -1;
    }
    
    .landing-text {
        font-size: 2.5rem;
        font-weight: 600;
        margin-bottom: 1rem; /* 减小底部间距 */
        color: var(--accent-color);
        position: relative;
    }
    
    .landing-text::after {
        content: '|';
        margin-left: 5px;
        opacity: 1;
        color: var(--accent-color);
        animation: cursor-blink 1s infinite;
    }
    
    @keyframes cursor-blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
    
    .tagline {
        font-size: 1.3rem;
        max-width: 600px;
        margin: 0 auto 3rem;
        opacity: 0.9;
        line-height: 1.6;
        color: var(--secondary-color);
        position: relative;
    }
    
    .tagline::after {
        content: '|';
        margin-left: 2px;
        opacity: 1;
        color: var(--secondary-color);
        animation: cursor-blink 1s infinite;
    }
    
    .landing-text.typing-done::after,
    .tagline.typing-done::after {
        /* 打字结束后隐藏光标 */
        display: none;
    }
    
    .cta-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
    }
    
    .btn {
        padding: 0.8rem 2rem;
        border-radius: 30px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.9rem;
    }
    
    .primary-btn {
        background: var(--accent-color);
        color: white;
        box-shadow: 0 4px 15px rgba(80, 115, 184, 0.3);
    }
    
    .primary-btn:hover {
        background: var(--accent-color-dark, #3a5ca0);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(80, 115, 184, 0.4);
    }
    
    .secondary-btn {
        background: transparent;
        color: var(--text-color);
        border: 2px solid var(--accent-color);
    }
    
    .secondary-btn:hover {
        background: rgba(80, 115, 184, 0.1);
        transform: translateY(-2px);
    }
    
    /* Scroll Indicator */
    .scroll-indicator {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0.7;
    }
    
    .mouse {
        width: 26px;
        height: 42px;
        border: 2px solid var(--text-color);
        border-radius: 15px;
        position: relative;
    }
    
    .wheel {
        width: 6px;
        height: 6px;
        background: var(--text-color);
        border-radius: 50%;
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        animation: mouse-wheel 1.5s ease infinite;
    }
    
    .arrow-scroll {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 8px;
    }
    
    .arrow-scroll span {
        display: block;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid var(--text-color);
        border-right: 2px solid var(--text-color);
        transform: rotate(45deg);
        margin: -5px;
        animation: arrow-down 2s infinite;
    }
    
    .arrow-scroll span:nth-child(2) {
        animation-delay: -0.2s;
    }
    
    .arrow-scroll span:nth-child(3) {
        animation-delay: -0.4s;
    }
    
    /* Services Section */
    .services-section {
        padding: 6rem 2rem;
        background: rgba(0, 0, 0, 0.1);
    }
    
    .section-title {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
        color: var(--accent-color);
        position: relative;
        padding-bottom: 15px;
    }
    
    .section-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: var(--secondary-color);
    }
    
    .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .service-card {
        background: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        padding: 2rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        transition: all 0.4s ease;
        transform: translateY(30px);
        opacity: 0;
        border: 1px solid rgba(80, 115, 184, 0.1);
        backdrop-filter: blur(10px);
    }
    
    .service-card.visible {
        transform: translateY(0);
        opacity: 1;
    }
    
    .service-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        border-color: rgba(80, 115, 184, 0.3);
    }
    
    .service-icon {
        width: 60px;
        height: 60px;
        margin-bottom: 1.5rem;
        background-color: var(--accent-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    
    .service-icon::before {
        font-family: 'Material Icons';
        font-size: 28px;
        color: white;
    }
    
    .service-icon.code::before {
        content: 'code';
    }
    
    .service-icon.smartphone::before {
        content: 'smartphone';
    }
    
    .service-icon.design::before {
        content: 'brush';
    }
    
    .service-title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--secondary-color);
    }
    
    .service-description {
        color: var(--text-color);
        opacity: 0.9;
        line-height: 1.6;
    }
    
    /* Contact Section */
    .contact-section {
        padding: 6rem 2rem;
    }
    
    .contact-container {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
    }
    
    .contact-info {
        margin-bottom: 3rem;
    }
    
    .contact-item {
        margin: 1.5rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .contact-label {
        font-weight: 600;
        color: var(--secondary-color);
        margin-bottom: 0.5rem;
    }
    
    /* GitHub Icon */
    .github-icon {
        width: 24px;
        height: 24px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 8px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%235073b8"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>');
        background-repeat: no-repeat;
        background-size: contain;
    }
    
    .contact-link {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        padding: 0.5rem 1.5rem;
        border-radius: 30px;
        border: 2px solid var(--accent-color);
        color: var(--accent-color);
        text-decoration: none;
        transition: all 0.3s ease;
    }
    
    .contact-link:hover {
        background-color: var(--accent-color);
        color: white;
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(80, 115, 184, 0.3);
    }
    
    /* Footer */
    .footer {
        background-color: rgba(0, 0, 0, 0.05);
        padding: 3rem 2rem;
    }
    
    .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    
    .footer-logo {
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }
    
    .footer-logo-img {
        width: 40px;
        height: auto;
    }
    
    .footer-brand {
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--accent-color);
    }
    
    .footer-links {
        display: flex;
        gap: 2rem;
    }
    
    .footer-link {
        color: var(--text-color);
        text-decoration: none;
        transition: color 0.3s ease;
    }
    
    .footer-link:hover {
        color: var(--secondary-color);
    }
    
    .copyright {
        font-size: 0.9rem;
        opacity: 0.7;
    }
    
    /* Animations */
    @keyframes mouse-wheel {
        0% { transform: translateX(-50%) translateY(0); opacity: 1; }
        100% { transform: translateX(-50%) translateY(15px); opacity: 0; }
    }
    
    @keyframes arrow-down {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
        .hero-title {
            font-size: 2.5rem;
        }
        
        .landing-text {
            font-size: 1.8rem;
        }
        
        .logo {
            max-width: 180px;
        }
        
        .cta-buttons {
            flex-direction: column;
            gap: 1rem;
        }
        
        .section-title {
            font-size: 2rem;
        }
        
        .services-grid {
            grid-template-columns: 1fr;
        }
    }
</style>