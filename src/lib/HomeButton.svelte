<script>
    import {goto} from '$app/navigation'
    async function goHome(){
        goto('/');
    }

</script>

<button on:click={goHome}>
    Home
</button>