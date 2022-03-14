<script>
    let coolIntro = "Super coooool intro";
    let src = "https://c.tenor.com/kqixRX0zKOcAAAAd/cool.gif";
    let name = "Lego Sunglasses";
    export let favNumber = 7;
    export let mood;
    export let reason;
    export let fix;
</script>

<h1>Hello {coolIntro}</h1>
<h1>My favorite number is {favNumber} because I am edgy</h1>
<img {src} alt ="{name}">
<p>
    I am in a <code>{mood}</code> mood because of {reason} and the fix is to {fix}
</p>

<style>
    h1 {
        color: green;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 2em;
    }
</style>