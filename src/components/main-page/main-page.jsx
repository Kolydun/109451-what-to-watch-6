import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from "../movies-list/movies-list";
import Filters from "../filters/filters";
import ShowMore from "../show-more/show-more";
import Spinner from "../spinner/spinner";
import Footer from "../footer/footer";
import Header from "../header/header";
import {nanoid} from "nanoid";
import {connect} from 'react-redux';
import {fetchMoviesList, fetchPromoMovie} from "../../store/api-actions/api-actions";
import {
  getInitialMoviesList,
  getIsDataLoaded, getIsPromoLoaded,
  getMoviesList,
  getRenderedMovies,
} from "../../store/movies-list-reducer/selectors";
import {getAuthStatus} from "../../store/user-reducer/selectors";

const MainPage = (props) => {

  const {moviesList,
    initialMoviesList,
    renderedMovies,
    isDataLoaded,
    onLoadData,
    isPromoLoaded,
    onPromoLoad,
  } = props;
  const uniqueFiltersNames = [`All films`, ...new Set(initialMoviesList.map((movie) => movie.genre))];

  if (isDataLoaded === false) {
    onLoadData();
  }

  if (isPromoLoaded === false) {
    onPromoLoad();
  }

  return (
    <React.Fragment>
      <Header/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {uniqueFiltersNames.map((name) =>
              <Filters
                key={nanoid()}
                filterName={name}
              />,
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

        {<Footer/>}
      </div>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.object),
  initialMoviesList: PropTypes.arrayOf(PropTypes.object),
  renderedMovies: PropTypes.number.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
  isPromoLoaded: PropTypes.bool.isRequired,
  onPromoLoad: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  moviesList: getMoviesList(state),
  initialMoviesList: getInitialMoviesList(state),
  renderedMovies: getRenderedMovies(state),
  isDataLoaded: getIsDataLoaded(state),
  authorizationStatus: getAuthStatus(state),
  isPromoLoaded: getIsPromoLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchMoviesList());
  },
  onPromoLoad() {
    dispatch(fetchPromoMovie());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
