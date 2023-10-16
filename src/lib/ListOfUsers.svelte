<script>
    export let usersData;
</script>

<div class="usersHolder">
    {#each usersData as user}
    <div class="user">
        <div class="toprow">{user.characterName}</div>
        {#if user.roll===null}
            <div class="bottomrow">{user.initiativeModifier}</div>
        {:else if user.turnOrder===null}

            <div class="bottomrow">{user.roll} + {user.initiativeModifier}</div>
        {:else}
            <div class="bottomrow">{user.turnOrder}</div>
        {/if}
    </div>
    
    
    {/each}

</div>

<style>
.usersHolder {
    display: flex;
    width: 100%;
    height: 100%;
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
    font-size: 2em;    
}


</style>