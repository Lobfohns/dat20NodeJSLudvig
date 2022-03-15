<script>
   export let childName
   export let isGirl = false;
   export let stereotype = "";
   export let handleFamilyMeetingCall;
</script>



<div
    on:click={handleFamilyMeetingCall(childName)}
    class:girly={isGirl}
    class={stereotype || "beyond-any-stereotype"}
>
    
    <h1>Hi, I am {childName}</h1>
</div>

<style>
    .girly {
        background-color: pink;
    }
    .black-sheep {
        background-color: black;
        color: white;
    }
    .bright-kid {
        background-color: yellow;
    }
    .child {
        user-select: none;
    }
</style>