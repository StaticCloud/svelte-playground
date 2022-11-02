<script lang="ts">
    let media: 'movie' | 'podcast' | 'music' | 'tvShow';
    let term: String;
    export let data;

    const getData = async () => {
        term = term.split(" ").join("");
        const res = await fetch(`https://itunes.apple.com/search?term=${term}&media=${media}&limit=10`);
        data = await res.json();
        data = data.results;
        term = '';
        console.log(data);
    }
</script>

<form on:submit|preventDefault={getData}>
    <label for="term">Term</label>
    <input bind:value={term} id="term"/>

    <label for="media">Media</label>
    <select bind:value={media} id="media">
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="music">Music</option>
        <option value="tvShow">TV Show</option>
    </select>

    <button disabled={!term} type=submit>Search</button>
</form>

<style>
    form > * {
        display: block;
    }
</style>