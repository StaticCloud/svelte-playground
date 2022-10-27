<script lang="ts">
  import AudioPlayer from './components/AudioPlayer.svelte';
  import Test from './components/Test.svelte'
  import Form from './components/Form.svelte'
  let data = [];
</script>

<div>
  <Test text="hello there"/>
  <Form bind:data></Form>
  {#each data as item}
    {#if item.kind === "song"}
      <AudioPlayer 
        src={item.previewUrl}
        title={item.trackCensoredName}
        composer={item.artistName}>
      </AudioPlayer>
    {/if}
  {/each}
</div>
<style>

</style>