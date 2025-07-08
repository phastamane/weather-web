import React from "react";
import { getWeekDay, getMonth, getImage } from '../../utils/dateHelpers.tsx';

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
            style={{
              animation: 'fadeIn 0.6s ease forwards',
              animationDelay: `${index * 0.2}s`,
              opacity: 0,
              transform: 'translateY(20px)',
            }}
          >
            <h3>
              {weekDay}
              <br />
              {day} {month}
            </h3>
            <h3>{data.list[index].dt_txt.slice(11, 16)}</h3>
            <p>
              {Math.round(data.list[index].main.temp)}
              <strong> °С</strong>
            </p>
            <div id="rain">
              {getImage(icon)}
              <p id="rainfall">
                <strong>
                  {weatherDescription + ","}
                  <br />
                  {rainAmount ? rainAmount + ' мм' : "без осадков"}
                </strong>
                </p>
          </div>
          </div>
        </>
      );
    }

export default DailyForecast