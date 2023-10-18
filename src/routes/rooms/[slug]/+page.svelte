<script>
    import Login from '$lib/Login.svelte'
    import Socket from '$lib/Socket.svelte'
    import ListOfUsers from '$lib/ListOfUsers.svelte'
    import userData from "$lib/userData"
    import HomeButton from '$lib/HomeButton.svelte'
	import Modal from '$lib/Modal.svelte';
	import StateOfTheRoom from '$lib/StateOfTheRoom.svelte';
    import { onMount } from 'svelte';
    import YourCharacters from '$lib/YourCharacters.svelte';

	let showModal;
	let closeModal;

	onMount(() => {
		if ($userData.characters[0].characterName==='') {
			showModal();
		}
	});

	let charactersData = [];
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

<Socket bind:charactersData bind:roomState bind:sendDataToServer bind:isAdmin />

<div class="topNavigation">
	<HomeButton />
	<p>Roll for initiative!</p>
	<button on:click={handleAddCharacter} title="Add an extra character"><i class="fa-solid fa-square-plus"></i></button>
</div>

<div class="center">
	<YourCharacters {showModal} bind:characterId/>
</div>

<div class="stateOfGame">
	<StateOfTheRoom {roomState} {sendDataToServer} {isAdmin} {charactersData}/>
</div>

<div class="listOfUsers">
    <ListOfUsers {charactersData} />
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

	.stateOfGame{
		flex: 0 0 3em;
		border: 1px groove black;
	}

	.listOfUsers{
		flex: 0 0 8em;
		border: 1px groove black;
	}


</style>
