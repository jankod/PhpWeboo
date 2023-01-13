<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import Par from "./lib/Par.svelte";

  const components = new Map()
  components.set('Par', Par)

  let params = {text: 'to je text 333'}

</script>

<main>

<!--  <h1>Vite + Svelte</h1>-->

<!--  <div class="card">-->
<!--    <Counter />-->
<!--  </div>-->
<h2>Evo componente</h2>
<svelte:component this={components.get('Par')} {...params}/>

</main>

<style>

</style>
