import "./Recent.css";

import React, { useState, useEffect } from 'react';
import Main from './UI/Main';
import Loader from './Loader';
import TrackCard from './UI/TrackCard';
import { getRecentlyPlayed } from '../spotify';
import { formatDuration } from '../utils';
import { v4 as uuidv4 } from 'uuid';

function Recent() {
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getRecentlyPlayed();
        setRecentlyPlayed(response.data.items);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main>
      {recentlyPlayed.length ? (
        <div className="recently-played">
          <span>Recently played tracks</span>
          {recentlyPlayed.map((item) => (
            <TrackCard
              key={uuidv4()}
              src={item.track.album.images[0].url}
              name={item.track.name}
              link={item.track.external_urls.spotify}
              duration={formatDuration(item.track.duration_ms)}
              album={item.track.album.name}
              artist={item.track.artists[0].name}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </Main>
  );
}

export default Recent;