<script>
    import Login from '$lib/Login.svelte'
    import Socket from '$lib/Socket.svelte'
    import ListOfUsers from '$lib/ListOfUsers.svelte'
    import userData from "$lib/userData"
    import HomeButton from '$lib/HomeButton.svelte'
	import CharacterSettingsButton from '$lib/CharacterSettingsButton.svelte';
	import Modal from '$lib/Modal.svelte';
	import StateOfTheRoom from '$lib/StateOfTheRoom.svelte';
    import { onMount } from 'svelte';

	let showModal;
	let closeModal;

	onMount(() => {
		if ($userData.characters[0].characterName==='') {
			showModal();
		}
	});

	let usersData = [];
	let roomState = "";
	let isAdmin = false;

	let sendDataToServer = null;

	$: numberOfCharacters = $userData["characters"].length;
	let characterId = 0;

	function handleAddCharacter(){
		$userData["characters"].push({characterName:"", initiativeModifier:0});
		characterId = numberOfCharacters;
		showModal();

	}
</script>

<Modal bind:showModal bind:closeModal>
	<Login on:submit={closeModal} {characterId}/>
</Modal>

<Socket bind:usersData bind:roomState bind:sendDataToServer bind:isAdmin />

<div class="topNavigation">
	<CharacterSettingsButton on:click={showModal} />
	<p>Roll for initiative!</p>
	<HomeButton />
</div>

<div class="center">
	<div class="usersHolder">
		{#each $userData.characters as character}
			<div class="user">
				<div class="toprow">{character.characterName}</div>
				<div class="bottomrow">{character.initiativeModifier}</div>
			</div>
		{/each}
				<button on:click={handleAddCharacter}><i class="fa-solid fa-square-plus"></i></button>
	</div>
	<StateOfTheRoom {roomState} {sendDataToServer} {isAdmin} {usersData}/>
</div>


<div class="listOfUsers">
    <ListOfUsers {usersData} />
</div>

<style>
    .topNavigation{
		flex: 0 0 3em;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		border: 1px groove black;
    }

	.center{
		display: flex;
		flex-flow: column;
		flex-grow: 1;
		border: 1px groove black;

	}

	.listOfUsers{
		flex: 0 0 10em;
		border: 1px groove black;
	}


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


	.bottomrow{
		display: flex;
		border: 1px solid black;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		font-size: 2em;    
	}

</style>
