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
</script>

<Modal bind:showModal bind:closeModal>
	<Login on:submit={closeModal} />
</Modal>

<Socket bind:usersData bind:roomState bind:sendDataToServer bind:isAdmin />

<div class="topNavigation">
	<CharacterSettingsButton on:click={showModal} />
	<p>Roll for initiative!</p>
	<HomeButton />
</div>

<div class="center">
	<StateOfTheRoom {roomState} {sendDataToServer} {isAdmin} {usersData}/>
</div>


<div class="listOfUsers">
    <ListOfUsers {usersData}/>
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
		flex-grow: 1;
		border: 1px groove black;

	}

	.listOfUsers{
		flex: 0 0 10em;
		border: 1px groove black;
	}
</style>
