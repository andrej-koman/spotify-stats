<script>
    import { onMount } from "svelte";
    import { getRecentlyPlayed } from "../spotify";
    import Main from "./UI/Main.svelte";
    import Loader from "./Loader.svelte";
    import TrackCard from "./UI/TrackCard.svelte";
    import {formatDuration} from "../utils/index.js";
    import { v4 as uuidv4 } from 'uuid';

    let recentyPlayed;

    const fetchRecentlyPlayedData = async () => {
        const fetchedData = await getRecentlyPlayed();
        recentyPlayed = fetchedData.data.items;
        console.log(recentyPlayed);
    };

    onMount(() => {
        fetchRecentlyPlayedData();
        window.scrollTo(0, 0);
    });
</script>

<Main>
    {#if recentyPlayed}
        <div class="recently-played">
            <span>Recently played tracks</span>
            {#each recentyPlayed as item (uuidv4())}
                <TrackCard
                    src={item.track.album.images[0].url}
                    name={item.track.name}
                    link={item.track.external_urls.spotify}
                    duration={formatDuration(item.track.duration_ms)}
                    album={item.track.album.name}
                    artist={item.track.artists[0].name}
                />
            {/each}
        </div>
    {:else}
    <Loader />
    {/if}
</Main>

<style>
    .recently-played {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .recently-played > span {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: white;
    }
</style>