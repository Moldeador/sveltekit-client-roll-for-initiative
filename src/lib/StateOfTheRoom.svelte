<script>
    export let roomState;
    export let sendDataToServer;
    export let isAdmin = false;

    function handleChangeState(){
        sendDataToServer({event: "roomState", data: "initiativeRoll"})
    }
</script>

<div class="stateOfTheRoomHolder">

    <div class="sign">State of Room: {roomState}</div>
    {#if isAdmin}
    <button on:click={handleChangeState}>Change State</button>
    {/if}
</div>

<style>
.stateOfTheRoomHolder {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.sign{
    width: 100px;
    height: 100px;
    border: 1px solid black;
}

</style>