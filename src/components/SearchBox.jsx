import { useState } from "react";

export default function SearchBox({ setCityName, style }) {
  const [value, setValue] = useState("");

  function handleEnter(event) {
    if (event.key == "Enter") {
      setCityName(value);
    }
  }

  return (
    <>
      <input
        type="text"
        id="searchbox"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleEnter}
        placeholder="Enter the city name"
        style={style}
        className="w-full font-bold text-white text-2xl"
      />
    </>
  );
}
