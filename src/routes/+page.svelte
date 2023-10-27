<script>
  import CreateRoom from './../lib/CreateRoom.svelte';

</script>

<div class="main-page-holder">
  <div class="background-pic"></div>
  <div class="big-title">
    <h1>Roll for <br/> Initiative </h1>
  </div>
  <div class="create-room">    
    <CreateRoom />
  </div>
</div>

<style>
  .main-page-holder{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;

  }
  .background-pic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(../assets/Edouard-Joseph-dAlton-bat.jpg);
    background-size: auto;
    background-position: center;
    filter: brightness(60%);
    z-index: -1;
  }
  .big-title{
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .create-room{
    display: flex;
    justify-content: center;
    font-size: x-large;

  }
</style>