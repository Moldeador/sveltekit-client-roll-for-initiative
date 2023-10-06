<script>
  import batLogo from './../assets/Edouard-Joseph-dAlton-bat.jpg'
  import CreateRoom from './../lib/CreateRoom.svelte';

  let batDesciption = "An illustration by Edouard Joseph d’Alton of a bat's squeleton";
</script>
  <h1>Goblin 𓃛 Archive</h1>
    <CreateRoom />
  <div>
    <a href="https://www.dmsguild.com/product/352670/Mordenkainen-in-Barovia" target="_blank" rel="noreferrer">
      <img src={batLogo} class="logo" title={batDesciption} alt={batDesciption} />
    </a>
  </div>




<style>
  .logo {
    height: 30em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em DarkRed);
  }
</style>