import { DateTime, Interval } from "luxon";

export function getAvailableIntervals(cityTimezones) {
  const availability = cityTimezones.map((tz) => {
    try {
      const start = DateTime.local().setZone(tz).set({ hour: 9, minute: 0 }).toUTC();
      const end = DateTime.local().setZone(tz).set({ hour: 20, minute: 0 }).toUTC();
      return Interval.fromDateTimes(start, end);
    } catch (error) {
      console.error("Invalid timezone:", tz, error);
      return null;
    }
  });

  if (availability.some((a) => !a)) {
    return null; // invalid timezone
  }

  let overlap = availability[0];
  for (let i = 1; i < availability.length; i++) {
    overlap = overlap.intersection(availability[i]);
    if (!overlap) break;
  }
  return overlap;
}
