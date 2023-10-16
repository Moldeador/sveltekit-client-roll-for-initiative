<script>
    import userData from "$lib/userData"
    
    //Websocekt variables
    const pathname = window.location.pathname;
    const socketUrl = `ws://localhost:3000${pathname}`;

    const mywsServer = new WebSocket(socketUrl)
    let myMessages = []
    let isWebSocketConnected = false;
    export let usersData;
    export let roomState;
    export let isAdmin = false;
    export let roll;
    export let turnOrder;


    

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
        if (receivedMessageObject.event === "listOfCharacters"){
            usersData = receivedMessageObject["data"];
        } else if (receivedMessageObject.event === "roomState"){
            roomState = receivedMessageObject["data"];
        } else if (receivedMessageObject.event === "youAreAdmin"){
            isAdmin = true;
        } else if (receivedMessageObject.event === "roll"){
            roll = receivedMessageObject["data"];
        } else if (receivedMessageObject.event === "turnOrder"){
            const allUsersData = receivedMessageObject["data"];
            turnOrder = allUsersData[$userData.uid];
        }
    }

    //Creating DOM element to show received messages on browser page
    function msgGeneration(msg, from) {
        let text = `${from} says: ${msg}`
        myMessages[myMessages.length] = text 
    }


    $: if (isWebSocketConnected)
        sendDataToServer({event: "userData", data: $userData});

    export function sendDataToServer(data){
        mywsServer.send(JSON.stringify(data));
    }

</script>


    <!--
    <h4>Messages from the websocket</h4>
    {#each myMessages as message}
    <div>{message}</div>
    {/each}
    -->

