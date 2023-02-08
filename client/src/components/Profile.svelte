<script>
  import { onMount } from "svelte";
  import { logout, getProfileData } from "../spotify.js";
  import ArtistCard from "./UI/ArtistCard.svelte";
  import TrackCard from "./UI/TrackCard.svelte";
  import Loader from "./Loader.svelte";
  import Button from "./UI/Button.svelte";
  import Main from "./UI/Main.svelte";
  import { formatDuration } from "../utils/index.js";

  var profileData;
  onMount(() => {
    getProfileData().then((data) => {
      profileData = data;
    });
    window.scrollTo(0, 0);
  });
</script>

<Main>
  {#if profileData}
    <header class="profile-header">
      <img
        src={profileData.user.images[0].url}
        alt="profile"
        class="profile-img"
      />
      <a
        class="profile-display-name"
        href={profileData.user.external_urls.spotify}
        target="_blank"
        rel="noreferrer">{profileData.user.display_name}</a
      >
      <div class="profile-stats">
        <div class="profile-stat">
          <span class="profile-stat-number"
            >{profileData.user.followers.total}</span
          >
          <span class="profile-stat-name">Followers</span>
        </div>
        <div class="profile-stat">
          <span class="profile-stat-number">{profileData.playlists.total}</span>
          <span class="profile-stat-name">Playlists</span>
        </div>
      </div>
      <Button onClick={logout} style="margin-top: 30px;">Logout</Button>
    </header>
    <section class="profile-content">
      <div class="profile-content-artists">
        <div class="profile-content-header">
          <h3>Top Artists Of All Time</h3>
          <Button to="/artists">Show more</Button>
        </div>
        {#each profileData.topArtists.items as artist (artist.id)}
          <ArtistCard
            src={artist.images[0].url}
            name={artist.name}
            link={artist.external_urls.spotify}
          />
        {/each}
      </div>
      <div class="profile-content-tracks">
        <div class="profile-content-header">
          <h3>Top Tracks Of All Time</h3>
          <Button to="/tracks">Show more</Button>
        </div>
        {#each profileData.topTracks.items as track (track.id)}
          <TrackCard
            src={track.album.images[0].url}
            name={track.name}
            link={track.external_urls.spotify}
            duration={formatDuration(track.duration_ms)}
            album={track.album.name}
            artist={track.artists[0].name}
          />
        {/each}
      </div>
    </section>
  {:else}
  <Loader />
  {/if}
</Main>

<style>
  .profile-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profile-img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  .profile-display-name {
    font-size: 50px;
    font-weight: bold;
    margin-top: 20px;
    color: white;
    transition: all 0.25s cubic-bezier(0.3, 0, 0.4, 1) 0s;
    text-decoration: none;
  }

  .profile-display-name:hover {
    color: rgb(29, 185, 84);
    cursor: pointer;
  }

  .profile-stat-number {
    color: rgb(29, 185, 84);
    font-size: 20px;
  }

  .profile-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }

  .profile-stats {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
  }

  .profile-stat-name {
    color: rgb(155, 155, 155);
    font-size: 12px;
    letter-spacing: 1px;
    margin-top: 5px;
    text-transform: uppercase;
  }

  .profile-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 70px;
    width: 100%;
    margin-top: 100px;
  }

  .profile-content-artists {
    display: flex;
    flex-direction: column;
    color: white;
    grid-column: 1;
  }
  .profile-content-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 900px) {
    .profile-content {
      grid-template-columns: 1fr;
    }
  }
</style>
