<script>
    import userData from "$lib/userData"

    export let characterId;
    export let showModal;

	function handleEditCharacter(id){
		characterId = id;
		showModal();
	}

	function handleDeleteCharacter(id){
		$userData["characters"].splice(id, 1);
		$userData = $userData;
	}
</script>



<div class="charactersHolder" style:grid-template-columns="repeat({$userData.characters.length < 2 ? 1 : 2}, 1fr)">
    {#each $userData.characters as character, index}
        <div class="character">
            <div class="toprow">{character.characterName}<button on:click={()=>handleDeleteCharacter(index)} style="font-size:7px"><i class="fa-solid fa-xmark"></i></button> </div>
            <div class="bottomrow">{character.initiativeModifier}</div>
            <button on:click={()=>handleEditCharacter(index)}><i class="fa-solid fa-user-gear"></i></button>

        </div>
    {/each}
</div>


<style>

	.charactersHolder {
		display: grid;
		width: 100%;
		height: 100%;
		grid-gap: 10px;
	}

	.character{
		display: flex;
		flex-direction: column;
		text-align: center;
		width: 100%;
		height: 100%;
		border: 1px solid black;
	}

	.toprow{
		display: flex;
		justify-content: space-between;
	}

	.bottomrow{
		display: flex;
		border: 1px solid black;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		font-size: 2em;    
	}


    
</style>