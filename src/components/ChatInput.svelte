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

  .chat-input input[type=text] {
    flex-grow: 1;
  }

  .chat-input button {
    flex-grow: 0;
  }
</style>

<form on:submit|preventDefault="{onSubmit}">
  <div class="chat-input">
    <input type="text" bind:value={content} autoComplete="off" />
    <button disabled={!validContent}>Send</button>
  </div>
</form>
