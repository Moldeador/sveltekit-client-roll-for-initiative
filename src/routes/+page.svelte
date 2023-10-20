<script>
  import CreateRoom from './../lib/CreateRoom.svelte';

</script>

<div class="main-page-holder">
  <div class="big-title">
    <h1>Roll for Initiative </h1>
    <h1>𓃛</h1>
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
  .big-title{
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