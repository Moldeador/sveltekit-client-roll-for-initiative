<script>
    export let roomState;
    export let sendDataToServer;
    export let isAdmin = false;
    export let charactersData;


    function handleStartCombat(){
        sendDataToServer({event: "roomState", data: "initiativeRoll"})
    }

    function handleRestartEncounter(){
        sendDataToServer({event: "roomState", data: "waitingForDM"})
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
    $: roomState;

</script>

<div class="stateOfTheRoomHolder">

    {#if roomState==="waitingForDM"}
        {#if isAdmin===true}
            <button on:click={handleStartCombat}>Start Combat</button>
        {:else}
                <div>Waiting for DM to start the encounter...</div>
        {/if}
    {:else if (roomState==="initiativeRoll")}
        {#if rollIsPending}
                    <button on:click={handleRollForInitiative}>Roll for initiative!</button>
        {:else}
            <div>You have already rolled.</div>
        {/if}
    {:else if (roomState==="turnOrder")}
        {#if isAdmin===true}
            <button on:click={handleRestartEncounter}>Start New Encounter</button>
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

</style>