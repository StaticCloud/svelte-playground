<!-- code from Svelte docs -->

<!-- this essentially means this code to the entire module and not just one instance of the component -->
<!-- this runs before the component is created -->
<script context="module">
    const elements = new Set();
</script>

<script>
	import { onMount } from 'svelte';

	export let src;
	export let title;
	export let composer;

	let audio;
	let paused = true;

    // after the creation phase, we then mount our component
	onMount(() => {
        // since we binded our audio component to our audio variable in the creation phase, audio is no longer undefined
        // append the audio element to our elements set
		elements.add(audio);
        // remove from the elements set when the component is destroyed
		return () => elements.delete(audio);
	});

    // pause all audio elements
	function stopOthers() {
		elements.forEach(element => {
			if (element !== audio) element.pause();
		});
	}
</script>

<article class:playing={!paused}>
	<h2>{title}</h2>
	<p><strong>{composer}</strong></p>
    <!-- the audio element has a paused property by default, so we're going to bind that to our paused variable -->
	<audio
		bind:this={audio}
		bind:paused
		on:play={stopOthers}
		controls
		{src}
	></audio>
</article>

<style>
	article { margin: 0 0 1em 0; max-width: 800px }
	h2, p { margin: 0 0 0.3em 0; }
	audio { width: 100%; margin: 0.5em 0 1em 0; }
	.playing { color: #ff3e00; }
</style>