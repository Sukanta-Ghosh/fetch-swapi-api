import React from "react";
import { useFetch } from "./services/useFetch";
const URL = "https://swapi.dev/api/";

export const TestFile = () => {
  const urlSchema = (urlOpt) => URL + `${urlOpt}/`;

  const { data } = useFetch(urlSchema("people"));
  const { results: people = [] } = data;
  return (
    <div>
      {people.map((p, i) => (
        <div key={i}>{p.name}</div>
      ))}
    </div>
  );
};
