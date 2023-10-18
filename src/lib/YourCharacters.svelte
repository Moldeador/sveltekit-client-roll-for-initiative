<script>
    import userData from "$lib/userData"

    export let characterId;
    export let showModal;
	export let charactersData;
    export let roomState;

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

	{#if roomState==="waitingForDM"}
		{#each $userData.characters as character, index}
			<div class="character">
				<div class="toprow">
						<button on:click={()=>handleEditCharacter(index)}><i class="fa-solid fa-user-gear"></i></button>
						{character.characterName}
						<button on:click={()=>handleDeleteCharacter(index)}><i class="fa-solid fa-xmark"></i></button>
				</div>
				<div class="bottomrow">
					<div>{character.initiativeModifier}</div>
				</div>
				<div class="initiativeModifierLabel">Initiative Modifier</div>
			</div>
		{/each}
	{:else if roomState==="initiativeRoll"}
		{#each charactersData as character}
			{#if character.isMe}
				{#if character.roll === null}
					<div class="character">
						<div class="toprow">
								{character.characterName}
						</div>
						<div class="bottomrow">{character.initiativeModifier}</div>
						<div class="initiativeModifierLabel">Initiative Modifier</div>
					</div>
				{:else}
					<div class="character">
						<div class="toprow">
								{character.characterName}
						</div>
						<div class="bottomrow">{character.roll}+{character.initiativeModifier}</div>
						<div class="initiativeModifierLabel">Your Roll</div>
					</div>
				{/if}
			{/if}
		{/each}
	{:else if roomState==="turnOrder"}
		{#each charactersData as character}
			{#if character.isMe}
				<div class="character">
					<div class="toprow">
							{character.characterName}
					</div>
					<div class="bottomrow">{character.turnOrder}</div>
					<div class="initiativeModifierLabel">Turn Order</div>
				</div>
			{/if}
		{/each}
	{/if}
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
		flex-direction: column;
		border: 1px solid black;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		font-size: 2em;    
	}

	.initiativeModifierLabel{
		font-size: x-small;
	}


    
</style>