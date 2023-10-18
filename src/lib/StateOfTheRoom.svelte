<script>
    export let roomState;
    export let sendDataToServer;
    export let isAdmin = false;
    export let charactersData;


    function handleChangeState(){
        sendDataToServer({event: "roomState", data: "initiativeRoll"})
    }

    function handleRollForInitiative(){
        sendDataToServer({event: "roll"})
    }

    function isRollPending(charactersData){
        for (const character of charactersData){
            if (character.isMe) if (character.roll===null) return true; 
        }
        return false;
    }

    $: rollIsPending = isRollPending(charactersData);

</script>

<div class="stateOfTheRoomHolder">

    {#if roomState==="waitingForDM"}
        {#if isAdmin===true}
            <button on:click={handleChangeState}>Start Combat</button>
        {:else}
            <div class="user">
                <div class="bottomrow">Waiting for DM to start the encounter...</div>
            </div>
        {/if}
    {:else if (roomState==="initiativeRoll")}
        {#if rollIsPending}
                    <button on:click={handleRollForInitiative}>Roll for initiative!</button>
        {:else}
            <div>You have already rolled.</div>
        {/if}
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
.user{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100px;
    height: 100px;
    border: 1px solid black;
}


.bottomrow{
    display: flex;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    font-size: 1em;    
}
</style>