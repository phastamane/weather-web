import { useState } from 'react';
import './App.css';
import CityPage from './components/CitiPages/CityPage';
import ParticlesBackground from './Particles';
import {dailyForecast, threeDaysForecast} from './utils/ButtonsFuncs';



function App() {
  const [weatherDataDaily, setWeatherDataDaily] = useState<any>(null);
  const [weatherDataThreeDays, setWeatherDataThreeDays] = useState<any>(null);
  const [cityName, setCityName] = useState<string>('');


  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <ParticlesBackground />

      <div className="select-town" style={{ position: 'relative', zIndex: 1 }}>
        <h1>Какой город интересует?</h1>
        <input 
          value={cityName}
          onChange={e => setCityName(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              dailyForecast(cityName, setWeatherDataDaily, setCityName);
            }
          }}
        />
        <button onClick={() => dailyForecast(cityName, setWeatherDataDaily, setCityName)}>Найти</button>
      </div>
      
      {weatherDataDaily && (
        <>
          <div className="chose-days">
            <button onClick={() => dailyForecast(cityName, setWeatherDataDaily, setCityName)}>На сегодня</button>
            <button onClick={() => threeDaysForecast(cityName, setWeatherDataThreeDays, setWeatherDataDaily, setCityName)}>На 3 дня</button>
            {/* <button onClick={() => sevenDays()}>На 7 дней</button> */}
          </div>

          <CityPage 
            key={weatherDataDaily.city.name + weatherDataDaily.list[0].dt}
            response={weatherDataDaily} 
          />
        </>
      )}
    </div>
  );
}

export default App;

