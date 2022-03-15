<script>
import { supermarket } from "../../store/supermarket";  

   export let childName
   export let isGirl = false;
   export let stereotype = "";
   export let handleFamilyMeetingCall;

   function eatCandy() {
        supermarket.update(storeValue => {
            if (storeValue.candy > 0) storeValue.candy -= 1;
            return storeValue;
        }); 

        // $supermarket.candy--; need to introduce logic for this so it cant go to negative
   }
</script>



<div
    
    class:girly={isGirl}
    class={stereotype || "beyond-any-stereotype"}
>
   
    <h1 on:click={handleFamilyMeetingCall(childName)}>Hi, I am {childName}</h1>
    <div>Pieces of candy in the store: {$supermarket.candy}</div>
    <button on:click={eatCandy}>Eat CANDY</button>
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