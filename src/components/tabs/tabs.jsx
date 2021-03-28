import React, {useState} from 'react';
import PropTypes from "prop-types";
import Overview from "../overview/overview";
import Details from "../details/details";
import Reviews from "../reviews/reviews";


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
      {whichTab === `overview` && <Overview movie={movie}/>}
      {whichTab === `details` && <Details movie={movie}/>}
      {whichTab === `reviews` && <Reviews />}

    </React.Fragment>
  );
};

Tabs.propTypes = {
  movie: PropTypes.object.isRequired,
};


export default Tabs;
