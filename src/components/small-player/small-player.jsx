import React from 'react';
import PropTypes from "prop-types";

const SmallPlayer = (props) => {

  const {videoLink} = props;

  return (
    <React.Fragment>
      <video src={videoLink} className="player__video" poster="img/player-poster.jpg" autoPlay muted>
        <source src={videoLink} type="video/mp4"/>
      </video>
    </React.Fragment>
  );
};

SmallPlayer.propTypes = {
  videoLink: PropTypes.string.isRequired,
};

export default SmallPlayer;
