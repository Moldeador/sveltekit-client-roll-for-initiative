<script>
    let characterName;
    let initiativeModifier=0;
    let uid; 

    characterName = localStorage.getItem("characterName");
    initiativeModifier = localStorage.getItem("initiativeModifier");
    uid = localStorage.getItem("uid");
    console.log(`local stored uid: ${uid}`);

    if (! uid){
        console.log("no hay uid");
        uid = crypto.randomUUID();
        console.log(`new uid: ${uid}`);
        localStorage.setItem("uid", uid)    
    }

    async function save(event){
        event.preventDefault();
		localStorage.setItem("characterName", characterName);
		localStorage.setItem("initiativeModifier", initiativeModifier);
    }
</script>
<div class="form-container">
    <form>
        <label for="characterName">Character name:</label>
        <br>
        <input type="text" id="characterName" name="characterName" bind:value={characterName}>
        <br>
        <label for="initiativeModifier">Initiative modifier:</label>
        <br>
        <div class="slidecontainer">
            <input type="range" min="-5" max="5" bind:value={initiativeModifier} class="slider" id="initiativeModifier" name="initiativeModifier">
            <span id="sliderValue">{initiativeModifier}</span>
        </div>	
        <button on:click={save}>Save</button>
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