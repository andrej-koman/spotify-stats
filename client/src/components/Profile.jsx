import { useEffect, useState } from "react";
import { logout, getProfileData } from "../spotify.js";
import ArtistCard from "./UI/ArtistCard.jsx";
import TrackCard from "./UI/TrackCard.jsx";
import Loader from "./Loader.jsx";
import Button from "./UI/Button.jsx";
import Main from "./UI/Main.jsx";
import { formatDuration } from "../utils.js";
import "./Profile.css";

function Profile() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    getProfileData().then((data) => {
      setProfileData(data);
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main>
      {profileData ? (
        <>
          <header className="profile-header">
            <img
              src={profileData.user.images[0].url}
              alt="profile"
              className="profile-img"
            />
            <a
              className="profile-display-name"
              href={profileData.user.external_urls.spotify}
              target="_blank"
              rel="noreferrer"Button
            >
              {profileData.user.display_name}
            </a>
            <div className="profile-stats">
              <div className="profile-stat">
                <span className="profile-stat-number">
                  {profileData.user.followers.total}
                </span>
                <span className="profile-stat-name">Followers</span>
              </div>
              <div className="profile-stat">
                <span className="profile-stat-number">
                  {profileData.playlists.total}
                </span>
                <span className="profile-stat-name">Playlists</span>
              </div>
            </div>
            <Button onClick={logout} style={{ marginTop: "30px" }}>
              Logout
            </Button>
          </header>
          <section className="profile-content">
            <div className="profile-content-artists">
              <div className="profile-content-header">
                <h3>Top Artists Of All Time</h3>
                <Button to="/artists">Show more</Button>
              </div>
              {profileData.topArtists.items.map((artist) => (
                <ArtistCard
                  key={artist.id}
                  src={artist.images[0].url}
                  name={artist.name}
                  link={artist.external_urls.spotify}
                />
              ))}
            </div>
            <div className="profile-content-tracks">
              <div className="profile-content-header">
                <h3>Top Tracks Of All Time</h3>
                <Button to="/tracks">Show more</Button>
              </div>
              {profileData.topTracks.items.map((track) => (
                <TrackCard
                  key={track.id}
                  src={track.album.images[0].url}
                  name={track.name}
                  link={track.external_urls.spotify}
                  duration={formatDuration(track.duration_ms)}
                  album={track.album.name}
                  artist={track.artists[0].name}
                />
              ))}
            </div>
          </section>
        </>
      ) : (
        <Loader />
      )}
    </Main>
  );
}

export default Profile;