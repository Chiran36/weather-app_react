
import WeatherComponent from "./WeatherComponent"

export default function WeatherCard({cityName,temperature,
          weatherStatus ,
          humidity ,
          pressure ,
          windSpeed}) {
    return (
        <>
            <div className="weathercard">
                <section>
                    <p className="cityname"><span>{cityName}</span></p>
                    <p className="temperature"><span>{temperature} °C</span></p>
                    <p className="weathertype"><span>{weatherStatus}</span></p>
                </section>

                <section className="component">
                    <WeatherComponent value={`${humidity} %`}>Humidity</WeatherComponent>
                    <WeatherComponent value={`${windSpeed} Km/hr`}>Wind</WeatherComponent>
                    <WeatherComponent value={`${pressure} hPa`}>Pressure</WeatherComponent>
                </section>
            </div>

        </>
    )
}