<script>
    import userData from "$lib/userData"
    import ListOfUsers from "$lib/ListOfUsers.svelte";
    
    //Websocekt variables
    const pathname = window.location.pathname;
    const socketUrl = `ws://localhost:3000${pathname}`;

    const mywsServer = new WebSocket(socketUrl)
    let myMessages = []
    let isWebSocketConnected = false;
    let usersData = "eeeee";
    

    //enabling send message when connection is open
    mywsServer.onopen = function() {
        console.log("connected!")
        isWebSocketConnected = true;
    }
    //handling message event
    mywsServer.onmessage = function(event) {
        const { data } = event
        msgGeneration(data, "Server")
        const receivedMessageObject = JSON.parse(data);
        if (receivedMessageObject.event === "listOfUsers"){
            usersData = receivedMessageObject["data"];
        }
    }

    //Creating DOM element to show received messages on browser page
    function msgGeneration(msg, from) {
        let text = `${from} says: ${msg}`
        myMessages[myMessages.length] = text 
    }


    $: if (isWebSocketConnected)
        sendDataToServer({event: "userData", data: $userData});

    function sendDataToServer(data){
        mywsServer.send(JSON.stringify(data));
    }

</script>

<div>

    <ListOfUsers {usersData}/>
    <!--
    <h4>Messages from the websocket</h4>
    {#each myMessages as message}
    <div>{message}</div>
    {/each}
    -->
</div>

