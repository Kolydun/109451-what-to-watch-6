import React, {useState, useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import SmallPlayer from "../small-player/small-player";

const MovieCard = (props) => {

  const {generatedFilm, trackActiveFilmId} = props;
  const [isPreviewPlaying, setIsPreviewPlaying] = useState({status: false});
  const cardRef = useRef();

  useEffect(() => {
    let timer;

    cardRef.current.onmouseenter = () => {
      timer = setTimeout(() => {
        setIsPreviewPlaying((prevIsPreviewPlaying) => ({
          ...prevIsPreviewPlaying,
          status: true,
        }));
      }, 1000);
    };

    cardRef.current.onmouseleave = () => {
      clearTimeout(timer);
      setIsPreviewPlaying((prevIsPreviewPlaying) => ({
        ...prevIsPreviewPlaying,
        status: false,
      }));
    };

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <article
        ref={cardRef}
        className="small-movie-card catalog__movies-card"
        onClick={trackActiveFilmId}
      >
        {isPreviewPlaying.status ? (
          <SmallPlayer videoLink={generatedFilm.videoLink} isMuted={true}/>
        ) : (
          <React.Fragment>
            <div className="small-movie-card__image">
              <img src={generatedFilm.previewImage} alt="Bohemian Rhapsody" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <Link className="small-movie-card__link" to={`/films/1`}>{generatedFilm.name}</Link>
            </h3>
          </React.Fragment>
        )}
      </article>
    </React.Fragment>
  );
};

MovieCard.propTypes = {
  generatedFilm: PropTypes.object.isRequired,
  trackActiveFilmId: PropTypes.func
};

export default MovieCard;
