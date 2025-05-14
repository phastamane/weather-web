


// Функция отображения погоды на ближайшие сутки

async function dailyForecast(

    cityName: string,
    setWeatherDataDaily: (data: any) => void,
    setCityName: (name: string) => void,

    
) {
    try {
      
      const API_KEY: string = 'f4c00f312087165b908fcc539f5922d2'

      async function fetchToApi(request: string) {
        const url: string = `http://api.openweathermap.org/data/2.5/forecast?q=${request}&units=metric&lang=ru&appid=${API_KEY}`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        const data = await response.json()
        console.log(data)
        return data
      }
      
      let response = await fetchToApi(cityName);
      
      setWeatherDataDaily(response);
      setCityName('');

    } 
    
    catch (err) {
        console.log(err);
    }
  }

export {dailyForecast}

// Функция отображения погоды на 3 дня

async function threeDaysForecast(
  
  citiName: string,
  setWeatherDataThreeDays: (data: any) => void,
  setWeatherDataDaily: (data: any) => void,
  setCityName: (name: string) => void,


){

  try{

    const API_KEY: string = 'f4c00f312087165b908fcc539f5922d2'

      async function fetchToApi(request: string) {
        const url: string = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${request}&units=metric&lang=ru&appid=${API_KEY}`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        const data = await response.json()
        console.log(data)
        return data
      } 
      
    let response = await fetchToApi(citiName)
    setWeatherDataDaily(null)
    setWeatherDataThreeDays(response)
    setCityName('')
  }

  catch(err){
    console.log(err)
  }
}

export {threeDaysForecast}
