import { useEffect, useState } from "react";
import Country from "../country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [addFlags, setAddFlags] = useState([]);

  console.log(countries);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    const newVisited = [...visitedCountry, country];
    setVisitedCountry(newVisited);
  };

  const handleFlags = (flags) => {
    const newFlagsAdding = [...addFlags, flags];
    setAddFlags(newFlagsAdding);
  };

  return (
    <div>
      <h1 className="text-3xl ">
        All countries in the world {countries.length}
      </h1>
      <div className="mb-4">
        <h1 className="text-2xl ">
          my visited country:{visitedCountry.length}
        </h1>
        {visitedCountry.map((visit) => (
          <li key={visit.acc3}>{visit.name.common}</li>
        ))}
      </div>
      <div className="flags-container">
        {addFlags.map((flag, idx) => (
          <img key={flag} src={idx} alt="" />
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleFlags={handleFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
