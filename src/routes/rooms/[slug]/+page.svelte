<script>
    import Login from '$lib/Login.svelte'
    import Socket from '$lib/Socket.svelte'
    import userData from "$lib/userData"
    import HomeButton from '$lib/HomeButton.svelte'
	import Modal from '$lib/Modal.svelte';
    import '@fortawesome/fontawesome-free/css/all.min.css';

	let showModal = false;

</script>

<div class="top-navigation">
<button on:click={() => (showModal = true)}>
    <i class="fa-solid fa-hat-wizard"></i>
</button>
<HomeButton />
</div>




<Modal bind:showModal>
	<h2 slot="header">
		modal
		<small><em>adjective</em> mod·al \ˈmō-dəl\</small>
	</h2>

	<ol class="definition-list">
		<li>of or relating to modality in logic</li>
		<li>
			containing provisions as to the mode of procedure or the manner of taking effect —used of a
			contract or legacy
		</li>
		<li>of or relating to a musical mode</li>
		<li>of or relating to structure as opposed to substance</li>
		<li>
			of, relating to, or constituting a grammatical form or category characteristically indicating
			predication
		</li>
		<li>of or relating to a statistical mode</li>
	</ol>

	<a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>
</Modal>


<div><p>{$userData.characterName} has entered the room!</p></div>
<Login />
<Socket />

<style>
    .top-navigation{
  display: flex;
  flex-flow: row wrap;
  /* This aligns items to the end line on main-axis */
  justify-content: space-between;
    }
</style>
