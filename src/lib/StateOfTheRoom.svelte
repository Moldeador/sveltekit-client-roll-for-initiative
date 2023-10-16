<script>
    export let roomState;
    export let sendDataToServer;
    export let isAdmin = false;
    export let usersData;


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
            <div class="user">
                <div class="bottomrow">Waiting for DM to start the encounter...</div>
            </div>
        {/if}
    {:else if roomState==="initiativeRoll"}
        {#each usersData as user}
            {#if user.isMe}
                {#if user.roll===null}
                    <div class="user">
                        <div class="toprow">Your Init Mod</div>
                        <div class="bottomrow">{user.initiativeModifier}</div>
                    </div> 
                    <button on:click={handleRollForInitiative}>Roll for initiative!</button>
                {:else}
                    <div class="user">
                        <div class="toprow">Your Roll</div>
                        <div class="bottomrow">{user.roll} + {user.initiativeModifier}</div>
                    </div> 
                {/if}
            {/if}
        {/each}
    {:else if roomState==="turnOrder"}
        {#each usersData as user}
            {#if user.isMe}
                <div class="user">
                    <div class="toprow">Your Turn Order</div>
                    <div class="bottomrow">{user.turnOrder}</div>
                </div> 
            {/if}
        {/each}
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