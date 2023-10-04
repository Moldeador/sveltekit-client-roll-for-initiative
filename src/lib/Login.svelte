<script>
    import userData from "$lib/userData"
    

</script>
<div class="form-container">
    <form>
        <label for="characterName">Character name:</label>
        <br>
        <input type="text" id="characterName" name="characterName" bind:value={$userData.characterName}>
        <br>
        <label for="initiativeModifier">Initiative modifier:</label>
        <br>
        <div class="slidecontainer">
            <input type="range" min="-5" max="5" bind:value={$userData.initiativeModifier} class="slider" id="initiativeModifier" name="initiativeModifier">
            <span id="sliderValue">{$userData.initiativeModifier}</span>
        </div>	
    </form>
</div>


<style>

    .form-container {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #f9f9f9;
        color: #213547;
        border-color: #213547;
        cursor: pointer;
        transition: border-color 0.25s;
    }
    form{
        text-align: center;
    }
</style>