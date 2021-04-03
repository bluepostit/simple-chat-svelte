<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let content = ''

  $: validContent = (content && content.trim().length > 0)

  const onSubmit = (event) => {
    dispatch('submit', content)
    content = ''
  }
</script>

<style>
  .chat-input {
    display: flex;
    flex-direction: row;
  }
</style>

<form on:submit|preventDefault="{onSubmit}">
  <div class="chat-input">
    <input type="text" bind:value={content} autoComplete="off" />
    <button disabled={!validContent}>Send</button>
  </div>
</form>
