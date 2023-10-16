import { writable } from "svelte/store";

function getInitialUid(){
    let uid = localStorage.getItem("uid");
    if (! uid) uid = crypto.randomUUID();
    return uid;
}
const userData = new writable(
    {
        uid: getInitialUid(),
        characters: JSON.parse(localStorage.getItem("characters"))??[{characterName:"",initiativeModifier:0}],
    }
);

userData.subscribe((data)=>{
    localStorage.setItem("uid", data.uid);
    localStorage.setItem("characters", JSON.stringify(data.characters));
});

export default userData;