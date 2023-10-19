import { writable } from "svelte/store";

function getInitialUid(){
    let uid = localStorage.getItem("uid");
    if (! uid) uid = "id" + Math.random().toString(16).slice(2);
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