<script>
    import userData from "$lib/userData"

    //Websocekt variables
    const pathname = window.location.pathname;
    const socketUrl = `ws://localhost:3000${pathname}`;

    const mywsServer = new WebSocket(socketUrl)
    let myMessages = []
    

    //enabling send message when connection is open
    mywsServer.onopen = function() {
        console.log("connected!")
    }
    //handling message event
    mywsServer.onmessage = function(event) {
        const { data } = event
        msgGeneration(data, "Server")
    }

    //Creating DOM element to show received messages on browser page
    function msgGeneration(msg, from) {
        let text = `${from} says: ${msg}`
        myMessages[myMessages.length] = text 
    }

    $: sendDataToServer($userData);

    function sendDataToServer(data){
        //console.log(data);
    }
    /*onMount(() => {
       const unsubcribe = $userData.subscribe(...);
        return () => {
            unsubscribe();
        };
    });*/


</script>

<div>
    <p>This is a new web socket connection:</p>

    {#each myMessages as message}
    <div>{message}</div>
    {/each}
</div>

