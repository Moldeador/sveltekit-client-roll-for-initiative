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
		if ($userData["characters"].length === 1){
			$userData["characters"] = [{characterName:"",initiativeModifier:0}];
		} else if ($userData["characters"].length > 1){
			$userData["characters"].splice(id, 1);
		}
		$userData = $userData;
	}

	function withSign(n, withSpace) { return `${n < 0 ? '-' : '+'}${withSpace ? ' ' : ''}${Math.abs(n)}`; }

</script>



<div class="charactersHolder" style:grid-template-columns="repeat({$userData.characters.length < 2 ? 1 : 2}, 1fr)">

	{#if roomState==="waitingForDM"}
		{#each $userData.characters as character, index}
			<section>
			<div class="character">
				<div class="toprow">
						<button class="corner-button top-left" on:click={()=>handleEditCharacter(index)}><i class="fa-solid fa-wand-sparkles"></i></button>
						{character.characterName}
						<button class="corner-button top-right" on:click={()=>handleDeleteCharacter(index)}><i class="fa-solid fa-skull"></i></button>
				</div>
				<div class="bottomrow">
					{withSign(character.initiativeModifier)}
					<div class="bottomrow-label">Initiative Modifier</div>
				</div>
			</div>
			</section>
		{/each}
	{:else if roomState==="initiativeRoll"}
		{#each charactersData as character}
			{#if character.isMe}
				{#if character.roll === null}
					<section>
					<div class="character">
						<div class="toprow no-buttons">
								{character.characterName}
						</div>
						<div class="bottomrow">
							{withSign(character.initiativeModifier)}
							<div class="bottomrow-label">Initiative Modifier</div>
						</div>
					</div>
					</section>
				{:else}
					<section>
					<div class="character">
						<div class="toprow no-buttons">
								{character.characterName}
						</div>
						<div class="bottomrow">
							{character.roll} {withSign(character.initiativeModifier, true)}
							<div class="bottomrow-label">Your Roll</div>
						</div>
					</div>
					</section>
				{/if}
			{/if}
		{/each}
	{:else if roomState==="turnOrder"}
		{#each charactersData as character}
			{#if character.isMe}
				<section>
				<div class="character">
					<div class="toprow no-buttons">
							{character.characterName}
					</div>
					<div class="bottomrow">
						{character.turnOrder}
						<div class="bottomrow-label">Turn Order</div>
					</div>
				</div>
				</section>
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

	section{
		display: flex;
  		justify-content: center;
  		align-items: center;
	}
	.character{
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		text-align: center;
		max-width: 200px;
		max-height: 300px;
		width: 100%;
		height: 100%;
		background-color: #00000050;
	}

	.toprow{
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		font-size: x-large;
	}

	.toprow.no-buttons{
		justify-content: center;
	}

	.bottomrow{
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		font-size: 60px;    
		padding-bottom: 24px;
	}

	.bottomrow-label{
		position: absolute;
		font-size:small;
		bottom: -2px;
		background-color: #ffffff50;
		color: white;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
		padding-left: 5px;
		padding-right: 5px;
		font-family: 'Sen Variable', sans-serif;

	}

	.corner-button.top-left{
		border-top-left-radius: 10px;
		border-bottom-right-radius: 5px;
	}
	.corner-button.top-right{
		border-top-right-radius: 10px;
		border-bottom-left-radius: 5px;
	}

i{
	font-size: small;
}

    
</style>