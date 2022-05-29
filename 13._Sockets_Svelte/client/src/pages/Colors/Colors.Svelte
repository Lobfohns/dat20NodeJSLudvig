<script>
    import io from "socket.io-client";

    const socket = io();

    let lastPersonToChangeAColor;

    socket.on("changeTheColor", ({ data, username }) => {
        //in svelte dont do access document.Colors. do it the svelte way
        document.body.style.backgroundColor = data;
        lastPersonToChangeAColor = username;
    })

    function changeColor(event) {
        socket.emit("colorChanged", { data: event.target.value });
    }
</script>

<input type="color" on:change="{changeColor}">