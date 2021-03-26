import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from "../movies-list/movies-list";
import Filters from "../filters/filters";
import ShowMore from "../show-more/show-more";
import Spinner from "../loading-spinner/loading-spinner";
import AuthorizedHeader from "../header-authorized/header-authorized";
import UnAuthorizedHeader from "../header-unauthorized/header-unathorized";
import {nanoid} from "nanoid";
import {connect} from 'react-redux';
import {fetchMoviesList} from "../../api-actions/api-actions";

const MainPage = (props) => {

  const {moviesList, promoName, promoGenre, promoRelease, initialMoviesList, renderedMovies, isDataLoaded, onLoadData, authorizationStatus} = props;
  const uniqueFiltersNames = [`All films`, ...new Set(initialMoviesList.map((movie) => movie.genre))];

  if (isDataLoaded === false) {
    onLoadData();
  }

  return (
    <React.Fragment>
      {authorizationStatus === true
        ? <AuthorizedHeader
          promoRelease={promoRelease}
          promoName={promoName}
          promoGenre={promoGenre}
        />
        : <UnAuthorizedHeader />
      }
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
            {isDataLoaded === false
              ? <Spinner/>
              : <MoviesList moviesList={moviesList}/>
            }
          </div>

          {moviesList.length > renderedMovies && isDataLoaded === true
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
  renderedMovies: state.renderedMovies,
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchMoviesList());
  },
});

MainPage.propTypes = {
  promoName: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoRelease: PropTypes.string.isRequired,
  moviesList: PropTypes.array.isRequired,
  initialMoviesList: PropTypes.array.isRequired,
  renderedMovies: PropTypes.number.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
