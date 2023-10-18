<script>
    import {goto} from '$app/navigation'
    async function goHome(){
        goto('/');
    }

</script>

<button on:click={goHome} title="Home">
    <i class="fa-solid fa-home"></i>
</button>