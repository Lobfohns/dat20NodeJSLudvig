<script>
import UserRegistration from "./pages/UserRegistration/UserRegistration.svelte";
import colors from "./pages/Colors/Colors.svelte"

import { onMount } from "svelte";

let username; 

onMount(async () => {
	const response = await fetch("/api/fetchUser");
	const result = await response.json();
	username = data;
})

</script>

<main>
	{#if username}
		<div>
			{username}
		</div>
	{:else}
		<UserRegistration />
	{/if}

</main>

<style>
	main {
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