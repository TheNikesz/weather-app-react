import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { BsSearch } from "react-icons/bs";

export default function CitySearch({ isNight }: { isNight: boolean }) {
  return (
    <div className={isNight ? "city-search city-search-night" : "city-search"}>
      <TextField size="small" label="Enter a city name" />
      <Button variant="contained">
        <BsSearch size="18" />
      </Button>
    </div>
  );
}
