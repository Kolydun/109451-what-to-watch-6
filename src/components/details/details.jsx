import React from 'react';
import PropTypes from "prop-types";
import {nanoid} from "nanoid";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const Details = (props) => {

  const {movie} = props;
  const runTime = (runTimeInMinutes) => {
    const runTimeDuration = dayjs.duration(runTimeInMinutes, `minute`);
    return runTimeDuration.format(`H`) + `h ` + runTimeDuration.format(`mm`) + `m`;
  };

  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{movie.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {movie.starring.map((starringActor, i) => {
                if (movie.starring.length === i + 1) {
                  return (<React.Fragment key={nanoid()}>
                    {starringActor} <br/>
                  </React.Fragment>);
                } else {
                  return (<React.Fragment key={nanoid()}>
                    {starringActor + `,`} <br/>
                  </React.Fragment>);
                }
              })}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{runTime(movie.run_time)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{movie.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{movie.released}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

Details.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Details;
