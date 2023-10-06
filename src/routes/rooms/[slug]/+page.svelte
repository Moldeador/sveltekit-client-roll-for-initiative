<script>
    import Login from '$lib/Login.svelte'
    import Socket from '$lib/Socket.svelte'
    import userData from "$lib/userData"
    import HomeButton from '$lib/HomeButton.svelte'
	import Modal from '$lib/Modal.svelte';

	let showModal = false;

</script>

<div class="top-navigation">
<button on:click={() => (showModal = true)}>
    <i class="fa-solid fa-hat-wizard"></i>
</button>
<h3>Roll for initiative!</h3>
<HomeButton />
</div>




<Modal bind:showModal>
	<Login method={"dialog"}/>
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
