import React, { useState } from "react";
import PropTypes from "prop-types";

import tableStyles from "./table.module.css";

const Table = ({ caption, headers, body, style, shadow, limit = 2 }) => {
  const switchPage = (pageNumber) => {
    let end = Number(pageNumber) * limit;
    let start = end - limit;

    setCurrentRows(body.slice(start, end));
  };

  const [currentRows, setCurrentRows] = useState([...body.slice(0, limit)]);

  let pages = Array(Math.ceil(body.length / limit))
    .fill()
    .map((v, i) => <small onClick={() => switchPage(i)}>{++i}</small>);

  return (
    <div className={tableStyles.tableWrapper} style={{ ...style }}>
      <table cellSpacing="0">
        <caption>
          <h1>{caption}</h1>
        </caption>
        <thead>
          <tr>
            {headers?.map((headName, index) => {
              return <th key={index}>{headName}</th>;
            }) ?? <div>loading...</div>}
          </tr>
        </thead>
        <tbody>
          {currentRows?.map((data, index) => (
            <tr key={index}>
              {Object.keys(data).map((key, index) => (
                <td key={index}>{data[key]}</td>
              ))}
            </tr>
          )) ?? <div>loading...</div>}
        </tbody>
      </table>
      <div className={tableStyles.pages}>
        <center>{pages}</center>
      </div>
    </div>
  );
};

Table.propTypes = {
  /** Title of the table */
  caption: PropTypes.string,

  /**table headers */
  headers: PropTypes.arrayOf(PropTypes.string),

  /**all rows in the table */
  body: PropTypes.arrayOf(PropTypes.string),

  /**custom additional styling */
  style: PropTypes.objectOf(PropTypes.string),

  /**apply shadow around the table border */
  shadow: PropTypes.bool,

  /**the number of rows per page */
  limit: PropTypes.number,
};

export default Table;
