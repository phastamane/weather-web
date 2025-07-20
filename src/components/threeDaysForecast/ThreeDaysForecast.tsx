import React from "react";
import { useState } from "react";
import { useDataStore } from "../../hooks/store";
import { ThreeDaysForecastLogic } from "../legacy/ForeCasts/TreeDayForecastLogic";
import getResponse from "../utils/getResponse";
import { getImage } from "../utils/dateHelpers";
import { getWeekDay, getMonth } from "../utils/dateHelpers";

type ThreeDaysForecastType = {
    index: number,
    request: string
}

function ThreeDaysForecast({index, request}: ThreeDaysForecastType){
    
    const response = async() => await getResponse(request, "weather");
    const [moreDetails, setMoreDetails] = useState<boolean>(false)
    const data = useDataStore(state => state.response)
    const forecastList = ThreeDaysForecastLogic(data)
    const icon = getImage(data?.list[0]?.weather[0]?.icon)
    const date: string = data?.list[index].dt_txt.slice(0,10)
    const day: number = forecastList[index-1]?.day
    const weekDay: string = getWeekDay(date, index)
    const month: string = getMonth(date)


    return(
        <>
            <div className="three-days-forecast">
                <div className="three-days-forecast__values">
                    {icon} 
                    <span className="day-temp">{forecastList[index]?.temp[2]}°C
                        {' '}
                        <span className="night-temp">/ {forecastList[index]?.temp[3]}°C</span>
                    </span> 
                    
                </div>
                <div className="three-days-forecast__date-values">
                    <div className="day-value">
                        <span>{day}</span>
                        <span className="month-value">{month}, 
                            {' '}
                            <span className="month-value">{weekDay}</span>
                        </span>                    
                    </div>
                
                </div>
            </div>
        </>
        

    )

}

export default ThreeDaysForecast