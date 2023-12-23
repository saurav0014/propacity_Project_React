import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Categories from "./components/Categories";
import HomePage from "./components/HomePage";
import Films from "./components/Films";
import FilmDetails from "./components/FilmDetails";
import People from "./components/People";
import PeopleDetails from "./components/PeopleDetails";
import Planets from "./components/Planets";
import PlanetDetails from "./components/PlanetDetails";
import Species from "./components/Species";
import SpecieDetails from "./components/SpecieDetails";
import Starships from "./components/Starships";
import StarshipDetails from "./components/StarshipDetails";
import Vehicles from "./components/Vehicles";
import VehicleDetails from "./components/VehicleDetails";

const App = () => {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarShips] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const API = "https://swapi.dev/api/";

  useEffect(() => {
    getFilms(),
      getPeople(),
      getPlanets(),
      getSpecies(),
      getStarShips(),
      getVehicles();
  }, []);

  async function getFilms() {
    try {
      const response = await fetch(API + "films");
      const data = await response.json();
      setFilms(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  }

  async function getPeople() {
    try {
      const response = await fetch(API + "people");
      const data = await response.json();
      setPeople(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  }

  async function getPlanets() {
    try {
      const response = await fetch(API + "planets");
      const data = await response.json();
      setPlanets(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  }

  async function getSpecies() {
    try {
      const response = await fetch(API + "species");
      const data = await response.json();
      setSpecies(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  }

  async function getStarShips() {
    try {
      const response = await fetch(API + "starships");
      const data = await response.json();
      setStarShips(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  }

  async function getVehicles() {
    try {
      const response = await fetch(API + "vehicles");
      const data = await response.json();
      setVehicles(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="container">
          <Categories />
          <div className="content">
            <Routes>
              <Route path="/" index element={<HomePage />} />

              <Route path="/Films" element={<Films data={films} />} />
              <Route
                path="/filmDetails/:id"
                element={<FilmDetails data={films} />}
              />

              <Route path="/People" element={<People data={people} />} />
              <Route
                path="/peopleDetails/:id"
                element={<PeopleDetails data={people} />}
              />

              <Route path="/Planets" element={<Planets data={planets} />} />
              <Route
                path="/planetDetails/:id"
                element={<PlanetDetails data={planets} />}
              />

              <Route path="/Species" element={<Species data={species} />} />
              <Route
                path="/specieDetails/:id"
                element={<SpecieDetails data={species} />}
              />

              <Route
                path="/Starships"
                element={<Starships data={starships} />}
              />
              <Route
                path="/starshipDetails/:id"
                element={<StarshipDetails data={starships} />}
              />

              <Route path="/Vehicles" element={<Vehicles data={vehicles} />} />
              <Route
                path="/vehicleDetails/:id"
                element={<VehicleDetails data={vehicles} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
