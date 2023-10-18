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



<div class="usersHolder">
    {#each $userData.characters as character, index}
        <div class="user">
            <div class="toprow">{character.characterName}<button on:click={()=>handleDeleteCharacter(index)} style="font-size:7px"><i class="fa-solid fa-xmark"></i></button> </div>
            <div class="bottomrow">{character.initiativeModifier}</div>
            <button on:click={()=>handleEditCharacter(index)}><i class="fa-solid fa-user-gear"></i></button>

        </div>
    {/each}
</div>


<style>

	.usersHolder {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}

	.user{
		display: flex;
		flex-direction: column;
		text-align: center;
		width: 100px;
		height: 100px;
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