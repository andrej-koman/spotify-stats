import React, { useEffect, useState } from "react";
import Top from "./Top";
import TrackCard from "./UI/TrackCard";
import Loader from "./Loader";
import { getAllTopTracks } from "../spotify.js";
import { formatDuration } from "../utils.js";

function Tracks() {
  const [currentlyActive, setCurrentlyActive] = useState("All time");
  const [allTracks, setAllTracks] = useState(null);
  const [currentTracks, setCurrentTracks] = useState(null);

  const toggleSwitch = (e) => {
    if (currentlyActive !== e.detail) {
      setCurrentlyActive(e.detail);
    }
  };

  const toggleItem = (e) => {
    if (e.detail === "All time") {
      setCurrentTracks(allTracks.longTerm);
    } else if (e.detail === "6 months") {
      setCurrentTracks(allTracks.mediumTerm);
    } else if (e.detail === "4 weeks") {
      setCurrentTracks(allTracks.shortTerm);
    }
  };

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const data = await getAllTopTracks();
        setAllTracks(data);
        setCurrentTracks(data.longTerm);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTracks();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Top toggleItem={toggleItem} toggleSwitch={toggleSwitch} title="Top Tracks" currentlyActive={currentlyActive}>
      {currentTracks ? (
        currentTracks.map((track) => (
          <TrackCard
            key={track.id}
            src={track.album.images[0].url}
            name={track.name}
            link={track.external_urls.spotify}
            duration={formatDuration(track.duration_ms)}
            album={track.album.name}
            artist={track.artists[0].name}
          />
        ))
      ) : (
        <Loader />
      )}
    </Top>
  );
}

export default Tracks;