<script lang="ts">
    const sayHi = e => {
        e.preventDefault();
        alert("Hi")
    }
</script>

<form>
    <label for="term">Term</label>
    <input id="term"/>

    <label for="media">Media</label>
    <select name="media" id="media">
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="music">Music</option>
        <option value="tvShow">TV Show</option>
    </select>

    <button on:click={sayHi}>Search</button>
</form>

<style>
    form > * {
        display: block;
    }
</style>