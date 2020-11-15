import React, { useState } from 'react';
import { fetchItems } from '../services/api';
import LoadingIcon from './loadinGliph';
import ResultsGrid from './resultsGrid';
import './Search.css';

function Search() {
  const [search, setSearch] = useState({
    name: '',
    category: 'musicTrack',
    limit: 33
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const makeRequest = async () => {
    setLoading(true);
    const { name, category, limit } = search;
    const { results } = await fetchItems(name, category, limit);
    setData(results);
    setLoading(false);
  };

  return (
    <div className="search-bar">
      <header></header>
      <div className="search-panel">
        <label htmlFor="searchbox">Termo</label>
        <input
          name="searchBox"
          type="text"
          placeholder="Ex.: Oasis"
          onChange={e => setSearch({ ...search, name: e.target.value })}
        />
        <label htmlFor="mediaType">Tipo de mídia</label>
        <select
          name="mediaType"
          onChange={e => setSearch({ ...search, category: e.target.value })}
        >
          <option value='musicTrack'>Faixa</option>
          <option value='musicArtist'>Artista</option>
          <option value='album'>Álbum</option>
          <option value='musicVideo'>Clipe</option>
          <option value='mix'>Remix</option>
        </select>
        <label htmlFor="resultCount">Máx. resultados</label>
        <input
          name="resultCount"
          type="number"
          min="9"
          max="200"
          value={search.limit}
          onChange={e => setSearch({ ...search, limit: e.target.value })}
        />
        <button onClick={makeRequest}>Procurar</button>
      </div>
      <div className="results">
        { loading ?
          <LoadingIcon /> :
          <ResultsGrid items={data} type={search.category} />
        }
      </div>
    </div>
  );
}

export default Search;
