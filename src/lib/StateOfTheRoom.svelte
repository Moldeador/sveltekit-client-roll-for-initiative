<script>
    export let roomState;
    export let sendDataToServer;
    export let isAdmin = false;
    export let roll;
    export let turnOrder;

    function handleChangeState(){
        sendDataToServer({event: "roomState", data: "initiativeRoll"})
    }

    function handleRollForInitiative(){
        sendDataToServer({event: "roll"})
    }
</script>

<div class="stateOfTheRoomHolder">

    {#if roomState==="waitingForDM"}
        {#if isAdmin===true}
            <button on:click={handleChangeState}>Start Combat</button>
        {:else}
            <div class="sign">Waiting for DM</div>
            
        {/if}
    {:else if roomState==="initiativeRoll"}
        <button on:click={handleRollForInitiative}>Roll for initiative!</button>
        <div class="sign">Your Roll: {roll}</div>
    {:else if roomState==="turnOrder"}
        <div class="sign">turn order: {turnOrder}</div>
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