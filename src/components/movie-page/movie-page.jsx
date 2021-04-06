import React, {useEffect, useState} from 'react';
import {useHistory, Link, useParams} from 'react-router-dom';
import Tabs from "../tabs/tabs";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import {nanoid} from "nanoid";
import {connect} from 'react-redux';
import {
  changeMovieInListStatus,
  fetchMovieDetails,
  fetchMoviesList,
  fetchPromoMovie,
} from "../../store/api-actions/api-actions";
import Spinner from "../spinner/spinner";
import UserBlock from "../authorized-user-block/authorized-user-block";
import Footer from "../footer/footer";
import {MyListStatus, Routes} from "../../const/const";
import {getIsMovieDetailsLoaded, getMovieDetails} from "../../store/movie-page-reducer/selectors";
import {getMoviesList, getPromoMovie} from "../../store/movies-list-reducer/selectors";
import {getAuthStatus} from "../../store/user-reducer/selectors";

const MoviePage = (props) => {
  const {onMovieDetailsLoad,
    movieDetails,
    isMovieDetailsLoaded,
    moviesList,
    authorizationStatus,
    onMyListChange,
    promoMovie,
    onPromoLogoClick,
  } = props;

  const {id} = useParams();
  const history = useHistory();
  const moreLikeThisMovies = moviesList.filter((film) => film.id !== movieDetails.id && film.genre === movieDetails.genre);

  const [movieInList, setMovieInList] = useState(movieDetails.isFavorite);

  useEffect(() => {
    if (isMovieDetailsLoaded === false) {
      onMovieDetailsLoad(id);
    }
  }, [isMovieDetailsLoaded]);

  useEffect(() => {
    if (movieDetails.isFavorite === true) {
      setMovieInList(true);
    } else if (movieDetails.isFavorite === false) {
      setMovieInList(false);
    }
  }, [isMovieDetailsLoaded]);

  return (
    isMovieDetailsLoaded === false
      ? <Spinner/>
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

        <section className="movie-card movie-card--full" style={{backgroundColor: movieDetails.backgroundColor}}>
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={movieDetails.backgroundImage} alt={movieDetails.name}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <a
                  className="logo__link"
                  onClick={() => {
                    if (promoMovie.id === movieDetails.id) {
                      onPromoLogoClick();
                      history.push(Routes.HOME_PAGE);
                    } else {
                      history.push(Routes.HOME_PAGE);
                    }
                  }}
                >
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              {authorizationStatus === true
                ? <UserBlock/>
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
                    onClick={() => history.push(Routes.PLAYER + movieDetails.id)}
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>

                  <button
                    className="btn btn--list movie-card__button"
                    type="button"
                    onClick={() => {
                      if (authorizationStatus === true && movieDetails.isFavorite === true) {
                        setMovieInList(false);
                        onMovieDetailsLoad(id);
                        onMyListChange({id: movieDetails.id, status: MyListStatus.REMOVE});
                      } else if (authorizationStatus === true && movieDetails.isFavorite === false) {
                        setMovieInList(true);
                        onMovieDetailsLoad(id);
                        onMyListChange({id: movieDetails.id, status: MyListStatus.ADD});
                      } else {
                        history.push(Routes.LOGIN);
                      }
                    }}>
                    {movieInList === true
                      ? <svg viewBox="0 0 18 14" width="18" height="14">
                        <use xlinkHref="#in-list"></use>
                      </svg>
                      : <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>
                    }
                    <span>My list</span>
                  </button>

                  {authorizationStatus === true
                    ?
                    <Link to={Routes.MOVIE_PAGE + movieDetails.id + Routes.ADD_REVIEW} className="btn movie-card__button">Add
                      review</Link>
                    : ``
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={movieDetails.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
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
              {moreLikeThisMovies.slice(0, 4).map((film) =>
                <MovieCard
                  movie={film}
                  key={nanoid()}
                />,
              )}
            </div>
          </section>

          <Footer/>
        </div>
      </React.Fragment>
  );
};

MoviePage.propTypes = {
  isMovieDetailsLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
  onMyListChange: PropTypes.func.isRequired,
  onPromoLogoClick: PropTypes.func.isRequired,
  moviesList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
      })
  ),
  onMovieDetailsLoad: PropTypes.func.isRequired,
  movieDetails: PropTypes.shape({
    backgroundImage: PropTypes.string,
    name: PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
    id: PropTypes.number,
    isFavorite: PropTypes.bool,
    posterImage: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
  promoMovie: PropTypes.shape({
    id: PropTypes.number
  }),
};

const mapStateToProps = (state) => ({
  movieDetails: getMovieDetails(state),
  isMovieDetailsLoaded: getIsMovieDetailsLoaded(state),
  moviesList: getMoviesList(state),
  authorizationStatus: getAuthStatus(state),
  promoMovie: getPromoMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMovieDetailsLoad(movieId) {
    dispatch(fetchMovieDetails(movieId));
    dispatch(fetchMoviesList());
  },
  onMyListChange(movieData) {
    dispatch(changeMovieInListStatus(movieData));
  },
  onPromoLogoClick() {
    dispatch(fetchPromoMovie());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
