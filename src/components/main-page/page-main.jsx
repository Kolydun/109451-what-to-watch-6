import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import MoviesList from "../movies-list/movies-list";
import Filters from "../filters/filters";
import ShowMore from "../show-more/show-more";
import Spinner from "../loading-spinner/loading-spinner";
import Footer from "../footer/footer";
import AuthorizedHeader from "../header-authorized/header-authorized";
import UnAuthorizedHeader from "../header-unauthorized/header-unathorized";
import {nanoid} from "nanoid";
import {connect} from 'react-redux';
import {fetchMoviesList, fetchPromoMovie} from "../../store/api-actions/api-actions";
import {
  getInitialMoviesList,
  getIsDataLoaded, getIsPromoLoaded,
  getMoviesList,
  getRenderedMovies,
} from "../../store/movies-list/selectors";
import {getAuthStatus} from "../../store/user/selectors";

const MainPage = (props) => {

  const {moviesList,
    initialMoviesList,
    renderedMovies,
    isDataLoaded,
    onLoadData,
    authorizationStatus,
    isPromoLoaded,
    onPromoLoad,
  } = props;
  const uniqueFiltersNames = [`All films`, ...new Set(initialMoviesList.map((movie) => movie.genre))];

  if (isDataLoaded === false) {
    onLoadData();
  }

  useEffect(() => {
    if (authorizationStatus === true) {
      onPromoLoad();
    }
  }, []);


  return (
    <React.Fragment>
      {authorizationStatus === true && isPromoLoaded === true
        ? <AuthorizedHeader/>
        : <UnAuthorizedHeader/>
      }
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

MainPage.propTypes = {
  moviesList: PropTypes.array.isRequired,
  initialMoviesList: PropTypes.array.isRequired,
  renderedMovies: PropTypes.number.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
  isPromoLoaded: PropTypes.bool.isRequired,
  onPromoLoad: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
