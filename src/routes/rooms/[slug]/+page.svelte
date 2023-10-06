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

<div class="top-navigation">
	<CharacterSettingsButton on:click={showModal} />
	<h3>Roll for initiative!</h3>
	<HomeButton />
</div>

<Modal bind:showModal bind:closeModal>
	<Login on:submit={closeModal} />
</Modal>

<div><p>{$userData.characterName} has entered the room!</p></div>

<Socket />

<style>
    .top-navigation{
  display: flex;
  flex-flow: row wrap;
  /* This aligns items to the end line on main-axis */
  justify-content: space-between;
    }
</style>
