<script>
  export let src = "";
  export let name = "";
  export let link = "";
  export let duration = "";
  export let artist = "";
  export let album = "";

  function handleClick() {
    window.open(link, "_blank");
  }
</script>

<div class="track-card" on:keydown={handleClick} on:click={handleClick}>
  <img class="track-img" {src} alt="artist" />
  <div class="track-info">
    <div class="track-left">
      <span class="track-name">{name}</span>
      <br />
      <span class="track-artist-album">{artist} · {album}</span>
    </div>
    <span class="track-duration">{duration}</span>
  </div>
</div>

<style>
  .track-card {
    width: 100%;
    height: 65px;
    background-size: cover;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    align-items: center;
  }

  .track-card:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .track-img {
    width: 50px;
    min-width: 50px;
    height: 50px;
    margin-right: 20px;
    margin-left: 5px;
  }
  .track-img:hover {
    border: rgba(0, 0, 0, 0.1) 1.5px solid;
  }
  .track-name:hover {
    text-decoration: underline;
  }
  .track-name {
    width: auto;
    margin-bottom: 5px;
    border-bottom: 1px solid transparent;
  }
  .track-artist-album {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 1px;
    color: rgb(155, 155, 155);
    font-size: 14px;
    margin-top: 3px;
  }

  .track-info {
    display: grid;
    grid-template-columns: 1fr max-content;
    gap: 10px;
    width: 100%;
    padding-right: 10px;
  }

  .track-duration {
    color: rgb(155, 155, 155);
    font-size: 14px;
  }
</style>
