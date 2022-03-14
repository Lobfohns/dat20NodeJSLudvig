<script>
    let count = 0;
    $: doubled = count * 2;
    $: if (count >= 13) {
        alert("Stop touching me!!!!");
        count = 12;
    }
    
    function incrementCount() {
        count += 1;
    }
</script>

<button on:click={incrementCount}>
    you touched me {count} {count === 1 ? "time" : "times"}
</button>

<p>{count} doubled is {doubled} og det er fedt hvis man skal bruge en value flere gange eller hvis de depender på en anden value</p>