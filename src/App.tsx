import { useState } from 'react';

import CityPage from './components/legacy/CityPages/CityPage';

import {dailyForecast, fiveDaysForecast, threeDaysForecast} from './components/utils/ButtonsFuncs';



function App() {
  const [response, setResponse] = useState<any>(null);
  const [daily, setDaily] = useState<boolean>(false);
  const [threeDays, setThreeDays] = useState<boolean>(false);
  const [fiveDays, setFiveDays] = useState<boolean>(false);
  const [cityName, setCityName] = useState<string>('');


  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>


      <div className="select-town" style={{ position: 'relative', zIndex: 1 }}>
        <h1>Какой город интересует?</h1>
        <input 
          value={cityName}
          onChange={e => setCityName(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              dailyForecast(cityName, setDaily, setThreeDays, setFiveDays, setResponse);
            }
          }}
        />
        <button onClick={() => dailyForecast(cityName, setDaily, setThreeDays, setFiveDays, setResponse)}>Найти</button>
      </div>
      
      {response && (
        <>
          <div className="choose-days">
            
            <button onClick={() => dailyForecast(cityName, setDaily, setThreeDays, setFiveDays, setResponse)}>На сегодня</button>
            <button onClick={() => threeDaysForecast(setDaily, setThreeDays, setFiveDays)}>На 3 дня</button>
            <button onClick={() => fiveDaysForecast(setDaily, setThreeDays, setFiveDays)}>На 5 дней</button>

          </div>

          <CityPage 
            key={response.city.name + response.list[0].dt}
            response={response}
            daily = {daily}
            threeDays = {threeDays}
            fiveDays = {fiveDays} 
          />
        </>
      )}
    </div>
  );
}

export default App;

