import React, {useEffect} from 'react';
import {useHistory, Link, useParams} from 'react-router-dom';
import Tabs from "../tabs/tabs";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import {nanoid} from "nanoid";
import {connect} from 'react-redux';
import {fetchMovieDetails} from "../../api-actions/api-actions";
import Spinner from "../loading-spinner/loading-spinner";

const MoviePage = (props) => {
  const {onMovieDetailsLoad, movieDetails, isMovieDetailsLoaded, moviesList, authorizationStatus} = props;
  const {id} = useParams();

  const history = useHistory();

  if (isMovieDetailsLoaded === false) {
    useEffect(() => onMovieDetailsLoad(id), []);
  }

  return (
    isMovieDetailsLoaded === false
      ? <Spinner />
      : <React.Fragment>
        <div className="visually-hidden">
          {/* inject:svg*/}
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <symbol id="add" viewBox="0 0 19 20">
              {/* Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch*/}
              <title>+</title>
              <desc>Created with Sketch.</desc>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon id="+" fill="#EEE5B5"
                  points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"/>
              </g>
            </symbol>
            <symbol id="full-screen" viewBox="0 0 27 27">
              <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z"
                fill="#FFF9D9" fillOpacity="0.7"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z"
                fill="#FFF9D9" fillOpacity="0.7"/>
              <path fillRule="evenodd" clipRule="evenodd"
                d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9"
                fillOpacity="0.7"/>
              <path fillRule="evenodd" clipRule="evenodd"
                d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9"
                fillOpacity="0.7"/>
            </symbol>
            <symbol id="in-list" viewBox="0 0 18 14">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z"
                fill="#EEE5B5"/>
            </symbol>
            <symbol id="pause" viewBox="0 0 14 21">
              <symbol id="play-s" viewBox="0 0 19 19">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
              </symbol>
              {/* Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch*/}
              <title>Artboard</title>
              <desc>Created with Sketch.</desc>
              <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon id="Line" fill="#EEE5B5" fillRule="nonzero"
                  points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"/>
                <polygon id="Line" fill="#EEE5B5" fillRule="nonzero"
                  points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"/>
              </g>
            </symbol>
          </svg>
          {/* endinject*/}
        </div>

        <section className="movie-card movie-card--full" style={{backgroundColor: movieDetails.background_color}}>
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={movieDetails.background_image} alt="The Grand Budapest Hotel"/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <Link to="/" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              {authorizationStatus === true
                ? <div className="user-block">
                  <div className="user-block__avatar">
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                  </div>
                </div>
                : ``
              }
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{movieDetails.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{movieDetails.genre}</span>
                  <span className="movie-card__year">{movieDetails.released}</span>
                </p>

                <div className="movie-card__buttons">
                  <button
                    className="btn btn--play movie-card__button"
                    type="button"
                    onClick={() => history.push(`/player/:` + movieDetails.id)}
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button
                    className="btn btn--list movie-card__button"
                    type="button"
                    onClick={() => history.push(`/mylist`)}
                  >
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  {authorizationStatus === true
                    ? <Link to={`/films/` + movieDetails.id + `/review`} className="btn movie-card__button">Add review</Link>
                    : ``
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={movieDetails.poster_image} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
              </div>

              <div className="movie-card__desc">
                <Tabs movie={movieDetails}/>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__movies-list">
              {moviesList.map((film) =>
                film.id !== movieDetails.id &&
                film.genre === movieDetails.genre &&
                <MovieCard
                  movie={film}
                  key={nanoid()}
                />,
              )}
            </div>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <Link to="/" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  movieDetails: state.movieDetails,
  isMovieDetailsLoaded: state.isMovieDetailsLoaded,
  moviesList: state.moviesList,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onMovieDetailsLoad(movieId) {
    dispatch(fetchMovieDetails(movieId));
  },
});

MoviePage.propTypes = {
  moviesList: PropTypes.array.isRequired,
  onMovieDetailsLoad: PropTypes.func.isRequired,
  movieDetails: PropTypes.object.isRequired,
  isMovieDetailsLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);

