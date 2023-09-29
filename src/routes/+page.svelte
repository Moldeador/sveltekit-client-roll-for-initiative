<script>
  import './styles.css';
  import batLogo from './../assets/Edouard-Joseph-dAlton-bat.jpg'
  import Counter from './../lib/Counter.svelte'
  import CreateRoom from './../lib/CreateRoom.svelte';

  let batDesciption = "An illustration by Edouard Joseph d’Alton of a bat's squeleton";
</script>

<main>
  <div>
    <a href="https://www.dmsguild.com/product/352670/Mordenkainen-in-Barovia" target="_blank" rel="noreferrer">
      <img src={batLogo} class="logo" title={batDesciption} alt={batDesciption} />
    </a>
  </div>
  <h1>Goblin 𓃛 Thermomancer</h1>

  <div class="card">
    <CreateRoom />
  </div>

  <div class="card">
    <Counter />
  </div>
</main>

<style>
  main {
    flex: 1;
    display: flex;
    place-items: center;
    flex-direction: column;
	}
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