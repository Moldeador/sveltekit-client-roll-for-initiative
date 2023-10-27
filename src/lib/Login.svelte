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
    <input type="text" id="characterName" name="characterName" bind:value={characterName}>

    <label for="initiativeModifier">Initiative modifier:</label>
    <div class="slidecontainer">
        <input type="range" min="-10" max="10" bind:value={initiativeModifier} class="slider" id="initiativeModifier" name="initiativeModifier">
    </div>
        <span id="sliderValue">{initiativeModifier}</span>
    <button class="inverted">Submit</button>
</form>

<style>
form{
    display: flex;
    flex-direction: column;
    margin: 5px;
    justify-content: center;
    align-items: center;
}
button{
    margin-top: 20px;
    margin-bottom: 10px;
}
input[type=text] {
  font-family: 'Sen Variable', sans-serif;
  width: 100%;
  padding: 12px 20px;
  margin-top: 5px;
  margin-bottom: 20px;

  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input[type=text]:focus {
  border: 3px solid #555;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;  
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%; 
  background: #323232;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #323232;
  cursor: pointer;
}
</style>
