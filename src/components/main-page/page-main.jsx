import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import MoviesList from "../movies-list/movies-list";
import Filters from "../filters/filters";
import ShowMore from "../show-more/show-more";
import {nanoid} from "nanoid";
import {connect} from 'react-redux';
import {ActionCreator} from "../../store/action";

const MainPage = (props) => {

  const {moviesList, promoName, promoGenre, promoRelease, initialMoviesList, renderedMovies, onPageChange} = props;
  const history = useHistory();
  const uniqueFiltersNames = [`All films`, ...new Set(initialMoviesList.map((movie) => movie.genre))];

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoName}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoGenre}</span>
                <span className="movie-card__year">{promoRelease}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={() => {
                    onPageChange();
                    history.push(`/player/:1`);
                  }}
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
                    onPageChange();
                    history.push(`/mylist`);
                  }}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {uniqueFiltersNames.map((name) =>
              <Filters
                key={nanoid()}
                filterName={name}
              />
            )}
          </ul>

          <div className="catalog__movies-list">
            <MoviesList moviesList={moviesList} />
          </div>

          {moviesList.length > renderedMovies
            ? <ShowMore/>
            : ``}

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
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
  moviesList: state.moviesList,
  initialMoviesList: state.initialMoviesList,
  renderedMovies: state.renderedMovies
});

const mapDispatchToProps = (dispatch) => ({
  onPageChange() {
    dispatch(ActionCreator.resetState());
  },
});

MainPage.propTypes = {
  promoName: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoRelease: PropTypes.string.isRequired,
  moviesList: PropTypes.array.isRequired,
  initialMoviesList: PropTypes.array.isRequired,
  renderedMovies: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
