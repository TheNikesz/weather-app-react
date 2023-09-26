export default function CityAndDate({ isNight }: { isNight: boolean }) {
  return (
    <div
      className={
        isNight ? "city-and-date city-and-date-night" : "city-and-date"
      }
    >
      <h1>Lublin</h1>
      <h4>Wed 22/03/23</h4>
    </div>
  );
}
