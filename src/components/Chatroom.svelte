<script>
  import ChatInput from './ChatInput.svelte'

  const handleSubmit = (e) => {
    console.log(`Sent: "${e.detail}"`)
  }
</script>

<ChatInput on:submit={handleSubmit} />
