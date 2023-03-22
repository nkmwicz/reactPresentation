import * as React from "react";
import "../styling.scss";
import "./Spinner.scss";

function Spinner() {
  return (
    <div className="spinner-container">
      <div className="loader" role="status"></div>
    </div>
  );
}

export default Spinner;
