<script lang="ts">
  import { ApolloClient, InMemoryCache } from "@apollo/client/core";
  import { setClient } from "svelte-apollo";

  import AudioPlayer from './components/AudioPlayer.svelte';
  import Movie from './components/Movie.svelte';
  import Test from './components/Test.svelte'
  import Form from './components/Form.svelte'
  let data = [];

  const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache()
  });

  setClient(client);
</script>

<div>
  <Test text="hello there"/>
  <Form bind:data></Form>
  {#each data as item}
    {#if item.kind === "song"}
      <AudioPlayer 
        src={item.previewUrl}
        title={item.trackCensoredName}
        composer={item.artistName}
        cover={item.artworkUrl100}>
      </AudioPlayer>
    {/if}
    {#if item.kind === "feature-movie"}
      <Movie
        title={item.trackCensoredName}
        poster={item.artworkUrl100}
        desc={item.shortDescription}>
      </Movie>
    {/if}
  {/each}
</div>
<style>

</style>