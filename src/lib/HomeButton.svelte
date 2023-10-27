<script>
    import {goto} from '$app/navigation'
    async function goHome(){
        goto('/');
    }

</script>

<button class="corner-button" on:click={goHome} title="Home">
    <i class="fa-solid fa-dungeon"></i>
</button>

<style>


i{
	font-size: medium;
}
</style>