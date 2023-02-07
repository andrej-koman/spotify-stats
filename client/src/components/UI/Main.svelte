<main>
  <div class="main-container">
    <slot />
  </div>
</main>

<style>
  main {
    margin-left: 100px;
  }
  .main-container {
    padding: 80px;
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    max-width: 1400px;
    min-height: 100vh;
  }
</style>