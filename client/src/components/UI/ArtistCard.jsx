import './ArtistCard.css';
import React from "react";

const ArtistCard = ({ src, name, link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="artist-card"
      onKeyDown={handleClick}
      onClick={handleClick}
      tabIndex={0}
    >
      <img className="artist-img" src={src} alt="artist" />
      <span className="artist-name">{name}</span>
    </div>
  );
};

export default ArtistCard;