<script>
    import OuterEvent from './OuterEvent.svelte';
	let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
    function handleClick() {
		alert('keep touching me and see if I am bothered to react!!!')
	}
    function handleMessage(event) {
		alert(event.detail.text);
	}
    
</script>

<div on:mousemove={handleMousemove}>
	The mouse position is {m.x} x {m.y}
</div>

<style>
	div { width: 100%; height: 100%; }
</style>
<button on:click|once={handleClick}>
	Dont touch me
</button>

<OuterEvent on:message={handleMessage}/>

<button on:click={handleClick}>
	Why hello there
</button>