<script>
    import {goto} from '$app/navigation'
    async function goHome(){
        goto('/');
    }

</script>

<button on:click={goHome}>
    <i class="fa-solid fa-home"></i>
</button>