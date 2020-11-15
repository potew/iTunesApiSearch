import React from 'react';
import PropTypes from 'prop-types';
import './cardstyles.css';

class AlbumCard extends React.Component {
  state = {
    playing: false,
    played: 0,
    loaded: 0,
  };

  handlePlayState = () => {
    this.setState({ playing: !this.state.playing })
  };

  handleProgress = state => this.setState(state)

  render() {
    const {
      artistName,
      artworkUrl100,
      collectionName,
      copyright,
      country,
      releaseDate,
      trackCount,
      collectionViewUrl,
      primaryGenreName,
     } = this.props.item;

     return (
      <div className="album-card">
        <img className="track-album-cover"
          alt="Capa do álbum"
          src={(artworkUrl100.replace('100x100','800x800'))}
          width="350px"
        />
        <div className="track-info">
          <h2>{collectionName}</h2>
          <h3><span role="img" aria-label="artist">🎤</span> {artistName}</h3>
          <h4>            
            <a
              href={collectionViewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span role="img" aria-label="site">🌐</span>
            </a>
          </h4>
          <h4>Faixas: {trackCount} - Ano: {releaseDate.slice(0,4)}</h4>
          <h4>Gênero: {primaryGenreName} - País: {country}</h4>
          <h4>{copyright}</h4>
        </div>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  item: PropTypes.shape({
    collectionName: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    trackNumber: PropTypes.number.isRequired,
    trackCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default AlbumCard;
