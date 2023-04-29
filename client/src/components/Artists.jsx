import React, { useState, useEffect } from "react";
import Top from "./Top";
import ArtistCard from "./UI/ArtistCard";
import Loader from "./Loader";
import { getAllTopArtists } from "../spotify";

const TopArtists = () => {
  const [currentlyActive, setCurrentlyActive] = useState("All time");
  const [allArtists, setAllArtists] = useState(null);
  const [currentArtists, setCurrentArtists] = useState(null);

  const toggleSwitch = (item) => {
    if (currentlyActive !== item) {
      setCurrentlyActive(item);
    }
  };

  const toggleItem = (item) => {
    if (item === "All time") {
      setCurrentArtists(allArtists.longTerm);
    }
    if (item === "6 months") {
      setCurrentArtists(allArtists.mediumTerm);
    }
    if (item === "4 weeks") {
      setCurrentArtists(allArtists.shortTermProfile);
    }
  };

  useEffect(() => {
    const fetchArtists = async () => {
        try {
            const data = await getAllTopArtists();
            setAllArtists(data);
            setCurrentArtists(data.longTerm);
        } catch (error) {
            console.log(error);
        }
    };
    fetchArtists();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Top
      toggleItem={toggleItem}
      toggleSwitch={toggleSwitch}
      title="Top Artists"
      currentlyActive={currentlyActive}
    >
      {currentArtists ? (
        currentArtists.map((artist) => (
          <ArtistCard
            key={artist.id}
            src={artist.images[0].url}
            name={artist.name}
            link={artist.external_urls.spotify}
          />
        ))
      ) : (
        <Loader />
      )}
    </Top>
  );
};

export default TopArtists;