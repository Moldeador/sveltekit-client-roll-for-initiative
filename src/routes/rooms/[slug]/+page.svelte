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
	<p>Roll for initiative!</p>
	<HomeButton />
</div>

<div class="center"></div>


<div class="socket">
	<Socket />
</div>

<style>
    .top-navigation{
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

	.socket{
		flex: 0 0 10em;
		border: 1px groove black;
	}
</style>
