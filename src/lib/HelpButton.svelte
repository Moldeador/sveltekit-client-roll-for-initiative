<script>
    export let showHelp;
	
 
    function handleShowHelp(){
		showHelp();
	}

</script>

<button class="corner-button" on:click={handleShowHelp} title="Help"><i class="fa-solid fa-question"></i></button>

<style>



i{
	font-size: medium;
}
</style>