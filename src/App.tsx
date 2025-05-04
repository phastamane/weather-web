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
      let response = await fetchToApi("Kazan")
    const WEATHER = {
      "cod": "200",
      "message": 0,
      "cnt": 40,
      "list": [
          {
              "dt": 1746392400,
              "main": {
                  "temp": 13.34,
                  "feels_like": 12.95,
                  "temp_min": 11.77,
                  "temp_max": 13.34,
                  "pressure": 1007,
                  "sea_level": 1007,
                  "grnd_level": 994,
                  "humidity": 85,
                  "temp_kf": 1.57
              },
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "пасмурно",
                      "icon": "04n"
                  }
              ],
              "clouds": {
                  "all": 90
              },
              "wind": {
                  "speed": 3.33,
                  "deg": 181,
                  "gust": 7.55
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2025-05-04 21:00:00"
          },
          {
              "dt": 1746403200,
              "main": {
                  "temp": 13.05,
                  "feels_like": 12.6,
                  "temp_min": 12.47,
                  "temp_max": 13.05,
                  "pressure": 1006,
                  "sea_level": 1006,
                  "grnd_level": 992,
                  "humidity": 84,
                  "temp_kf": 0.58
              },
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "пасмурно",
                      "icon": "04n"
                  }
              ],
              "clouds": {
                  "all": 92
              },
              "wind": {
                  "speed": 5,
                  "deg": 172,
                  "gust": 12.31
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2025-05-05 00:00:00"
          },
          {
              "dt": 1746414000,
              "main": {
                  "temp": 14.21,
                  "feels_like": 13.8,
                  "temp_min": 14.21,
                  "temp_max": 14.64,
                  "pressure": 1006,
                  "sea_level": 1006,
                  "grnd_level": 992,
                  "humidity": 81,
                  "temp_kf": -0.43
              },
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "небольшой дождь",
                      "icon": "10d"
                  }
              ],
              "clouds": {
                  "all": 97
              },
              "wind": {
                  "speed": 6.89,
                  "deg": 214,
                  "gust": 16.65
              },
              "visibility": 10000,
              "pop": 1,
              "rain": {
                  "3h": 0.56
              },
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-05 03:00:00"
          },
          {
              "dt": 1746424800,
              "main": {
                  "temp": 16.71,
                  "feels_like": 16.19,
                  "temp_min": 16.71,
                  "temp_max": 16.71,
                  "pressure": 1005,
                  "sea_level": 1005,
                  "grnd_level": 992,
                  "humidity": 67,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 803,
                      "main": "Clouds",
                      "description": "облачно с прояснениями",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 84
              },
              "wind": {
                  "speed": 7.34,
                  "deg": 213,
                  "gust": 16.31
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-05 06:00:00"
          },
          {
              "dt": 1746435600,
              "main": {
                  "temp": 24.14,
                  "feels_like": 23.89,
                  "temp_min": 24.14,
                  "temp_max": 24.14,
                  "pressure": 1005,
                  "sea_level": 1005,
                  "grnd_level": 992,
                  "humidity": 49,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "пасмурно",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 88
              },
              "wind": {
                  "speed": 9.06,
                  "deg": 215,
                  "gust": 14.87
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-05 09:00:00"
          },
          {
              "dt": 1746446400,
              "main": {
                  "temp": 22.91,
                  "feels_like": 22.46,
                  "temp_min": 22.91,
                  "temp_max": 22.91,
                  "pressure": 1004,
                  "sea_level": 1004,
                  "grnd_level": 991,
                  "humidity": 46,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 803,
                      "main": "Clouds",
                      "description": "облачно с прояснениями",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 62
              },
              "wind": {
                  "speed": 8.81,
                  "deg": 219,
                  "gust": 14.42
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-05 12:00:00"
          },
          {
              "dt": 1746457200,
              "main": {
                  "temp": 18.99,
                  "feels_like": 18.54,
                  "temp_min": 18.99,
                  "temp_max": 18.99,
                  "pressure": 1005,
                  "sea_level": 1005,
                  "grnd_level": 992,
                  "humidity": 61,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "ясно",
                      "icon": "01d"
                  }
              ],
              "clouds": {
                  "all": 1
              },
              "wind": {
                  "speed": 5.77,
                  "deg": 263,
                  "gust": 10.81
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-05 15:00:00"
          },
          {
              "dt": 1746468000,
              "main": {
                  "temp": 14.67,
                  "feels_like": 14.33,
                  "temp_min": 14.67,
                  "temp_max": 14.67,
                  "pressure": 1007,
                  "sea_level": 1007,
                  "grnd_level": 993,
                  "humidity": 82,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "небольшой дождь",
                      "icon": "10n"
                  }
              ],
              "clouds": {
                  "all": 38
              },
              "wind": {
                  "speed": 4.78,
                  "deg": 256,
                  "gust": 13.34
              },
              "visibility": 10000,
              "pop": 0.2,
              "rain": {
                  "3h": 0.42
              },
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2025-05-05 18:00:00"
          },
          {
              "dt": 1746478800,
              "main": {
                  "temp": 13.92,
                  "feels_like": 13.48,
                  "temp_min": 13.92,
                  "temp_max": 13.92,
                  "pressure": 1006,
                  "sea_level": 1006,
                  "grnd_level": 993,
                  "humidity": 81,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "небольшой дождь",
                      "icon": "10n"
                  }
              ],
              "clouds": {
                  "all": 100
              },
              "wind": {
                  "speed": 3.78,
                  "deg": 238,
                  "gust": 8.45
              },
              "visibility": 10000,
              "pop": 0.2,
              "rain": {
                  "3h": 0.16
              },
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2025-05-05 21:00:00"
          },
          {
              "dt": 1746489600,
              "main": {
                  "temp": 12.78,
                  "feels_like": 12.41,
                  "temp_min": 12.78,
                  "temp_max": 12.78,
                  "pressure": 1005,
                  "sea_level": 1005,
                  "grnd_level": 992,
                  "humidity": 88,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "небольшой дождь",
                      "icon": "10n"
                  }
              ],
              "clouds": {
                  "all": 100
              },
              "wind": {
                  "speed": 3.47,
                  "deg": 220,
                  "gust": 8.3
              },
              "visibility": 10000,
              "pop": 0.2,
              "rain": {
                  "3h": 0.19
              },
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2025-05-06 00:00:00"
          },
          {
              "dt": 1746500400,
              "main": {
                  "temp": 10.9,
                  "feels_like": 10.45,
                  "temp_min": 10.9,
                  "temp_max": 10.9,
                  "pressure": 1006,
                  "sea_level": 1006,
                  "grnd_level": 992,
                  "humidity": 92,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 501,
                      "main": "Rain",
                      "description": "дождь",
                      "icon": "10d"
                  }
              ],
              "clouds": {
                  "all": 100
              },
              "wind": {
                  "speed": 5.42,
                  "deg": 277,
                  "gust": 9.47
              },
              "visibility": 8670,
              "pop": 1,
              "rain": {
                  "3h": 3.02
              },
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-06 03:00:00"
          },
          {
              "dt": 1746511200,
              "main": {
                  "temp": 11.24,
                  "feels_like": 10.51,
                  "temp_min": 11.24,
                  "temp_max": 11.24,
                  "pressure": 1008,
                  "sea_level": 1008,
                  "grnd_level": 994,
                  "humidity": 80,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "небольшой дождь",
                      "icon": "10d"
                  }
              ],
              "clouds": {
                  "all": 100
              },
              "wind": {
                  "speed": 8.59,
                  "deg": 269,
                  "gust": 12.27
              },
              "visibility": 10000,
              "pop": 1,
              "rain": {
                  "3h": 0.72
              },
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-06 06:00:00"
          },
          {
              "dt": 1746522000,
              "main": {
                  "temp": 10.77,
                  "feels_like": 9.36,
                  "temp_min": 10.77,
                  "temp_max": 10.77,
                  "pressure": 1011,
                  "sea_level": 1011,
                  "grnd_level": 997,
                  "humidity": 56,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 802,
                      "main": "Clouds",
                      "description": "переменная облачность",
                      "icon": "03d"
                  }
              ],
              "clouds": {
                  "all": 34
              },
              "wind": {
                  "speed": 8.58,
                  "deg": 290,
                  "gust": 10.42
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-06 09:00:00"
          },
          {
              "dt": 1746532800,
              "main": {
                  "temp": 11.18,
                  "feels_like": 9.69,
                  "temp_min": 11.18,
                  "temp_max": 11.18,
                  "pressure": 1012,
                  "sea_level": 1012,
                  "grnd_level": 999,
                  "humidity": 51,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 801,
                      "main": "Clouds",
                      "description": "небольшая облачность",
                      "icon": "02d"
                  }
              ],
              "clouds": {
                  "all": 22
              },
              "wind": {
                  "speed": 5.73,
                  "deg": 315,
                  "gust": 7.7
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-06 12:00:00"
          },
          {
              "dt": 1746543600,
              "main": {
                  "temp": 11.39,
                  "feels_like": 9.86,
                  "temp_min": 11.39,
                  "temp_max": 11.39,
                  "pressure": 1013,
                  "sea_level": 1013,
                  "grnd_level": 1000,
                  "humidity": 49,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "ясно",
                      "icon": "01d"
                  }
              ],
              "clouds": {
                  "all": 10
              },
              "wind": {
                  "speed": 3.86,
                  "deg": 292,
                  "gust": 5.69
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-06 15:00:00"
          },
          {
              "dt": 1746554400,
              "main": {
                  "temp": 8.27,
                  "feels_like": 6.93,
                  "temp_min": 8.27,
                  "temp_max": 8.27,
                  "pressure": 1015,
                  "sea_level": 1015,
                  "grnd_level": 1001,
                  "humidity": 55,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 801,
                      "main": "Clouds",
                      "description": "небольшая облачность",
                      "icon": "02n"
                  }
              ],
              "clouds": {
                  "all": 24
              },
              "wind": {
                  "speed": 2.29,
                  "deg": 285,
                  "gust": 3.26
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2025-05-06 18:00:00"
          },
          {
              "dt": 1746565200,
              "main": {
                  "temp": 6.7,
                  "feels_like": 4.64,
                  "temp_min": 6.7,
                  "temp_max": 6.7,
                  "pressure": 1016,
                  "sea_level": 1016,
                  "grnd_level": 1002,
                  "humidity": 65,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 801,
                      "main": "Clouds",
                      "description": "небольшая облачность",
                      "icon": "02n"
                  }
              ],
              "clouds": {
                  "all": 13
              },
              "wind": {
                  "speed": 2.86,
                  "deg": 344,
                  "gust": 4.58
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2025-05-06 21:00:00"
          },
          {
              "dt": 1746576000,
              "main": {
                  "temp": 4.72,
                  "feels_like": 2.46,
                  "temp_min": 4.72,
                  "temp_max": 4.72,
                  "pressure": 1017,
                  "sea_level": 1017,
                  "grnd_level": 1003,
                  "humidity": 75,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "ясно",
                      "icon": "01n"
                  }
              ],
              "clouds": {
                  "all": 8
              },
              "wind": {
                  "speed": 2.63,
                  "deg": 67,
                  "gust": 5.15
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2025-05-07 00:00:00"
          },
          {
              "dt": 1746586800,
              "main": {
                  "temp": 6.4,
                  "feels_like": 4.24,
                  "temp_min": 6.4,
                  "temp_max": 6.4,
                  "pressure": 1016,
                  "sea_level": 1016,
                  "grnd_level": 1003,
                  "humidity": 69,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 803,
                      "main": "Clouds",
                      "description": "облачно с прояснениями",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 82
              },
              "wind": {
                  "speed": 2.93,
                  "deg": 84,
                  "gust": 4.91
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-07 03:00:00"
          },
          {
              "dt": 1746597600,
              "main": {
                  "temp": 10.27,
                  "feels_like": 8.84,
                  "temp_min": 10.27,
                  "temp_max": 10.27,
                  "pressure": 1016,
                  "sea_level": 1016,
                  "grnd_level": 1002,
                  "humidity": 57,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 803,
                      "main": "Clouds",
                      "description": "облачно с прояснениями",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 83
              },
              "wind": {
                  "speed": 2.63,
                  "deg": 129,
                  "gust": 3.01
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-07 06:00:00"
          },
          {
              "dt": 1746608400,
              "main": {
                  "temp": 12.83,
                  "feels_like": 11.4,
                  "temp_min": 12.83,
                  "temp_max": 12.83,
                  "pressure": 1014,
                  "sea_level": 1014,
                  "grnd_level": 1001,
                  "humidity": 47,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "пасмурно",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 100
              },
              "wind": {
                  "speed": 2.54,
                  "deg": 150,
                  "gust": 2.53
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-07 09:00:00"
          },
          {
              "dt": 1746619200,
              "main": {
                  "temp": 13.68,
                  "feels_like": 12.25,
                  "temp_min": 13.68,
                  "temp_max": 13.68,
                  "pressure": 1013,
                  "sea_level": 1013,
                  "grnd_level": 999,
                  "humidity": 44,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "пасмурно",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 100
              },
              "wind": {
                  "speed": 2.5,
                  "deg": 158,
                  "gust": 2.3
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-07 12:00:00"
          },
          {
              "dt": 1746630000,
              "main": {
                  "temp": 12.19,
                  "feels_like": 10.87,
                  "temp_min": 12.19,
                  "temp_max": 12.19,
                  "pressure": 1011,
                  "sea_level": 1011,
                  "grnd_level": 998,
                  "humidity": 54,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "пасмурно",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 100
              },
              "wind": {
                  "speed": 2.18,
                  "deg": 155,
                  "gust": 2.61
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-07 15:00:00"
          },
          {
              "dt": 1746640800,
              "main": {
                  "temp": 9.8,
                  "feels_like": 8.93,
                  "temp_min": 9.8,
                  "temp_max": 9.8,
                  "pressure": 1011,
                  "sea_level": 1011,
                  "grnd_level": 998,
                  "humidity": 74,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "небольшой дождь",
                      "icon": "10n"
                  }
              ],
              "clouds": {
                  "all": 100
              },
              "wind": {
                  "speed": 2.03,
                  "deg": 190,
                  "gust": 3.41
              },
              "visibility": 10000,
              "pop": 0.2,
              "rain": {
                  "3h": 0.23
              },
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2025-05-07 18:00:00"
          },
          {
              "dt": 1746651600,
              "main": {
                  "temp": 9.31,
                  "feels_like": 9.31,
                  "temp_min": 9.31,
                  "temp_max": 9.31,
                  "pressure": 1009,
                  "sea_level": 1009,
                  "grnd_level": 996,
                  "humidity": 80,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "небольшой дождь",
                      "icon": "10n"
                  }
              ],
              "clouds": {
                  "all": 100
              },
              "wind": {
                  "speed": 1.32,
                  "deg": 74,
                  "gust": 2.16
              },
              "visibility": 10000,
              "pop": 0.2,
              "rain": {
                  "3h": 0.11
              },
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2025-05-07 21:00:00"
          },
          {
              "dt": 1746662400,
              "main": {
                  "temp": 8.47,
                  "feels_like": 7.12,
                  "temp_min": 8.47,
                  "temp_max": 8.47,
                  "pressure": 1008,
                  "sea_level": 1008,
                  "grnd_level": 995,
                  "humidity": 90,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "небольшой дождь",
                      "icon": "10n"
                  }
              ],
              "clouds": {
                  "all": 100
              },
              "wind": {
                  "speed": 2.35,
                  "deg": 38,
                  "gust": 3.66
              },
              "visibility": 10000,
              "pop": 0.97,
              "rain": {
                  "3h": 0.89
              },
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2025-05-08 00:00:00"
          },
          {
              "dt": 1746673200,
              "main": {
                  "temp": 8.59,
                  "feels_like": 6.66,
                  "temp_min": 8.59,
                  "temp_max": 8.59,
                  "pressure": 1007,
                  "sea_level": 1007,
                  "grnd_level": 994,
                  "humidity": 86,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "небольшой дождь",
                      "icon": "10d"
                  }
              ],
              "clouds": {
                  "all": 100
              },
              "wind": {
                  "speed": 3.27,
                  "deg": 58,
                  "gust": 7.08
              },
              "visibility": 10000,
              "pop": 0.5,
              "rain": {
                  "3h": 0.22
              },
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-08 03:00:00"
          },
          {
              "dt": 1746684000,
              "main": {
                  "temp": 8.34,
                  "feels_like": 6.76,
                  "temp_min": 8.34,
                  "temp_max": 8.34,
                  "pressure": 1007,
                  "sea_level": 1007,
                  "grnd_level": 994,
                  "humidity": 82,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "небольшой дождь",
                      "icon": "10d"
                  }
              ],
              "clouds": {
                  "all": 100
              },
              "wind": {
                  "speed": 2.64,
                  "deg": 79,
                  "gust": 5.26
              },
              "visibility": 10000,
              "pop": 0.3,
              "rain": {
                  "3h": 0.2
              },
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-08 06:00:00"
          },
          {
              "dt": 1746694800,
              "main": {
                  "temp": 8.48,
                  "feels_like": 7.35,
                  "temp_min": 8.48,
                  "temp_max": 8.48,
                  "pressure": 1008,
                  "sea_level": 1008,
                  "grnd_level": 994,
                  "humidity": 83,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "небольшой дождь",
                      "icon": "10d"
                  }
              ],
              "clouds": {
                  "all": 100
              },
              "wind": {
                  "speed": 2.08,
                  "deg": 51,
                  "gust": 2.75
              },
              "visibility": 10000,
              "pop": 0.44,
              "rain": {
                  "3h": 0.25
              },
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-08 09:00:00"
          },
          {
              "dt": 1746705600,
              "main": {
                  "temp": 8.99,
                  "feels_like": 8,
                  "temp_min": 8.99,
                  "temp_max": 8.99,
                  "pressure": 1008,
                  "sea_level": 1008,
                  "grnd_level": 995,
                  "humidity": 81,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "пасмурно",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 100
              },
              "wind": {
                  "speed": 2.02,
                  "deg": 357,
                  "gust": 2.47
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-08 12:00:00"
          },
          {
              "dt": 1746716400,
              "main": {
                  "temp": 8.72,
                  "feels_like": 7.43,
                  "temp_min": 8.72,
                  "temp_max": 8.72,
                  "pressure": 1009,
                  "sea_level": 1009,
                  "grnd_level": 995,
                  "humidity": 85,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "пасмурно",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 100
              },
              "wind": {
                  "speed": 2.33,
                  "deg": 330,
                  "gust": 3.71
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-08 15:00:00"
          },
          {
              "dt": 1746727200,
              "main": {
                  "temp": 7.31,
                  "feels_like": 5.95,
                  "temp_min": 7.31,
                  "temp_max": 7.31,
                  "pressure": 1010,
                  "sea_level": 1010,
                  "grnd_level": 996,
                  "humidity": 90,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "пасмурно",
                      "icon": "04n"
                  }
              ],
              "clouds": {
                  "all": 91
              },
              "wind": {
                  "speed": 2.12,
                  "deg": 317,
                  "gust": 3.28
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2025-05-08 18:00:00"
          },
          {
              "dt": 1746738000,
              "main": {
                  "temp": 5.78,
                  "feels_like": 4.34,
                  "temp_min": 5.78,
                  "temp_max": 5.78,
                  "pressure": 1010,
                  "sea_level": 1010,
                  "grnd_level": 997,
                  "humidity": 92,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "ясно",
                      "icon": "01n"
                  }
              ],
              "clouds": {
                  "all": 5
              },
              "wind": {
                  "speed": 1.94,
                  "deg": 291,
                  "gust": 2.52
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2025-05-08 21:00:00"
          },
          {
              "dt": 1746748800,
              "main": {
                  "temp": 5.19,
                  "feels_like": 3.8,
                  "temp_min": 5.19,
                  "temp_max": 5.19,
                  "pressure": 1011,
                  "sea_level": 1011,
                  "grnd_level": 997,
                  "humidity": 93,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 801,
                      "main": "Clouds",
                      "description": "небольшая облачность",
                      "icon": "02n"
                  }
              ],
              "clouds": {
                  "all": 14
              },
              "wind": {
                  "speed": 1.8,
                  "deg": 296,
                  "gust": 2.07
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2025-05-09 00:00:00"
          },
          {
              "dt": 1746759600,
              "main": {
                  "temp": 7.19,
                  "feels_like": 5.72,
                  "temp_min": 7.19,
                  "temp_max": 7.19,
                  "pressure": 1012,
                  "sea_level": 1012,
                  "grnd_level": 998,
                  "humidity": 86,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 803,
                      "main": "Clouds",
                      "description": "облачно с прояснениями",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 74
              },
              "wind": {
                  "speed": 2.22,
                  "deg": 291,
                  "gust": 3.59
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-09 03:00:00"
          },
          {
              "dt": 1746770400,
              "main": {
                  "temp": 11.32,
                  "feels_like": 10.23,
                  "temp_min": 11.32,
                  "temp_max": 11.32,
                  "pressure": 1012,
                  "sea_level": 1012,
                  "grnd_level": 999,
                  "humidity": 66,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "пасмурно",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 87
              },
              "wind": {
                  "speed": 3.09,
                  "deg": 298,
                  "gust": 3.84
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-09 06:00:00"
          },
          {
              "dt": 1746781200,
              "main": {
                  "temp": 12.48,
                  "feels_like": 11.25,
                  "temp_min": 12.48,
                  "temp_max": 12.48,
                  "pressure": 1013,
                  "sea_level": 1013,
                  "grnd_level": 999,
                  "humidity": 56,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "небольшой дождь",
                      "icon": "10d"
                  }
              ],
              "clouds": {
                  "all": 70
              },
              "wind": {
                  "speed": 4.91,
                  "deg": 283,
                  "gust": 5.01
              },
              "visibility": 10000,
              "pop": 0.68,
              "rain": {
                  "3h": 0.28
              },
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-09 09:00:00"
          },
          {
              "dt": 1746792000,
              "main": {
                  "temp": 12.2,
                  "feels_like": 10.81,
                  "temp_min": 12.2,
                  "temp_max": 12.2,
                  "pressure": 1014,
                  "sea_level": 1014,
                  "grnd_level": 1000,
                  "humidity": 51,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "небольшой дождь",
                      "icon": "10d"
                  }
              ],
              "clouds": {
                  "all": 83
              },
              "wind": {
                  "speed": 6.61,
                  "deg": 287,
                  "gust": 6.63
              },
              "visibility": 10000,
              "pop": 0.2,
              "rain": {
                  "3h": 0.11
              },
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-09 12:00:00"
          },
          {
              "dt": 1746802800,
              "main": {
                  "temp": 11.37,
                  "feels_like": 9.87,
                  "temp_min": 11.37,
                  "temp_max": 11.37,
                  "pressure": 1015,
                  "sea_level": 1015,
                  "grnd_level": 1001,
                  "humidity": 50,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 803,
                      "main": "Clouds",
                      "description": "облачно с прояснениями",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 51
              },
              "wind": {
                  "speed": 4.26,
                  "deg": 265,
                  "gust": 6.4
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2025-05-09 15:00:00"
          },
          {
              "dt": 1746813600,
              "main": {
                  "temp": 8.02,
                  "feels_like": 5.75,
                  "temp_min": 8.02,
                  "temp_max": 8.02,
                  "pressure": 1016,
                  "sea_level": 1016,
                  "grnd_level": 1002,
                  "humidity": 63,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 802,
                      "main": "Clouds",
                      "description": "переменная облачность",
                      "icon": "03n"
                  }
              ],
              "clouds": {
                  "all": 45
              },
              "wind": {
                  "speed": 3.66,
                  "deg": 258,
                  "gust": 8.64
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2025-05-09 18:00:00"
          }
      ],
      "city": {
          "id": 551487,
          "name": "Казань",
          "coord": {
              "lat": 55.7887,
              "lon": 49.1221
          },
          "country": "RU",
          "population": 1104738,
          "timezone": 10800,
          "sunrise": 1746320027,
          "sunset": 1746376002
      }
  }
    response = WEATHER
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
        <p>{Math.round(response.list[i].main.temp)}<strong>°С</strong></p>
        <p><strong>Облачность: </strong>{response.list[i].clouds.all}%</p>
        
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
