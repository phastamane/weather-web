import { useState } from 'react'

import './App.css'

function App() {


const [weatherData, setWeatherData] = useState<any>(null)

const [cityName, setCityName] = useState<string>('')

async function fetchToApi(request: string){
  const url: string = `http://api.openweathermap.org/data/2.5/forecast?q=${request}&units=metric&lang=ru&appid=f4c00f312087165b908fcc539f5922d2`
  const response = await fetch(url)
  if (!response.ok){
    throw new Error(`Ошибка: ${response.status}`)
  }


  return await response.json()
}

async function onBut(){
    
     
    try{
      let response = await fetchToApi(cityName)
        console.log(response)
      setWeatherData(response)
      setCityName('')
    }
    catch(err){
      console.log(err)
    }

  }


function СityPage({ response }: { response: any }){
  
return(
  <div className='city-window'>
    <h1>{response.city.name}</h1>
    <div className="times">
      {[...Array(9)].map((_, i: number) =>
        <div
        className="child-times"
        key={i}
        style={{
          animation: 'fadeIn 0.6s ease forwards',
          animationDelay: `${i * 0.2}s`,
          opacity: 0,
          transform: 'translateY(20px)'
        }}>
        <h3>{response.list[i].dt_txt.slice(8, 10) + '.' +response.list[i].dt_txt.slice(5, 7)}</h3>
        <h3>{response.list[i].dt_txt.slice(11, 16)}</h3>
        <p>{Math.round(response.list[i].main.temp)}<strong>°С</strong></p>
        <p><strong>Облачность:<br></br> </strong>{response.list[i].clouds.all}%</p>

        {response.list[i].rain && (
            (() => {
                const rainAmount = Number(response.list[i].rain['3h']);
                if (rainAmount < 3) {
                return <p id = 'rain'><strong>Небольшой дождь</strong></p>
                } else if (rainAmount >= 14 && rainAmount < 49) {
                return <p id = 'rain'><strong>Дождь</strong></p>;
                } else if (rainAmount >= 49 && rainAmount <= 50) {
                return <p id = 'rain'><strong>Сильный дождь</strong></p>;
                } else if (rainAmount > 50) {
                return <p id = 'rain'><strong>Ливни</strong></p>;
                }
                return null;
            })()
)}

        {!response.list[i].rain && (
            <p id = 'rain'><strong>Осадков нет</strong></p>
        ) }

      </div> )}
    </div>
  </div>
)}

  return (
    <>
      <div className='select-town'>
        <h1>Какой город интересует?</h1>
        <input 
        value={cityName}
        onChange={e => setCityName(e.target.value)}
        />
        
        <button onClick={onBut}>Найти</button>
        
      </div>
      {weatherData && <СityPage response = {weatherData} />}
    </>
  )

}
export default App
