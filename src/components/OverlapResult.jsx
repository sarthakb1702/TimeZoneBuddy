import { getAvailableIntervals } from "../utils/timeOverlap";

export default function OverlapResult({ cities }) {
  if (cities.length < 2) {
    return (
      <div className="text-gray-600 mt-4">
        Please add at least two cities to find an overlap.
      </div>
    );
  }

  const overlap = getAvailableIntervals(cities);

  if (!overlap) {
    return (
      <div className="text-red-600 mt-4">
        No common time slots found between 9AM–8PM in all cities.
      </div>
    );
  }

  return (
    <div className="mt-4 border p-4 rounded bg-gray-100">
      <h2 className="text-xl font-semibold mb-2">Suggested Meeting Times</h2>
      <ul>
        {cities.map((city) => {
          const cityStart = overlap.start.setZone(city);
          const cityEnd = overlap.end.setZone(city);

          return (
            <li key={city} className="mb-1">
              {city}:{" "}
              <strong>
                {cityStart.toFormat("hh:mm a")} - {cityEnd.toFormat("hh:mm a")}
              </strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
