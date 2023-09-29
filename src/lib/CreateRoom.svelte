<script>
    async function createRoom(){
        let response = await fetch(`${location.protocol}//${location.hostname}:3000/rooms`, {method: "POST"});
        let data = await response.text();
        console.log(data);
        location.href = `./room`;
    }

</script>

<button on:click={createRoom}>
    Create room
</button>