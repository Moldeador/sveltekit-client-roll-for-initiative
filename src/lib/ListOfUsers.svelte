<script>
    export let usersData;
</script>

<h4>List of users</h4>
<div>
    {#each usersData as user}
    
    <br/>
    name: {user.characterName}
    <br/>
    initiative modifier: {user.initiativeModifier}
    <br/>
    {/each}
</div>