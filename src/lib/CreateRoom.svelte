<script>
    import {goto} from '$app/navigation'
    async function createRoom(){
        let response = await fetch(`${location.protocol}//${location.hostname}:3000/rooms`, {method: "POST"});
        let slug = await response.text();
        goto(`/rooms/${slug}`);
    }

</script>

<button on:click={createRoom}>
    Create new encounter
</button>