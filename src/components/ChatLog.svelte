<script>
  import TimeAgo from 'javascript-time-ago'
  import en from 'javascript-time-ago/locale/en'
  TimeAgo.addDefaultLocale(en)

  export let messages = []

  const dateFormatter = new TimeAgo()
</script>

<style>
  .messages {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }

  .message {
    flex-grow: 0;
    text-align: right;
    align-self: flex-end;
    color: #fff;
    background-color: rgb(4, 168, 4);
    padding: 0.5em;
    border-radius: 4px;
    margin-bottom: 1%;
    display: inline-block;
  }

  .date {
    font-size: small;
    font-style: italic;
  }
</style>

<div class="messages">
  {#each messages as message (message.id)}
    <div class="message">
      <div class="content">{message.content}</div>
      <div class="date">{dateFormatter.format(message.date)}</div>
    </div>
  {/each}
</div>
