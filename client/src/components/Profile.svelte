<script>
    import { logout, getCurrentUserProfile } from "../spotify.js";
    import { Link } from "svelte-navigator";

    var user;

    const fetchData = async () => {
      try {
        const fetchedData = await getCurrentUserProfile();
        user = fetchedData.data;
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
</script>

{#if user}
<div class="profile-container">
    <h1>Profile</h1>
    <h2>{user.display_name}</h2>
    <img src={user.images[0].url} alt="profile" />
    <Link to="songs">Songs</Link>
</div>
{:else}
<div class="spinner">
  <div class="r1"></div>
  <div class="r2"></div>
  <div class="r3"></div>
  <div class="r4"></div>
  <div class="r5"></div>
</div>
{/if}

<style>
    .profile-container {
        display: grid;
        place-items: center;
        justify-self: center;
        height: 100vh;
    }
</style>