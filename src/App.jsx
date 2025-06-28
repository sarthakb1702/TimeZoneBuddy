import { useState } from "react";
import CityInput from "./components/CityInput";
import OverlapResult from "./components/OverlapResult";

export default function App() {
  const [cities, setCities] = useState([]);

  const handleAddCity = (newCity) => {
    setCities((prev) => [...prev, newCity]);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">
        Meeting Time Finder
      </h1>

      <CityInput onAddCity={handleAddCity} />

      <ul className="list-disc pl-6">
        {cities.map((c, idx) => (
          <li key={idx}>{c}</li>
        ))}
      </ul>

      <OverlapResult cities={cities} />
    </div>
  );
}
