import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
import { Table } from "reactstrap";
import ThemeContext from "./context/ThemeContext";
import { useFetch } from "./services/useFetch";
import ThemeColor from "./ThemeColor";

function Details({ detail }) {
  const { data: homeworld } = useFetch(detail[0].homeworld);

  const theme = useContext(ThemeContext);
  const currentTheme = ThemeColor[theme];

  return (
    <div
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <h1>People Details:</h1>
      <Table
        style={{
          backgroundColor: `${currentTheme.backgroundColor}`,
          color: `${currentTheme.textColor}`,
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>hair_color</th>
            <th>skin_color</th>
            <th>eye_color</th>
            <th>birth_year</th>
            <th>gender</th>
            <th>homeworld</th>
            <th>vehicles</th>
            <th>starships</th>
            <th>created</th>
            <th>edited</th>
          </tr>
        </thead>
        <tbody>
          {detail.map((ele, i) => (
            <tr key={i}>
              <td>{ele.name}</td>
              <td>{ele.height}</td>
              <td>{ele.mass}</td>
              <td>{ele.hair_color}</td>
              <td>{ele.skin_color}</td>
              <td>{ele.eye_color}</td>
              <td>{ele.birth_year}</td>
              <td>{ele.gender}</td>
              <td>{homeworld.name}</td>
              <td>{ele.vehicles}</td>
              <td>{ele.starships}</td>
              <td>{ele.created}</td>
              <td>{ele.edited}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Details;
