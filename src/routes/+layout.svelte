<script>
  import './styles.css';
  import Counter from '$lib/Counter.svelte'
  import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<main>
  <slot />


  <div class="card">
    <Counter />
  </div>
</main>