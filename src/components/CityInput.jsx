import { useState } from "react";

export default function CityInput({ onAddCity }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onAddCity(city.trim());
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 my-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city or country"
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}
