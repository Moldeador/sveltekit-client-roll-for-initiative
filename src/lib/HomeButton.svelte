<script>
    import {goto} from '$app/navigation'
    async function goHome(){
        goto('/');
    }

</script>

<button on:click={goHome} title="Home">
    <i class="fa-solid fa-dungeon"></i>
</button>

<style>

button{
    background-color: var(--colour-light);
	display: flex;
	flex-grow: 0;
	align-items: center;
	padding: 0.4em 0.4em;
}
i{
	font-size: medium;
	color: var(--colour-dark)
}
</style>