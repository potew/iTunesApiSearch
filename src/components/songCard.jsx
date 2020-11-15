import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import './cardstyles.css';

class SongCard extends React.Component {
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
      previewUrl,
      releaseDate,
      trackName,
      trackNumber,
      trackCount,
      trackViewUrl,
      primaryGenreName,
     } = this.props.item;

     const { playing, played } = this.state;

     return (
      <div className="track-card">
        <img className="track-album-cover"
          alt="Capa do álbum"
          src={(artworkUrl100.replace('100x100','600x600'))}
          // src={artworkUrl100}
          width="250px"
        />
        <div className="track-info">
          <h3><span role="img" aria-label="artist">🎤</span> {artistName}</h3>
          <h3><span role="img" aria-label="name">🎵</span> {trackName}</h3>
          <h4>
            <span onClick={this.handlePlayState} role="img">{ playing ?  '⏹' : '▶' }</span>
            <a
              href={trackViewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span role="img" aria-label="site">🌐</span>
            </a>
          </h4>
          <h3><span role="img" aria-label="album">💿 {collectionName}</span></h3>
          <h4>Faixa {trackNumber}/{trackCount} - Ano: {releaseDate.slice(0,4)}</h4>
          <h4>Gênero: {primaryGenreName}</h4>
          <progress max={1} value={played} />
          <ReactPlayer
            url={previewUrl}
            width="0"
            height="0"
            playing={playing}
            onProgress={this.handleProgress}
          />
        </div>
      </div>
    );
  }
}

SongCard.propTypes = {
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

export default SongCard;
