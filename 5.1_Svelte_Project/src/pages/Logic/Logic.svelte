<script>
	let user = { angry: false };

	function toggle() {
		user.angry = !user.angry;
	}
    let x = 8;
    let coolClips = [
		{ id: 'JEhVq3dV0wU', name: 'Me 10 years ago eating hotpot' },
		{ id: 'XHNHq1mC0VQ', name: 'A concert I really like' },
		{ id: 'RDWrWPo6NNs', name: 'Something I can post after I win in league' }
	];
    import MTGColor from './MTGColor.svelte';

	let mtgcolors = [
		{ id: 1, colorname: 'black' },
		{ id: 2, colorname: 'red' },
		{ id: 3, colorname: 'blue' },
		{ id: 4, colorname: 'green' },
		{ id: 5, colorname: 'white' },
	];

	function handleClick() {
		mtgcolors = mtgcolors.slice(1);
	}
</script>

{#if user.angry}
	<button on:click={toggle}>
		Jeg er sur
	</button>
{:else}
	<button on:click={toggle}>
		Jeg er glad
	</button>
{/if}

{#if x > 10}
	<p>{x} is greater than 10</p>
{:else}
	{#if 5 > x}
		<p>{x} is less than 5</p>
	{:else}
		<p>{x} is between 5 and 10</p>
	{/if}
{/if}

<h1>A couple cool youtube videos</h1>

<ul>
	{#each coolClips as { id, name }, i}
		<li><a target="_blank" href="https://www.youtube.com/watch?v={id}">
			{i + 1}: {name}
		</a></li>
	{/each}
</ul>

<button on:click={handleClick}>
	Remove first color
</button>

{#each mtgcolors as mtgcolor (mtgcolor.id) }
	<MTGColor colorname={mtgcolor.colorname}/>
{/each}