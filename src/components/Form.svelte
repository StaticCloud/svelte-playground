<script lang="ts">
    let media: 'movie' | 'podcast' | 'music' | 'tvShow';
    let term: String;

    const sayHi = () => {
        alert('hi')
    }
</script>

<form on:submit|preventDefault={sayHi}>
    <label for="term">Term</label>
    <input bind:value={term} id="term"/>

    <label for="media">Media</label>
    <select bind:value={media} id="media">
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="music">Music</option>
        <option value="tvShow">TV Show</option>
    </select>

    <button type=submit>Search</button>
</form>

<style>
    form > * {
        display: block;
    }
</style>