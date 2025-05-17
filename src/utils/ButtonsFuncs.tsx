


// Функция отображения погоды на ближайшие сутки

async function dailyForecast(

    cityName: string,
    
    setDaily: (flag: boolean) => void,
    setThreeDays: (flag: boolean) => void,
    setFiveDays: (flag: boolean) => void,

    setResponse: (data: any) => void,
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
      
      setDaily(true)
      setThreeDays(false)
      setFiveDays(false)

      setResponse(response);
      //setCityName('');

    } 
    
    catch (err) {
        console.log(err);
    }
  }

export {dailyForecast}

// Функция отображения погоды на 3 дня

function threeDaysForecast(

  setDaily: (flag: boolean) => void,
  setThreeDays: (flag: boolean) => void,
  setFiveDays: (flag: boolean) => void,

  setCityName: (name: string) => void,


){

  try{

    setDaily(false)
    setThreeDays(true)
    setFiveDays(false)

    //setCityName('')
  }

  catch(err){
    console.log(err)
  }
}

export {threeDaysForecast}


// Функция отображения погоды на 5 дней

function fiveDaysForecast(

  setDaily: (flag: boolean) => void,
  setThreeDays: (flag: boolean) => void,
  setFiveDays: (flag: boolean) => void,

  setCityName: (name: string) => void,


){

  try{

    setDaily(false)
    setThreeDays(false)
    setFiveDays(true)

    //setCityName('')
  }

  catch(err){
    console.log(err)
  }
}

export {fiveDaysForecast}
