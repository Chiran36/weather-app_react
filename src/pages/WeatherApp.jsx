import React from "react";
import { useEffect, useState } from "react";

import styles from "./weatherApp.module.css";

import Header from "../components/Header.jsx";
import WeatherCard from "../components/WeatherCard.jsx";
import SearchBox from "../components/SearchBox.jsx";
import Loading from "../components/Loading.jsx";

const key = "5a99a15e5c9458e242900a94e4763b97";

export default function WeatherApp() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      if (!cityName) return;

      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`,
        );

        if (!res.ok) {
          throw new Error(
            `something went wrong with fetching data of city ${cityName}`,
          );
        }
        const data = await res.json();

        setWeatherData(() => ({
          city: data.name,
          temperature: (data.main.temp - 273.15).toFixed(1),
          weatherStatus: data.weather[0].main,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          windSpeed: data.wind.speed,
        }));
      } catch (error) {
        console.log("there is an error", error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [cityName]);

  console.log(weatherData);
  // eslint-disable-next-line no-unused-vars
  const { city, temperature, weatherStatus, humidity, pressure, windSpeed } =
    weatherData;

  const styleSearchBox = {
    border: "none",
    outline: "none",
    padding: "8px",
    fontSize: "16px",
    borderRadius: "30px",
    background: "rgba(255, 255, 255, 0.08)"
  };

  return (
    <section className="flex flex-col jusitfy-items-center items-center border-2 border-yellow-500 h-screen bg-linear-to-br from-slate-800 to-indigo-900 ">

      <header className="align-ce">
        <Header></Header>
      </header>
      <main className=" w-8/10 p-5 rounded-2xl bg-linear-to-b from-slate-900 to-indigo-950 " >
        <section
          className={`${styles["all-section"]} ${styles["section-searchbox"]}`}
          >
          <SearchBox
            setCityName={setCityName}
            style={styleSearchBox}
            ></SearchBox>
        </section>
        <section
          className={`${styles["all-section"]} ${styles["section-weathercard"]}`}
          >
          {isLoading && <Loading />}
          {cityName && (
            <WeatherCard
            cityName={cityName}
            temperature={temperature}
              weatherStatus={weatherStatus}
              humidity={humidity}
              pressure={pressure}
              windSpeed={windSpeed}
              ></WeatherCard>
            )}
        </section>
      </main>
    
            </section>
  );
}
