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

<button on:click={handleAddCharacter} title="Add an extra character"><i class="fa-solid fa-spaghetti-monster-flying"></i></button>

<style>


button{
    background-color: var(--colour-light);
	display: flex;
	flex-grow: 0;
	align-items: center;
	padding: 0.4em 0.4em;
}
i{
	font-size: medium;
	color: var(--colour-dark)
}
</style>