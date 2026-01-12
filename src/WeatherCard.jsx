
import WeatherComponent from "./WeatherComponent"
import cloudyImg from "../assets/cloudy.png"
import clearImg from "../assets/clear.png"

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
                     <figure className="weathertype">
                      {weatherStatus?.toLowerCase() === "clouds" && <img src={cloudyImg} alt="cloudy" />}  
                      {weatherStatus?.toLowerCase() === "clear" && <img src={clearImg} alt="clear"/> }
                        <figcaption>{weatherStatus}</figcaption>
                     </figure>
                    
                        
                        
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