<script>
import Child from "../../components/Child/Child.svelte";

import Parent from "../../components/Parent/Parent.svelte";

import { supermarket }  from "../../store/supermarket.js"
console.log($supermarket);
const parents = [
    {
        key: 1,
        name: "Far"
    },
    {
        key: 2,
        name: "Mor"
    }
];

    function onFamilyMeetingCalled(whoCalled) {
        console.log("Familiy meeting called by", whoCalled);
    }
</script>


<h1>This is the home of my svelte familiy</h1>

{#each parents as parent (parent.key)}
    <Parent handleFamilyMeetingCall={onFamilyMeetingCalled} parentName = {parent.name} />
{/each}

<Child handleFamilyMeetingCall={onFamilyMeetingCalled} stereotype="bright-kid" childName = "Ludvig" />
<Child handleFamilyMeetingCall={onFamilyMeetingCalled} stereotype="black-sheep" childName = "GUSTAV" />
<Child handleFamilyMeetingCall={onFamilyMeetingCalled} isGirl={true} childName = "LP" />

<h1>This is the online portal for the supermarket</h1>
<p>{JSON.stringify($supermarket)}</p>