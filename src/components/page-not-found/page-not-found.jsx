import React from 'react';
import {Link} from "react-router-dom";
import {Routes} from "../../const/const";

const PageNotFound = () => {
  return (
    <React.Fragment>
      <h1>404 PageNotFound</h1>
      <Link to={Routes.HOME_PAGE}>Return to main page</Link>
    </React.Fragment>
  );
};

export default PageNotFound;
