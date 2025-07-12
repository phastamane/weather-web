import React from "react";
import { getWeekDay, getMonth, getImage, getWindDirection } from '../../utils/dateHelpers.tsx';

type DailyForecastProps = {
    data: any,
    index: number
}

const DailyForecast: React.FC<DailyForecastProps> = ({data, index}) => {
    
  
    const date: string = data.list[index].dt_txt.slice(0,10)
    const day: string = data.list[index].dt_txt.slice(8, 10)
    const weekDay: string = getWeekDay(date)
    const month: string = getMonth(date)
    const icon: string = data.list[index].weather[0].icon
    const wind: number = data.list[index].wind.speed
    const deg: number =  data.list[index].wind.deg

    let weatherDescription: string = data.list[index].weather[0].description
    weatherDescription = weatherDescription[0].toLocaleUpperCase() + weatherDescription.slice(1)
    let rainAmount: number = 0
    
    if(data.list[index].rain) { 
        rainAmount = data.list[index].rain['3h']}
        


        
    return (
        <>
          
          <div
            className="child-times"
            key={index}

          >
            <p>
              {weekDay}
              <br />
              <strong>{day}</strong> {month}
            </p>
            <h3>{data.list[index].dt_txt.slice(11, 16)}</h3>
            <p>
              <strong>{Math.round(data.list[index].main.temp)}</strong>
              °С
            </p>
            <p>
             <strong> {Math.round(wind)}</strong> м/с
            </p>
            <span>
              {getWindDirection(deg)}
            </span>
            <div id="rain">
              {getImage(icon)}
              <p id="rainfall">
                
                  {weatherDescription}
                  <br />
                  {rainAmount ? rainAmount + ' мм' : "без осадков"}
                
                </p>
          </div>
          </div>
        </>
      );
    }

export default DailyForecast