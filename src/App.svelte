<script lang="ts">
  import Test from './components/Test.svelte'
  import Form from './components/Form.svelte'
  let data = [];
</script>

<Test text="hello there"/>
<Form bind:data></Form>
{#each data as item}
  <p>{item.trackName}</p>
{/each}
<style>

</style>