import React from "react";
import { getWeekDay, getImage, getMonth } from '../../utils/dateHelpers.tsx';

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
            <p>
              <strong>Облачность:<br /></strong>
              {data.list[index].clouds.all}%
            </p>
      
            {data.list[index].rain ? (
              (() => {
                const rainAmount = Number(data.list[index].rain['3h']);
      
                if (rainAmount < 3) {
                  return (
                    <div id="rain">
                      {getImage(icon)}
                      <p id="rainfall">
                        <strong>
                          Небольшой дождь
                          <br />
                          {rainAmount + ' мм'}
                        </strong>
                      </p>
                    </div>
                  );
                } else if (rainAmount >= 3 && rainAmount < 49) {
                  return (
                    <div id="rain">
                      {getImage(icon)}
                      <p id="rainfall">
                        <strong>
                          Дождь
                          <br />
                          {Math.round(rainAmount) + ' мм'}
                        </strong>
                      </p>
                    </div>
                  );
                } else if (rainAmount >= 49 && rainAmount <= 50) {
                  return (
                    <div id="rain">
                      {getImage(icon)}
                      <p id="rainfall">
                        <strong>
                          Сильный дождь
                          <br />
                          {Math.round(rainAmount) + ' мм'}
                        </strong>
                      </p>
                    </div>
                  );
                } else if (rainAmount > 50) {
                  return (
                    <div id="rain">
                      {getImage(icon)}
                      <p id="rainfall">
                        <strong>
                          Ливни
                          <br />
                          {Math.round(rainAmount) + ' мм'}
                        </strong>
                      </p>
                    </div>
                  );
                }
      
                return null;
              })()
            ) : (
              <div id="rain">
                {getImage(icon)}
                <p id="rainfall">
                  <strong>Осадков нет</strong>
                </p>
              </div>
            )}
          </div>
        </>
      );
    }

export default DailyForecast