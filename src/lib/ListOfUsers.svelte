<script>
    export let usersData;
</script>

<div class="users-holder">
    {#each usersData as user}
    <div class="user">
        <div class="toprow">{user.characterName}</div>
        <div class="bottomrow">{user.initiativeModifier}</div>
    </div>
    
    
    {/each}

</div>

<style>
.users-holder {
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

.toprow{

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