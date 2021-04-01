import React, {useState, useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import SmallPlayer from "../small-player/small-player";
import {useHistory, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Routes} from "../../const/const";
import {resetLoadMovieDetailsFlag} from "../../store/flag-actions/flag-actions";


const MovieCard = (props) => {

  const {movie, onMovieCardClick} = props;
  const [isPreviewPlaying, setIsPreviewPlaying] = useState({status: false});
  const cardRef = useRef();
  const history = useHistory();


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
        onClick={() => {
          onMovieCardClick();
          history.push(Routes.MOVIE_PAGE + movie.id);
        }}
      >
        {isPreviewPlaying.status ? (
          <SmallPlayer videoLink={movie.preview_video_link} isMuted={true}/>
        ) : (
          <React.Fragment>
            <div className="small-movie-card__image">
              <img src={movie.preview_image} alt="Bohemian Rhapsody" width="280" height="175"/>
            </div>
            <h3
              className="small-movie-card__title"
              onClick={() => {
                onMovieCardClick();
                history.push(Routes.MOVIE_PAGE + movie.id);
              }}
            >
              <Link className="small-movie-card__link" to="">{movie.name}</Link>
            </h3>
          </React.Fragment>
        )}
      </article>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick() {
    dispatch(resetLoadMovieDetailsFlag());
  },
});

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};


export default connect(null, mapDispatchToProps)(MovieCard);

