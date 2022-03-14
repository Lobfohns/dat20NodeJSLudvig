<script>
	
	import Introduction from "./pages/Introduction/CoolIntro.svelte"
	import Reactivity from "./pages/Reactivity/Reactivity.svelte";
	import Logic from "./pages/Logic/Logic.svelte"
	import Events from "./pages/Events/Events.svelte"
	export let name;
	
	let string = `GET READY FOR SOME COOL <strong>HTML</strong> STUFF`;
	const currentMood = {
		mood: "bad",
		reason: "I am tired",
		fix: "sleep"
	};
</script>

<main>
	<!-- <h1>Hello {name}!</h1> -->
	<!-- <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
	<p>{@html string}</p>
	<!-- <Introduction favNumber={666}/> -->
	<Introduction {...currentMood}/>
	<Reactivity/>
	<Logic/>
	<Events/>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>