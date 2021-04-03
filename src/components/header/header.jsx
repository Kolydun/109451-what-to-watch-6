import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {changeMovieInListStatus} from "../../store/api-actions/api-actions";
import {Routes, MyListStatus} from "../../const/const";
import {resetFilters} from "../../store/movie-actions/movie-actions";
import {getPromoMovie} from "../../store/movies-list-reducer/selectors";
import {getAuthStatus} from "../../store/user-reducer/selectors";
import AuthorizedUserBlock from "../authorized-header/authorized-user-block";
import UnauthorizedUserBlock from "../unathorized-header/unathorized-user-block";
import {changePromoLoadFlag} from "../../store/flag-actions/flag-actions";

const Header = (props) => {

  const {onPageChange, promoMovie, onMyListChange, authorizationStatus} = props;

  const history = useHistory();

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoMovie.backgroundImage} alt="The Grand Budapest Hotel"/>
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

          {authorizationStatus === true
            ? <AuthorizedUserBlock/>
            : <UnauthorizedUserBlock/>
          }

        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoMovie.posterImage} alt={promoMovie.name + `poster`} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoMovie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoMovie.genre}</span>
                <span className="movie-card__year">{promoMovie.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={() => {
                    onPageChange();
                    history.push(Routes.PLAYER + promoMovie.id);
                  }}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                  onClick={() => {
                    if (authorizationStatus === true && promoMovie.isFavorite === true) {
                      onMyListChange({id: promoMovie.id, status: MyListStatus.REMOVE});
                    } else if (authorizationStatus === true && promoMovie.isFavorite === false) {
                      onMyListChange({id: promoMovie.id, status: MyListStatus.ADD});
                    } else {
                      history.push(Routes.LOGIN);
                    }
                  }}>
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
    </React.Fragment>
  );
};

Header.propTypes = {
  promoMovie: PropTypes.shape({
    backgroundImage: PropTypes.string,
    posterImage: PropTypes.string,
    name: PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
    id: PropTypes.number,
    isFavorite: PropTypes.bool,
  }),
  onPageChange: PropTypes.func.isRequired,
  onMyListChange: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
  authorizationStatus: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPageChange() {
    dispatch(resetFilters());
  },
  onMyListChange(movieData) {
    dispatch(changeMovieInListStatus(movieData));
    dispatch(changePromoLoadFlag(false));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
