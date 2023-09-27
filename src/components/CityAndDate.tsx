import dateFormat from "dateformat";

export default function CityAndDate({
  city,
  date,
  isNight,
}: {
  city: string;
  date: string;
  isNight: boolean;
}) {
  return (
    <div
      className={
        isNight ? "city-and-date city-and-date-night" : "city-and-date"
      }
    >
      <h1>{city}</h1>
      <h4>{dateFormat(date, "ddd dd/mm/yy")}</h4>
    </div>
  );
}
