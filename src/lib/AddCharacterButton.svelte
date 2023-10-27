<script>
    import userData from "$lib/userData"
    
    export let characterId;
    export let showModal;
	
	$: numberOfCharacters = $userData["characters"].length;
 
    function handleAddCharacter(){
		$userData["characters"].push({characterName:"", initiativeModifier:0});
		$userData = $userData;
		characterId = numberOfCharacters;
		showModal();
	}

</script>

<button class="corner-button" on:click={handleAddCharacter} title="Add an extra character"><i class="fa-solid fa-person-circle-plus"></i></button>

<style>



i{
	font-size: medium;
}
</style>