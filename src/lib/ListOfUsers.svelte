<script>
    export let charactersData;
    export let roomState;
    $: if (roomState==="turnOrder") charactersData.sort((a,b)=>a["turnOrder"]-b["turnOrder"]);
</script>

<div class="charactersHolder">
    {#each charactersData as character}
        <div class="character">
            <div class="toprow">{character.characterName}</div>
            {#if character.roll===null}
                <div class="bottomrow">
                    {character.initiativeModifier}
                    <div class="bottomrow-label">Init. Mod.</div>
                </div>
            {:else if character.turnOrder===null}

                <div class="bottomrow">
                    {character.roll} + {character.initiativeModifier}
                    <div class="bottomrow-label">Roll</div>
                </div>
            {:else}
                <div class="bottomrow">
                    {character.turnOrder}
                    <div class="bottomrow-label">Turn Order</div>
                </div>
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
    background-color: var(--colour-dark);
}

.character{
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    background-color: var(--colour-light);
}

.character:first-child{
    margin-left: auto;
}

.character:last-child{
    margin-right: auto;
}

.toprow{
    padding: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--colour-dark);
}

.bottomrow{
    display: flex;
    position: relative;
    padding-bottom: 20px;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    font-size: 1em;    
    color: var(--colour-dark);
}

.bottomrow-label{
  position: absolute;
  font-size: xx-small;
  bottom: 0;
  background-color: var(--colour-dark);
  color: var(--colour-light);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
}


</style>