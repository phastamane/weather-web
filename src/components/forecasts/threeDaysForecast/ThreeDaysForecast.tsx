import { useState } from "react";
import { useDataStore } from "../../../hooks/store";
import { ThreeDaysForecastLogic } from "./TreeDayForecastLogic";
import { getImage } from "../../utils/dateHelpers";
import { getWeekDay, getMonth, PageConstructor } from "../../utils/dateHelpers";

type ThreeDaysForecastType = {
    index: number,
}

function ThreeDaysForecast({index}: ThreeDaysForecastType){
    

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
            <div className = {!moreDetails ? "three-days-forecast" : 'three-days-forecast-active'}
             onClick={() => setMoreDetails(!moreDetails)}>
                
                <div className={moreDetails ? "three-days-forecast__values-cont-hidden" : 'three-days-forecast__values-cont'}>
                    <div className="three-days-forecast__values">
                        {icon} 
                        <span className="day-temp">{forecastList[index]?.temp[2]}°C
                            {' '}
                            <span className="night-temp">
                            / {forecastList[index]?.temp[3] ? forecastList[index]?.temp[2] : forecastList[index]?.temp[1]}°C
                            </span>

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
                {moreDetails && 
                <>
                    <div className="cont-indicators">
                        <div className="three-days-forecast__date-values-active">

                            <span className="day-value">{day}</span>
                            <span className="month-value">{month}</span>
                            <span className="month-value">{weekDay}</span>                    

                    </div>
                        {[...Array(4)].map((_, i) => {
                        let rainAmount: number = 0
                        if(forecastList[index].rain[i]) { 
                            rainAmount = forecastList[index].rain[i]}
                        return <PageConstructor key = {i} rainAmount = {rainAmount} icon = {forecastList[index].icon[i]} i = {i} forecastList = {forecastList} index = {index} />;
                        })}
                    </div>
                </>
                }
            </div>
        </>
        

    )

}

export default ThreeDaysForecast