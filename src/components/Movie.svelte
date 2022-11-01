<script lang="ts">
    export let title: String;
    export let poster: any;
    export let desc: String;
</script>

<div class="wrapper">
    <img alt="" src={poster}/>
    <div class="info">
        <h1>{title}</h1>
        {#if desc}
            <p>{desc}</p>
        {/if}
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        background-color: rgb(71, 71, 71);
        color: white;
    }

    .info {
        padding: 0 10px;
    }

    h1 {
        margin: 0;
    }
</style>