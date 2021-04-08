<script>
  import { fuzzyDate } from '../actions'

  export let message
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
    <div class="date" use:fuzzyDate={{date: message.date}}></div>
  </div>
{/if}
