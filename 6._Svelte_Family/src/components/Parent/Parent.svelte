<script>
    export let parentName;
    export let handleFamilyMeetingCall;

    console.log(handleFamilyMeetingCall);
</script>

<h1 class="parent" on:click={handleFamilyMeetingCall(parentName)}> I am a Svelte parent and my name is {parentName} </h1>

<style>
    .parent{
        user-select: none;
    }
</style>
