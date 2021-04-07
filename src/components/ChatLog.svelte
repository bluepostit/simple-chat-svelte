<script>
  import ChatLogMessage from './ChatLogMessage.svelte'
  export let messages = []
</script>

<style>
  .messages {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
</style>

<div class="messages">
  {#each messages as message (message.id)}
    <ChatLogMessage message={message} />
  {/each}
</div>
