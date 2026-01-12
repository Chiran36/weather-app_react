import { useEffect,useState } from "react";
import "./App.css";
import Header from "./Header.jsx"
import SearchBox from "./SearchBox.jsx";
import WeatherCard from "./WeatherCard.jsx";
import Loading from "./Loading.jsx";

const key = "5a99a15e5c9458e242900a94e4763b97"

function App() {
  const [cityName,setCityName] = useState("");
  const [weatherData,setWeatherData] = useState({});
  const [isLoading,setIsLoading] = useState(false);
  
  useEffect(()=>{
   
    async function getData(){
      if(!cityName) return
      
        try{
             setIsLoading(true);
           const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`);
          
            if (!res.ok) {
                    throw new Error(`something went wrong with fetching data of city ${cityName}`);
                }
           const data = await res.json();
            
      console.log(data);
           setWeatherData(()=>({
            city: data.name,
            temperature: (data.main.temp - 273.15).toFixed(1),
            weatherStatus: data.weather[0].main,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            windSpeed: data.wind.speed
           }));

          }
   catch(error){
    console.log("there is an error",error);
   }
   finally{
    setIsLoading(false)
   }
    }

   getData();

  },[cityName])

  console.log(weatherData);
  const {city,temperature,weatherStatus,humidity,pressure,windSpeed} = weatherData;

 


  return <>
    <header>
      <Header></Header>
    </header>
    <main>
      <section className="all-section section-searchbox" >
        <SearchBox setCityName={setCityName}></SearchBox>
      </section>
      <section className="all-section section-weathercard" >
          {isLoading && <Loading/>}
       {cityName && <WeatherCard
          cityName={cityName}
          temperature={temperature}
          weatherStatus = {weatherStatus}
          humidity = {humidity}
          pressure = {pressure}
          windSpeed = {windSpeed}
          ></WeatherCard>}
      </section>

    </main>

  </>
}

export default App;