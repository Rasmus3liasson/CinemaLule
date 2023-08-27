/* import { DateTime } from "luxon";

export default function sortByDayAndTime(arrayOfDates: string[]): DateTime[][] {
  const sortedDates: { [day: string]: DateTime[] } = arrayOfDates.reduce(
    (acc, date) => {
      const luxonDate = DateTime.fromISO(date);
      const day = luxonDate.toISODate() as string; // Use type assertion here
      const time = luxonDate;

      if (!acc[day]) {
        acc[day] = [];
      }
      acc[day].push(time);
      return acc;
    },
    {}
  );

  // Convert the object into an array of arrays
  const resultArray: DateTime[][] = Object.values(sortedDates);
  return resultArray;
}
 */
