import React, {useState} from 'react';
import PropTypes from "prop-types";
import Overview from "../overview/overview";
import Details from "../details/details";
import Reviews from "../reviews/reviews";
import {TabsNames} from "../../const/const";

const Tabs = (props) => {

  const [whichTab, setWhichTab] = useState(`overview`);
  const {movie} = props;

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={whichTab === `overview`
            ? `movie-nav__item movie-nav__item--active`
            : `movie-nav__item`}
          >
            <a href="#"
              className="movie-nav__link"
              onClick={(event) => {
                event.preventDefault();
                setWhichTab(`overview`);
              }}>Overview</a>
          </li>
          <li className={whichTab === `details`
            ? `movie-nav__item movie-nav__item--active`
            : `movie-nav__item`}>
            <a href="#"
              className="movie-nav__link"
              onClick={(event) => {
                event.preventDefault();
                setWhichTab(`details`);
              }}>Details</a>
          </li>
          <li className={whichTab === `reviews`
            ? `movie-nav__item movie-nav__item--active`
            : `movie-nav__item`}>
            <a href="#"
              className="movie-nav__link"
              onClick={(event) => {
                event.preventDefault();
                setWhichTab(`reviews`);
              }}>Reviews</a>
          </li>
        </ul>
      </nav>
      {whichTab === TabsNames.OVERVIEW && <Overview movie={movie}/>}
      {whichTab === TabsNames.DETAILS && <Details movie={movie}/>}
      {whichTab === TabsNames.REVIEWS && <Reviews />}

    </React.Fragment>
  );
};

Tabs.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(
        PropTypes.string,
    ),
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  }),
};


export default Tabs;
