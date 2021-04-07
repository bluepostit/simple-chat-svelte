<script>
  import ChatInput from './ChatInput.svelte'
  import ChatLog from './ChatLog.svelte'

  let messages = []
  let newMessageId

  $: {
    if (messages.length === 0) {
      newMessageId = 1
    } else {
      newMessageId = Math.max(...messages.map(m => m.id)) + 1
    }
  }

  const createMessage = (text) => {
    return {
      content: text,
      date: new Date(),
      id: newMessageId
    }
  }

  const handleSubmit = (e) => {
    // console.log(`Sent: "${e.detail}"`)
    const message = createMessage(e.detail)
    messages = [...messages, message]
  }
</script>

<ChatLog messages={messages} />
<ChatInput on:submit={handleSubmit} />
