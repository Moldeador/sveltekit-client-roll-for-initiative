<script>
    import userData from "$lib/userData"
    
    //Websocekt variables
    const pathname = window.location.pathname;
    console.log(`protocol: ${location.protocol}`);
    const protocol = (location.protocol === "https:") ? "wss:" : "ws:";
    const port = (location.hostname==='rollforinitiative.goblinarchive.com') ? '/api' : ':3000'; 
    const socketUrl = `${protocol}//${location.hostname}${port}${pathname}`;

    const mywsServer = new WebSocket(socketUrl)
    let myMessages = []
    let isWebSocketConnected = false;
    export let charactersData;
    export let roomState;
    export let isAdmin = false;


    

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
            charactersData = receivedMessageObject["data"];
        } else if (receivedMessageObject.event === "roomState"){
            roomState = receivedMessageObject["data"];
        } else if (receivedMessageObject.event === "youAreAdmin"){
            isAdmin = true;
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
