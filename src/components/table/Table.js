import React, { useState } from "react";
import PropTypes from "prop-types";

import tableStyles from "./table.module.css";

/**
 *
 * @param {*} param0
 * @returns
 */

/**
 * TODO : ADD ICON
 */

const Table = ({
  caption,
  headers,
  body,
  style,
  shadow,
  limit = body.length,
}) => {
  const switchPage = (pageNumber) => {
    let end = Number(pageNumber) * limit;
    let start = end - limit;

    setPage(pageNumber);
    setCurrentRows(body.slice(start, end));
  };

  const [currentRows, setCurrentRows] = useState([...body.slice(0, limit)]);
  const [page, setPage] = useState(1);

  let pages = Array(Math.ceil(body.length / limit))
    .fill()
    .map((v, i) => (
      <small
        onClick={() => switchPage(i)}
        style={{
          color: `${page === i + 1 ? "white" : "#333"}`,
          backgroundColor: `${page === i + 1 ? "#333" : "transparent"}`,
        }}
        key={i}
      >
        {++i}
      </small>
    ));

  return (
    <div
      className={tableStyles.tableWrapper}
      style={{
        ...style,
        boxShadow: `${shadow ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : ""}`,
      }}
    >
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
      {limit >= body.length ? null : (
        <div className={tableStyles.pages}>
          <center>{pages}</center>
        </div>
      )}
    </div>
  );
};

Table.propTypes = {
  /** Title of the table */
  caption: PropTypes.string,

  // hello
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,

  /**all rows in the table */
  body: PropTypes.arrayOf(PropTypes.string).isRequired,

  /**custom additional styling */
  style: PropTypes.objectOf(PropTypes.string),

  /**apply shadow around the table border */
  shadow: PropTypes.bool,

  /**the number of rows per page */
  limit: PropTypes.number,
};

export default Table;
