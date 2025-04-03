<script>
    import { onMount } from 'svelte';
    import { typewriterAnimation } from '$lib/textAnimation';

    onMount(() => {
        typewriterAnimation('#langding-text');
    })
</script>

<h1 class="landing-title"> Kafi Studio </h1>

<div class="landing-img">
    <img class="logo" src="/src/assets/KafiTurtle.png" alt="KafiStudio logo" />
</div>

<div id="landing-text" class="landing-text">Software built different</div>

