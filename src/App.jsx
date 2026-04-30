import WeatherApp from "./pages/WeatherApp";
import "./App.css";
import Map from "./pages/Map";
function App() {
    return (
      // <WeatherApp/>
      // <Map/>
      <main className="flex h-full w-full justify-between">
        <section className="h-full w-1/2">
           <WeatherApp/>
        </section>
        <section className="h-screen w-1/2  border-2">
            <Map/>
        </section>

      </main>
      
    )
}

export default App;