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
	export let cover;

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

<article>
	<img alt={title} src={cover}/>
	<div>
		<h2>{title}</h2>
		<p><strong>{composer}</strong></p>
	</div>
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
	article { 
		margin: 10px 0;
		max-width: 600px;
		background-color: rgb(71, 71, 71);

		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	article > div {
		padding: 13px;
	}
	h2, p { 
		margin: 0 0 0.3em 0; 
		color: white;
	}
	audio { 
		width: 100%;
		flex-basis: 1;
	}
</style>