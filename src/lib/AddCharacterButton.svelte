<script>
    import userData from "$lib/userData"
    
    export let characterId;
    export let showModal;
	
	$: numberOfCharacters = $userData["characters"].length;
 
    function handleAddCharacter(){
		$userData["characters"].push({characterName:"", initiativeModifier:0});
		characterId = numberOfCharacters;
		showModal();
	}

</script>

<button on:click={handleAddCharacter} title="Add an extra character"><i class="fa-solid fa-square-plus"></i></button>