import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Table } from "reactstrap";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import Details from "./Details";
import { useFetch } from "./services/useFetch";
import ThemeColor from "./ThemeColor";

const URL = "https://swapi.dev/api/";

function App() {
  const urlSchema = (urlOpt) => URL + `${urlOpt}/`;

  /* Data fetched from API */
  const { data } = useFetch(urlSchema("people"));
  const { results: people = [] } = data;

  const { data: planetsData } = useFetch(urlSchema("planets"));
  const { results: planets = [] } = planetsData;

  const { data: filmsData } = useFetch(urlSchema("films"));
  const { results: films = [] } = filmsData;

  const [selectedPeople, setSelectedPeople] = useState([]);
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const [selectedFilms, setSelectedFilms] = useState([]);

  /* Dark Theme */
  const [theme, setTheme] = useState("light");
  const currentTheme = ThemeColor[theme];

  const [clickRow, setClickRow] = useState(false);

  const handleChange = (e) => {
    const filterData = people.filter(
      (data, ind) => data.name === e.target.value
    );
    setSelectedPeople(filterData);
  };

  const handleChangePlanet = (e) => {
    const filterDataPlanet = planets.filter(
      (data, ind) => data.name === e.target.value
    );
    setSelectedPlanets(filterDataPlanet);
  };

  const handleChangeFilms = (e) => {
    const filterDataFilm = films.filter(
      (data, ind) => data.title === e.target.value
    );
    setSelectedFilms(filterDataFilm);
  };

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleCLickRow = () => {
    setClickRow(!clickRow);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="App"
        style={{
          backgroundColor: `${currentTheme.backgroundColor}`,
          color: `${currentTheme.textColor}`,
        }}
      >
        <button onClick={changeTheme} style={{ float: "center" }}>
          {theme === "light" ? "Dark" : "Light"}
        </button>

        <Table style={{ color: `${currentTheme.textColor}` }}>
          <thead>
            <tr>
              <th>Peoples</th>
              <th>Planets</th>
              <th>Films</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div>
                  <select onChange={handleChange}>
                    {people.map((p, i) => (
                      <option key={i} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
              </td>
              <td>
                <div>
                  <select onChange={handleChangePlanet}>
                    {planets.map((p, i) => (
                      <option key={i} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
              </td>
              <td>
                <div>
                  <select onChange={handleChangeFilms}>
                    {films.map((p, i) => (
                      <option key={i} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>

        <Table style={{ color: `${currentTheme.textColor}` }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Created</th>
              <th>Edited</th>
            </tr>
          </thead>

          <tbody>
            <tr onClick={handleCLickRow}>
              {selectedPeople.length === 0 ? (
                <td>{people[0]?.name}</td>
              ) : (
                <td>{selectedPeople[0].name}</td>
              )}
              {selectedPeople.length === 0 ? (
                <td>{people[0]?.created}</td>
              ) : (
                <td>{selectedPeople[0].created}</td>
              )}
              {selectedPeople.length === 0 ? (
                <td>{people[0]?.edited}</td>
              ) : (
                <td>{selectedPeople[0].edited}</td>
              )}
            </tr>

            <tr>
              {selectedPlanets.length === 0 ? (
                <td>{planets[0]?.name}</td>
              ) : (
                <td>{selectedPlanets[0].name}</td>
              )}
              {selectedPlanets.length === 0 ? (
                <td>{planets[0]?.created}</td>
              ) : (
                <td>{selectedPlanets[0].created}</td>
              )}
              {selectedPlanets.length === 0 ? (
                <td>{planets[0]?.edited}</td>
              ) : (
                <td>{selectedPlanets[0].edited}</td>
              )}
            </tr>

            <tr>
              {selectedFilms.length === 0 ? (
                <td>{films[0]?.title}</td>
              ) : (
                <td>{selectedFilms[0].title}</td>
              )}
              {selectedFilms.length === 0 ? (
                <td>{films[0]?.created}</td>
              ) : (
                <td>{selectedFilms[0].created}</td>
              )}
              {selectedFilms.length === 0 ? (
                <td>{films[0]?.edited}</td>
              ) : (
                <td>{selectedFilms[0].edited}</td>
              )}
            </tr>
          </tbody>
        </Table>

        {clickRow && (
          <Details detail={selectedPeople === 0 ? people[0] : selectedPeople} />
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
