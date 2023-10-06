<script>
    import userData from "$lib/userData"
    export let method = "";
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();


    let characterName = $userData.characterName;
    let initiativeModifier = $userData.initiativeModifier
    function saveUserData(){
        $userData.characterName = characterName;
        $userData.initiativeModifier = initiativeModifier;
		dispatch('submitted');
    }

</script>


<form on:submit={saveUserData} method={method}>
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


