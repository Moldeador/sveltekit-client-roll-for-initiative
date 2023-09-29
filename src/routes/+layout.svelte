<script>
  import './styles.css';
  import Counter from './../lib/Counter.svelte'
</script>

<main>
  <h1>Goblin 𓃛 Thermomancer</h1>
  <slot />


  <div class="card">
    <Counter />
  </div>
</main>