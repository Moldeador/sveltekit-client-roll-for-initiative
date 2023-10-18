<script>
    export let charactersData;
</script>

<div class="charactersHolder">
    {#each charactersData as character}
        <div class="character">
            <div class="toprow">{character.characterName}</div>
            {#if character.roll===null}
                <div class="bottomrow">{character.initiativeModifier}</div>
            {:else if character.turnOrder===null}

                <div class="bottomrow">{character.roll} + {character.initiativeModifier}</div>
            {:else}
                <div class="bottomrow">{character.turnOrder}</div>
            {/if}
        </div>
    {/each}
</div>

<style>
.charactersHolder {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    gap: 10px;
    overflow-x: auto;
}

.character{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100px;
    height: 100px;
    border: 1px solid black;
    flex-shrink: 0;
}

.character:first-child{
    margin-left: auto;
}

.character:last-child{
    margin-right: auto;
}

.toprow{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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