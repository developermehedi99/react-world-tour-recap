import { useState } from "react";

const Country = ({ country, handleVisitedCountry, handleFlags }) => {
  const { name, flags, population } = country;

  const [isVisited, setIsVisited] = useState(false);
  const handleVisited = () => {
    setIsVisited(!isVisited);
  };

  return (
    <div className="country">
      <img src={flags?.png} alt="" />
      <h2 className="text-3xl">{name.common}</h2>
      <h3>{population}</h3>
      <button
        onClick={() => handleVisitedCountry(country)}
        className="border mb-2 border-black px-1 rounded-lg"
      >
        markVisited
      </button>{" "}
      <br />
      <button
        onClick={() => handleFlags(country.flags.png)}
        className="border border-blue-400 mb-1 px-2 rounded-xl"
      >
        add flag
      </button>{" "}
      <br />
      <button
        onClick={handleVisited}
        className="border border-black px-1 rounded-lg"
      >
        {isVisited ? "visited" : "going"}
      </button>
      {isVisited && "is have visited this country"}
    </div>
  );
};

export default Country;
