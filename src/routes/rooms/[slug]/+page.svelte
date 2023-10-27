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
    import AddCharacterButton from '$lib/AddCharacterButton.svelte';

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

	let characterId = 0;




</script>

<Modal bind:showModal bind:closeModal>
	<Login on:submit={closeModal} {characterId}/>
</Modal>

<Socket bind:charactersData bind:roomState bind:sendDataToServer bind:isAdmin />

<div class="room-page-holder">
  <div class="background-pic"></div>
	<div class="topNavigation">
		<HomeButton />
		<h2>Roll for initiative</h2>
		<AddCharacterButton {showModal} bind:characterId/>
	</div>

	<div class="center">
		<YourCharacters {charactersData} {roomState} {showModal} bind:characterId/>
	</div>

	<div class="stateOfGame">
		<StateOfTheRoom {roomState} {sendDataToServer} {isAdmin} {charactersData}/>
	</div>

	<div class="listOfUsers">
		<ListOfUsers {charactersData} {roomState} />
	</div>
</div>

<style>
	.room-page-holder{
		display:flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
    .topNavigation{
		flex: 0 0 ;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #00000050;
		margin-bottom: 20px;
    }

	.center{
		display: flex;
		flex-flow: column;
		flex-grow: 1;
		overflow-y: auto;
	}

	.stateOfGame{
		flex: 0 0 3em;
		margin: 20px;
	}

	.listOfUsers{
		flex: 0 0 6em;
	}
	.background-pic {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(../../../assets/Edouard-Joseph-dAlton-bat.jpg);
		background-size: auto;
		background-position: center;
		filter: brightness(60%);
		z-index: -1;
  }


</style>
