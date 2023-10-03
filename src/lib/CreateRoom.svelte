<script>
    async function createRoom(){
        let response = await fetch(`${location.protocol}//${location.hostname}:3000/rooms`, {method: "POST"});
        let slug = await response.text();
        location.href = `./room/${slug}`;
    }

</script>

<button on:click={createRoom}>
    Create room
</button>