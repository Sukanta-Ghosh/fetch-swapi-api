import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import ThemeColor from "./ThemeColor";
import axios from "axios";
const URL = "https://swapi.dev/api/";

function Details({ detail, theme }) {
  const [homeworld, setHomeworld] = useState();

  const fetchData = async (url) => {
    return axios.get(url).then((response) => {
      return response.data;
    });
  };

  useEffect(() => {
    detail.map((ele, i) =>
      fetchData(ele.homeworld).then((data) => setHomeworld(data.name))
    );
  }, [detail]);

  return (
    <div
      style={{
        backgroundColor: `${ThemeColor[theme].backgroundColor}`,
        color: `${ThemeColor[theme].textColor}`,
      }}
    >
      <h1>People Details:</h1>
      <Table
        style={{
          backgroundColor: `${ThemeColor[theme].backgroundColor}`,
          color: `${ThemeColor[theme].textColor}`,
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
              <td>{homeworld}</td>
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
