<script>
    import userData from "$lib/userData"
    export let method = "";
    export let characterId;



	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();


    let characterName;
    let initiativeModifier;

    function saveUserData(){
        $userData.characters[characterId].characterName = characterName;
        $userData.characters[characterId].initiativeModifier = initiativeModifier;
		dispatch('submit');
    }

    $: updateInitialValues(characterId); 

    function updateInitialValues(characterId){
        characterName = $userData.characters[characterId].characterName;
        initiativeModifier = $userData.characters[characterId].initiativeModifier;
    }

</script>


<form on:submit|preventDefault={saveUserData} method={method}>
    <label for="characterName">Character name:</label>
    <br>
    <input type="text" id="characterName" name="characterName" bind:value={characterName}>
    <br>
    <label for="initiativeModifier">Initiative modifier:</label>
    <br>
    <div class="slidecontainer">
        <input type="range" min="-5" max="5" bind:value={initiativeModifier} class="slider" id="initiativeModifier" name="initiativeModifier">
        <span id="sliderValue">{initiativeModifier}</span>
    </div>
    <input type="submit" value="Submit">
</form>


