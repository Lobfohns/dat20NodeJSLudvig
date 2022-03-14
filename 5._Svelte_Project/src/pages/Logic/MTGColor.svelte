<script>
	const colors = {
        black: "💀",
        red: "🔥",
        blue: "💧",
        green: "🌳",
        white: "☀️"
	}

	// the name is updated whenever the prop value changes...
	export let colorname;

	// ...but the "emoji" variable is fixed upon initialisation of the component
	const emoji = colors[colorname];
</script>

<p>
	<span>The Icon for { colorname } is { emoji }</span>
</p>

<style>
	p {
		margin: 0.8em 0;
	}
	span {
		display: inline-block;
		padding: 0.2em 1em 0.3em;
		text-align: center;
		border-radius: 0.2em;
		background-color: #FFDFD3;
	}
</style>