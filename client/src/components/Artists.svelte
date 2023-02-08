<script>
  import Top from "./Top.svelte";
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
    }
  };

  onMount(() => {
    fetchArtists().then(() => {
      currentArtists = allArtists.longTerm;
    });
  });
</script>

<Top {toggleItem} {toggleSwitch} title="Top Artists" {currentlyActive}>
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
</Top>
