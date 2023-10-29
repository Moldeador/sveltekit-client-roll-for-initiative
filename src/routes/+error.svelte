<script>
	import { page } from '$app/stores';
</script>

<div class="error-page-holder">
<div class="background-pic"></div>
<h1>{$page.status}: {$page.error.message}</h1>
</div>
<style>
  .error-page-holder{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
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
</style>