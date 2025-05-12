import { useState } from 'react';
import './App.css';
import CityPage from './CityPage';
import ParticlesBackground from './Particles';


function App() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [cityName, setCityName] = useState<string>('');

  async function fetchToApi(request: string) {
    const url: string = `http://api.openweathermap.org/data/2.5/forecast?q=${request}&units=metric&lang=ru&appid=f4c00f312087165b908fcc539f5922d2`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    return await response.json();
  }

  async function onBut() {
    try {
      let response = await fetchToApi(cityName);
      
      setWeatherData(response);
      setCityName('');

    } catch (err) {
      console.log(err);
    }
  }

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
              onBut();
            }}
          }
        />
        <button onClick={onBut}>Найти</button>
      </div>
      
      {weatherData && (
        <CityPage 
          key={weatherData.city.name + weatherData.list[0].dt}
          response={weatherData} 
        />
      )}
    </div>
  );
}
export default App;
