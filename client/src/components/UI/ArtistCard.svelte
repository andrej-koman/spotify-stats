<script>
  export let src = "";
  export let name = "";
  export let link = "";

  function handleClick() {
    window.open(link, "_blank");
  }
</script>

<div class="artist-card" on:keydown={handleClick} on:click={handleClick}>
  <img class="artist-img" {src} alt="artist" />
  <span class="artist-name">{name}</span>
</div>

<style>
  .artist-card {
    width: 100%;
    height: 65px;
    background-size: cover;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    align-items: center;
  }

  .artist-card:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .artist-name:hover {
    text-decoration: underline;
  }
  .artist-img:hover {
    border: rgba(0, 0, 0, 0.1) 1.5px solid;
  }
  .artist-img {
    width: 50px;
    min-width: 50px;
    height: 50px;
    margin-right: 20px;
    border-radius: 100%;
    margin-left: 5px;
  }
  .artist-name {
    width: auto;
  }
</style>
