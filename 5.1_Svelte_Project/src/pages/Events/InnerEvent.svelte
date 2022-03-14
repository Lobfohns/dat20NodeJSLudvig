<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('message', {
			text: 'GENERAL KENOBI'
		});
	}
</script>

<button on:click={sayHello}>
	Why hello there
</button>