import React from "react";
import "./TrackCard.css";

const TrackCard = ({ src, name, link, duration, artist, album }) => {
  function handleClick() {
    window.open(link, "_blank");
  }

  return (
    <div className="track-card" onKeyDown={handleClick} onClick={handleClick}>
      <img className="track-img" src={src} alt="artist" />
      <div className="track-info">
        <div className="track-left">
          <span className="track-name">{name}</span>
          <br />
          <span className="track-artist-album">
            {artist} · {album}
          </span>
        </div>
        <span className="track-duration">{duration}</span>
      </div>
    </div>
  );
}

export default TrackCard;