<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import { typewriterAnimation } from '$lib/textAnimation';

    // Metadata for SEO
    const pageTitle = "Kafi Studio - Software built different";
    const pageDescription = "Innovative software solutions by Kafi Studio";

    onMount(() => {
        // Initialize typewriter animation with custom options
        typewriterAnimation('#landing-text', {
            speed: 80,
            delay: 500
        });
    });
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
</svelte:head>

<main class="landing-container">
    <h1 class="landing-title">Kafi Studio</h1>

    <div class="landing-img">
        <img class="logo" src="{base}/images/KafiTurtle.png" alt="Kafi Studio logo showing a turtle" />
    </div>

    <div id="landing-text" class="landing-text" style="visibility: hidden;">Software built different</div>
    
    <p class="tagline">Creating innovative solutions for your digital needs</p>
</main>

<footer class="footer">
    <p>&copy; {new Date().getFullYear()} Kafi Studio. All rights reserved.</p>
</footer>
