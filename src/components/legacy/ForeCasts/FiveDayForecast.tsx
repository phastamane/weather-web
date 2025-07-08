import React from "react";
import { FiveDaysForecastLogic } from "./FiveDayForecastLogic.tsx";
import { getWeekDay, getMonth, PageConstructor } from '../../utils/dateHelpers.tsx';


type FiveDaysForecastProps = {
  data: any,
  index: number
}

const FiveDaysForecast: React.FC<FiveDaysForecastProps> = ({data, index}) => {
    
  const forecastList: any = FiveDaysForecastLogic(data)

  const date: string = data.list[index].dt_txt.slice(0,10)

  return (
      <>
        <div
            className="child-times-three-days"
            key={index}
            style={{
              animation: 'fadeIn 0.6s ease forwards',
              animationDelay: `${index * 0.2}s`,
              opacity: 0,
              transform: 'translateY(20px)',
            }}
          >
            <h3 id = "day-of-week">
              {getWeekDay(date, index)}
              <br />
              {forecastList[index].day} {getMonth(date, index)}
            
            </h3>
            <div className="cont-indicators">
              {[...Array(4)].map((_, i) => {
                let rainAmount: number = 0
                if(forecastList[index].rain[i]) { 
                  rainAmount = forecastList[index].rain[i]}
                return <PageConstructor key = {i} rainAmount = {rainAmount} icon = {forecastList[index].icon[i]} i = {i} forecastList = {forecastList} index = {index} />;
              })}
            </div>

          </div>
          
            

      </>
    );
  }

export default FiveDaysForecast
