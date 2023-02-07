<script>
  import Main from "./UI/Main.svelte";
  import RangeButton from "./UI/RangeButton.svelte";
  import ArtistCard from "./UI/ArtistCard.svelte";
  import Loader from "./Loader.svelte";
  import { onMount } from "svelte";
  import { getAllTopArtists } from "../spotify.js";

  let currentlyActive = "All time";
  let allArtists;
  let currentArtists;

  const fetchArtists = async () => {
    try {
      const data = await getAllTopArtists();
      allArtists = data;
      console.log(allArtists);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSwitch = (e) => {
    if (currentlyActive !== e.detail) {
      currentlyActive = e.detail;
    }
  };

  const toggleItem = (e) => {
    if (e.detail === "All time") {
        currentArtists = allArtists.longTerm;
    }
    if (e.detail === "6 months") {
        currentArtists = allArtists.mediumTerm;
    }
    if (e.detail === "4 weeks") {
        currentArtists = allArtists.shortTerm;
        console.log(currentlyActive);
    }
};

  onMount(() => {
    fetchArtists().then(() => {
      currentArtists = allArtists.longTerm;
    });
  });
</script>

<Main>
  <div class="artists-container">
    <div class="artists-header">
      <span>Top artists</span>
      <div class="artists-range-select">
        <RangeButton
          active={currentlyActive === "All time"}
          on:toggleSwitch={toggleSwitch}
          on:toggleItems={toggleItem}>All time</RangeButton
        >
        <RangeButton
          active={currentlyActive === "6 months"}
          on:toggleSwitch={toggleSwitch}
          on:toggleItems={toggleItem}>6 months</RangeButton
        >
        <RangeButton
          active={currentlyActive === "4 weeks"}
          on:toggleSwitch={toggleSwitch}
          on:toggleItems={toggleItem}>4 weeks</RangeButton
        >
      </div>
    </div>
    <div class="artists-content">
        {#if currentArtists}
        {#each currentArtists as artist (artist.id)}
          <ArtistCard
            src={artist.images[0].url}
            name={artist.name}
            link={artist.external_urls.spotify}
          />
        {/each}
      {:else}
        <Loader />
      {/if}
    </div>
  </div>
</Main>

<style>
  .artists-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .artists-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .artists-header > span {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: white;
  }
  .artists-content {
    margin-top: 20px;
  }
</style>
