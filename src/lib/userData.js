import { writable } from "svelte/store";

function getInitialUid(){
    let uid = localStorage.getItem("uid");
    if (! uid) uid = crypto.randomUUID();
    return uid;
}
const userData = new writable(
    {
        uid: getInitialUid(),
        characterName: localStorage.getItem("characterName")??'',
        initiativeModifier: localStorage.getItem("initiativeModifier")??0,
    }
);

userData.subscribe((data)=>{
    localStorage.setItem("uid", data.uid);
    localStorage.setItem("characterName", data.characterName);
    localStorage.setItem("initiativeModifier", data.initiativeModifier);
});

export default userData;