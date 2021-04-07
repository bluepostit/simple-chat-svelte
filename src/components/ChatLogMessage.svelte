<script>
  import { onDestroy } from 'svelte'
  import dateFormatter from './date-formatter'

  export let message
  $: date = dateFormatter.format(message.date)

  const interval = setInterval(() => {
    date = dateFormatter.format(message.date)
  }, 1000)

  onDestroy(() => clearInterval(interval))
</script>

<style>
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

{#if message}
  <div class="message">
    <div class="content">{message.content}</div>
    <div class="date">{date}</div>
  </div>
{/if}
