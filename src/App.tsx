import { useState } from 'react'

import './App.css'

function App() {


const [weatherData, setWeatherData] = useState<any>(null)


async function fetchToApi(request: string){
  const url: string = `http://api.openweathermap.org/data/2.5/forecast?q=${request}&units=metric&lang=ru&appid=f4c00f312087165b908fcc539f5922d2`
  const response = await fetch(url)
  if (!response.ok){
    throw new Error(`Ошибка: ${response.status}`)
  }
  
  return await response.json()
}
async function onBut(){
    
  //  const htmlInput = (document.getElementById('task-input') as HTMLInputElement).value; 
    try{
      const response = await fetchToApi("Kazan")
    setWeatherData(response)
    }
    catch(err){
      console.log(err)
    }

  }
onBut()

function СityPage({ response }: { response: any }){
  
return(
  <div className='city-window'>
    <h1>{response.city.name}</h1>
    <div className="times">
      {[...Array(9)].map((_, i: number) =>
      <div>
        <h3>{response.list[i].dt_txt}</h3>
        <p>{response.list[i].main.temp}<strong>°С</strong></p>
        <p><strong>Облачность:</strong>{response.list[i].clouds.all}%</p>
        
      </div> )}
    </div>
  </div>
)}

  return (
    <>
      <div className='select-town'>
        <h1>Какой город интересует?</h1>
        <input id = 'task-input'/>
        
        <button >Найти</button>
        
      </div>
      {weatherData && <СityPage response = {weatherData} />}
    </>
  )

}
export default App
