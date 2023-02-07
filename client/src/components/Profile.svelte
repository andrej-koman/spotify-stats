<script>
    import { onMount } from "svelte";
    import { logout, getCurrentUserProfile, getCurrentUserPlaylists } from "../spotify.js";
    import Loader from "./Loader.svelte";
    import Button from "./UI/Button.svelte";

    var user;
    var playlistCount;

    const fetchProfileData = async () => {
      try {
        const fetchedData = await getCurrentUserProfile();
        user = fetchedData.data;
      } catch (error) {
        console.error(error);
      }
    };

    const fetchPlaylistData = async () => {
      try {
        const fetchedData = await getCurrentUserPlaylists();
        playlistCount = fetchedData.data.total;
      }
      catch (error) {
        console.error(error);
      }
    }
    onMount(() => {
      fetchProfileData();
      fetchPlaylistData();
    });
</script>

{#if user}
<div class="profile-container">
  <img src={user.images[0].url} alt="profile" class="profile-img" />
  <a class="profile-display-name" href={user.external_urls.spotify} target="_blank" rel="noreferrer">{user.display_name}</a>
  <div class="profile-stats">
    <div class="profile-stat">
      <span class="profile-stat-number">{user.followers.total}</span>
      <span class="profile-stat-name">Followers</span>
    </div>
    <div class="profile-stat">
      <span class="profile-stat-number">{playlistCount}</span>
      <span class="profile-stat-name">Playlists</span>
    </div>
  </div>
  <Button onClick={logout}>Logout</Button>
</div>
{:else}
  <Loader />
{/if}

<style>
    .profile-container {
        padding-top: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
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
      margin-top: 20px;
    }

    .profile-stat-name {
      color: rgb(155, 155, 155);
      font-size: 12px;
      letter-spacing: 1px;
      margin-top: 5px;
      text-transform: uppercase;
    }


</style>