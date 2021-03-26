import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from "../../store/action";
import {useHistory} from 'react-router-dom';
import {logout} from "../../api-actions/api-actions";


const AuthorizedHeader = (props) => {

  const {promoGenre, promoRelease, promoName, onPageChange, onLogOut} = props;

  const history = useHistory();

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
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
                onClick={() => {
                  onPageChange();
                  history.push(`/mylist`);
                }}
              />
            </div>
          </div>
          <div className="user-block__exit">
            <a
              className="user-block__link"
              href=""
              onClick={(evt) => {
                evt.preventDefault();
                onLogOut();
              }}
            >Log Out</a>
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
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onPageChange() {
    dispatch(ActionCreator.resetFilters());
  },
  onLogOut() {
    dispatch(logout());
  }
});

AuthorizedHeader.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoName: PropTypes.string.isRequired,
  promoRelease: PropTypes.string.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AuthorizedHeader);
