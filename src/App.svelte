<script>
	import Chatroom from './components/Chatroom.svelte'
</script>

<main>
	<h1>Let's Chat</h1>

  <Chatroom />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
