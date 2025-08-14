import React from 'react'
import PropTypes from 'prop-types'

export const Student = (props) => {
  return (
    <div className="student">
      <table border="1" cellPadding="5">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{props.name || "No-Name"}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{props.age !== undefined ? props.age : "0"}</td>
          </tr>
          <tr>
            <th>Is Married</th>
            <td>{props.ismarried ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <th>Habbit</th>
            <td>{props.habbit}</td>
          </tr>
          <tr>
            <th>Fav Food</th>
            <td>{props.favfood}</td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  ismarried: PropTypes.bool,
  habbit: PropTypes.string,
  favfood: PropTypes.string
};

Student.defaultProps = {
  name: "No-Name",
  age: 0,
  ismarried: false,
  habbit: "No habbit",
  favfood: "No favfood"
};
