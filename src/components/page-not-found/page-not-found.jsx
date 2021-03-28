import React from 'react';
import {Link} from "react-router-dom";

const PageNotFound = () => {
  return (
    <React.Fragment>
      <h1>404 PageNotFound</h1>
      <Link to="/">Вернуться на главную страницу</Link>
    </React.Fragment>
  );
};

export default PageNotFound;
