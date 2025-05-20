import React from 'react';
import AlbumCard from './albumCard';
import SongCard from './songCard';

// import { mockedResults } from '../mock';

function ResultsGrid({items, type}) {
  switch (type) {
    case "musicTrack":
      return items.map((result) => <SongCard key={result.trackID} item={result} />)
    case "album":
      return items.map((result) => <AlbumCard key={result.trackID} item={result} />)
    default:
      return <div>Exibindo {items.length} resultados</div>;
  }
}

export default ResultsGrid;
