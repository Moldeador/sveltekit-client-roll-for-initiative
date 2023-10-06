<script>
    import Login from '$lib/Login.svelte'
    import Socket from '$lib/Socket.svelte'
    import userData from "$lib/userData"
    import HomeButton from '$lib/HomeButton.svelte'
	import CharacterSettingsButton from '$lib/CharacterSettingsButton.svelte';
	import Modal from '$lib/Modal.svelte';
    import { onMount } from 'svelte';

	let showModal;
	let closeModal;

	onMount(() => {
		if ($userData.characterName==='') {
			showModal();
		}
	});
</script>

<Modal bind:showModal bind:closeModal>
	<Login on:submit={closeModal} />
</Modal>


<div class="top-navigation">
	<CharacterSettingsButton on:click={showModal} />
	<h3>Roll for initiative!</h3>
	<HomeButton />
</div>

<div class="center"></div>


<div class="socket">
	<Socket />
</div>

<style>
    .top-navigation{
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		background-color: rebeccapurple;
		border: 2px solid black;
    }

	.center{
		flex-basis: 300px;
		background-color: green;
		border: 2px solid black;

	}

	.socket{
		background-color: darkred;
		border: 2px solid black;

	}
</style>
