<script>
    import {goto} from '$app/navigation'
    async function createRoom(){
        const port = (location.hostname==='rollforinitiative.goblinarchive.com') ? '/api' : ':3000'; 
        const response = await fetch(`${location.protocol}//${location.hostname}${port}/rooms`, {method: "POST"});
        const slug = await response.text();
        goto(`/rooms/${slug}`);
    }

</script>

<button  class="button-54" on:click={createRoom}>
    Create  new <br/>encounter
</button>
