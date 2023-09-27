import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function CitySearch({
  isNight,
  handleClick,
}: {
  isNight: boolean;
  handleClick: (cityInput: string) => void;
}) {
  const [citySearch, setCitySerach] = useState<string>("");

  return (
    <div className={isNight ? "city-search city-search-night" : "city-search"}>
      <TextField
        size="small"
        label="Enter a city name"
        value={citySearch}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCitySerach(event.target.value);
        }}
      />
      <Button variant="contained" onClick={() => handleClick(citySearch)}>
        <BsSearch size="18" />
      </Button>
    </div>
  );
}
