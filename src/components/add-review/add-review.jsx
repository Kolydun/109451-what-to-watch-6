import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchDataForReview, postReview} from "../../store/api-actions/api-actions";
import Spinner from "../spinner/spinner";
import {useHistory} from 'react-router-dom';
import UserBlock from "../header-user-block-authorized/authorized-user-block";
import {Routes} from "../../const/const";
import {
  changeReviewBlockFlag,
  changeReviewSendFlag,
  changeCommentsLoadFlag,
} from "../../store/flag-actions/flag-actions";
import {
  getDataForReviewPage,
  getIsDataForReviewPageLoaded, getIsReviewBlocked,
  getIsReviewSendCorrectly, getIsReviewSendError,
} from "../../store/add-review-page/selectors";

const AddReview = (props) => {

  const {
    dataForReviewPage,
    onReviewLoad,
    isDataForReviewPageLoaded,
    isReviewSendCorrectly,
    isReviewSendError,
    onSubmit,
    onReviewSend,
    isReviewBlocked,
  } = props;
  const errorMessageStyle = {
    color: `red`,
    margin: `10px auto 10px auto`,
    width: `350px`,
    height: `50px`,
  };
  const MIN_COMMENT_LENGTH = 50;
  const INITIAL_RATING = 1;

  const {id} = useParams();
  const history = useHistory();

  const [reviewValue, setUserReview] = useState(``);
  const [ratingValue, setRating] = useState(INITIAL_RATING);

  if (isDataForReviewPageLoaded === false) {
    onReviewLoad(id);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      comment: reviewValue,
      rating: ratingValue,
      movieId: id,
    });
  };

  useEffect(() => {
    if (isReviewSendCorrectly === true) {
      history.push(Routes.MOVIE_PAGE + id + `?`);
      setUserReview(``);
      setRating(INITIAL_RATING);
      onReviewSend(false);
    }
  }, [isReviewSendCorrectly]);

  return (
    isDataForReviewPageLoaded === false
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

        <section className="movie-card movie-card--full" style={{backgroundColor: dataForReviewPage.background_color}}>
          <div className="movie-card__header">
            <div className="movie-card__bg">
              <img src={dataForReviewPage.background_image} alt="The Grand Budapest Hotel"/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <div className="logo">
                <Link to={Routes.HOME_PAGE} className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link to={Routes.MOVIE_PAGE + id} className="breadcrumbs__link">{dataForReviewPage.name}</Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>

              {<UserBlock/>}
            </header>

            <div className="movie-card__poster movie-card__poster--small">
              <img src={dataForReviewPage.poster_image} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>
          </div>

          <div className="add-review">
            <form
              action="#"
              className="add-review__form"
              onSubmit={handleSubmit}
            >
              <div className="rating">
                <div
                  className="rating__stars"
                  onChange={(evt) => {
                    setRating(evt.target.value);
                  }}>
                  <input className="rating__input" id="star-1" type="radio" name="rating" value="1" defaultChecked/>
                  <label className="rating__label" htmlFor="star-1">Rating 1</label>

                  <input className="rating__input" id="star-2" type="radio" name="rating" value="2"/>
                  <label className="rating__label" htmlFor="star-2">Rating 2</label>

                  <input className="rating__input" id="star-3" type="radio" name="rating" value="3"/>
                  <label className="rating__label" htmlFor="star-3">Rating 3</label>

                  <input className="rating__input" id="star-4" type="radio" name="rating" value="4"/>
                  <label className="rating__label" htmlFor="star-4">Rating 4</label>

                  <input className="rating__input" id="star-5" type="radio" name="rating" value="5"/>
                  <label className="rating__label" htmlFor="star-5">Rating 5</label>

                  <input className="rating__input" id="star-6" type="radio" name="rating" value="6"/>
                  <label className="rating__label" htmlFor="star-6">Rating 6</label>

                  <input className="rating__input" id="star-7" type="radio" name="rating" value="7"/>
                  <label className="rating__label" htmlFor="star-7">Rating 7</label>

                  <input className="rating__input" id="star-8" type="radio" name="rating" value="8"/>
                  <label className="rating__label" htmlFor="star-8">Rating 8</label>

                  <input className="rating__input" id="star-9" type="radio" name="rating" value="9"/>
                  <label className="rating__label" htmlFor="star-9">Rating 9</label>

                  <input className="rating__input" id="star-10" type="radio" name="rating" value="10"/>
                  <label className="rating__label" htmlFor="star-10">Rating 10</label>
                </div>
              </div>

              <div className="add-review__text">
                <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
                  onChange={(evt) => {
                    setUserReview(evt.target.value);
                  }}></textarea>
                {reviewValue.length >= MIN_COMMENT_LENGTH || isReviewBlocked === true
                  ? <div className="add-review__submit">
                    <button className="add-review__btn" type="submit">Post</button>
                  </div>
                  : <div className="add-review__submit">
                    <button className="add-review__btn" type="submit" disabled>Post</button>
                  </div>
                }

              </div>
            </form>
            {isReviewSendError === true
              ?
              <p className="add-review__error-text" style={errorMessageStyle}>An error has occurred, please try again</p>
              : ``
            }
          </div>

        </section>
      </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  dataForReviewPage: getDataForReviewPage(state),
  isDataForReviewPageLoaded: getIsDataForReviewPageLoaded(state),
  isReviewSendCorrectly: getIsReviewSendCorrectly(state),
  isReviewBlocked: getIsReviewBlocked(state),
  isReviewSendError: getIsReviewSendError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onReviewLoad(movieId) {
    dispatch(fetchDataForReview(movieId));
  },
  onSubmit(authData) {
    dispatch(postReview(authData));
    dispatch(changeReviewBlockFlag(true));
  },
  onReviewSend() {
    dispatch(changeReviewSendFlag(false));
    dispatch(changeCommentsLoadFlag(false));
  },
});

AddReview.propTypes = {
  dataForReviewPage: PropTypes.object.isRequired,
  onReviewLoad: PropTypes.func.isRequired,
  isDataForReviewPageLoaded: PropTypes.bool.isRequired,
  isReviewSendCorrectly: PropTypes.bool.isRequired,
  isReviewBlocked: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isReviewSendError: PropTypes.bool.isRequired,
  onReviewSend: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);

