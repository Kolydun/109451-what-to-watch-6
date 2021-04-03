import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import UserBlock from "../header-user-block-authorized/authorized-user-block";
import {changeMovieInListStatus} from "../../store/api-actions/api-actions";
import {Routes, MyListStatus} from "../../const/const";
import {resetFilters} from "../../store/movie-actions/movie-actions";
import {getPromoMovie} from "../../store/movies-list/selectors";

const AuthorizedHeader = (props) => {

  const {onPageChange, promoMovie, onMyListChange} = props;

  const history = useHistory();

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoMovie.background_image} alt="The Grand Budapest Hotel"/>
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

          {<UserBlock/>}

        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoMovie.poster_image} alt={promoMovie.name + `poster`} width="218" height="327"/>
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
                    onPageChange();
                    if (promoMovie.is_favorite === true) {
                      onMyListChange({id: promoMovie.id, status: MyListStatus.REMOVE});
                    } else if (promoMovie.is_favorite === false) {
                      onMyListChange({id: promoMovie.id, status: MyListStatus.ADD});
                    }
                  }
                  }
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
    </React.Fragment>
  );
};

AuthorizedHeader.propTypes = {
  promoMovie: PropTypes.object.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onMyListChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPageChange() {
    dispatch(resetFilters());
  },
  onMyListChange(movieData) {
    dispatch(changeMovieInListStatus(movieData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedHeader);