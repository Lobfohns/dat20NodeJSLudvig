<script>
	import PeopleTable from "./components/Tables/PeopleTable.svelte";
</script>

<main>
	<!-- TableHead is imported to TableRow which is then imported to PeopleTable which is then imported to App.svelte. -->
	<PeopleTable/>
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