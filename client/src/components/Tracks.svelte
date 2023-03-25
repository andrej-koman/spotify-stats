<script>
  import Top from "./Top.svelte";
  import TrackCard from "./UI/TrackCard.svelte";
  import Loader from "./Loader.svelte";
  import { onMount } from "svelte";
  import { getAllTopTracks } from "../spotify.js";
  import { formatDuration } from "../utils/index.js";

  let currentlyActive = "All time";
  let allTracks;
  let currentTracks;

  const fetchTracks = async () => {
    try {
      const data = await getAllTopTracks();
      allTracks = data;
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
      currentTracks = allTracks.longTerm;
    }
    if (e.detail === "6 months") {
      currentTracks = allTracks.mediumTerm;
    }
    if (e.detail === "4 weeks") {
      currentTracks = allTracks.shortTerm;
    }
  };

  onMount(() => {
    fetchTracks().then(() => {
      currentTracks = allTracks.longTerm;
    });
    window.scrollTo(0, 0);
  });
</script>

<Top {toggleItem} {toggleSwitch} title="Top Tracks" {currentlyActive}>
  {#if currentTracks}
    {#each currentTracks as track (track.id)}
      <TrackCard
        src={track.album.images[0].url}
        name={track.name}
        link={track.external_urls.spotify}
        duration={formatDuration(track.duration_ms)}
        album={track.album.name}
        artist={track.artists[0].name}
      />
    {/each}
  {:else}
    <Loader />
  {/if}
</Top>