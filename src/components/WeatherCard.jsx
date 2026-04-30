import WeatherComponent from "./WeatherComponent";
import cloudyImg from "../assets/cloudy.png";
import clearImg from "../assets/clear.png";
import styles from "./WeatherCard.module.css";

export default function WeatherCard({
  cityName,
  temperature,
  weatherStatus,
  humidity,
  pressure,
  windSpeed,
}) {
  return (
    <>
      <div className="weathercard">
        <section>
          <article className="cityname  p-2 m-2 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl text-white font-bold text-2xl ">
            <span>Location: </span>
            <span>{cityName}</span>
          </article>
          <article className={`${styles['data-box']} temperature text-center`}>
            <p className="font-bold text-2xl text-white">Temperature</p>
            <p className="font-bold text-2xl text-white">{temperature} °C</p>
          </article>
          <figure className={` weathertype flex flex-col items-center bg-linear-to-r from-blue-500 to-purple-600 m-2 rounded-2xl p-2`}>
            {weatherStatus?.toLowerCase() === "clouds" && (
              <img src={cloudyImg} alt="cloudy" className="m-0 w-32" />
            )}
            {weatherStatus?.toLowerCase() === "clear" && (
              <img src={clearImg} alt="clear" />
            )}
            <figcaption className="text-2xl text-white font-bold">{weatherStatus}</figcaption>
          </figure>
        </section>

        <section className="component flex justify-around   gap-1">
          <WeatherComponent value={`${humidity} %`}>Humidity</WeatherComponent>
          <WeatherComponent value={`${windSpeed} Km/hr`}>Wind</WeatherComponent>
          <WeatherComponent value={`${pressure} hPa`}>
            Pressure
          </WeatherComponent>
        </section>
      </div>
    </>
  );
}
