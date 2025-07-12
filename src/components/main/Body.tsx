import React from "react";
import { useEffect, useState } from "react";
import getResponse from "../utils/getResponse";
import { getImage, getWindDirection } from "../utils/dateHelpers";
import DailyForecast from "../legacy/ForeCasts/DailyForecast";

type BodyProps = {

    request: string
}

type WeatherValue = {
    
    value: string| number | React.ReactNode ,
    unit?: string,
    description?: string,
    windDirection?: string,
}

function Body ({request}: BodyProps) {
    
    const [data, setData] = useState<any>(null)
    
    const values: Record< 'icon'| 'name' | 'template' | 'humidity' | 'wind' , WeatherValue> =
    {     
        icon: {value: getImage(data?.list[0]?.weather[0]?.icon),},
        name : {value:data?.city?.name, description: data?.city?.country },

        template:  {value: Math.round(data?.list[0]?.main?.temp), unit: '°C', description: 'Template'},
        humidity: {value: data?.list[0]?.main?.humidity, unit: '%', description: 'Hudimity'},
        wind: {value: Math.round(data?.list[0]?.wind?.speed), unit: `м/с ${getWindDirection(data?.list[0]?.wind?.deg)}`, description: 'Wind',},
        
    }

    
    useEffect(() => {
    const fetchData = async () => {
        if (request.trim() !== '') {
        const result = await getResponse(request);
        setData(result);
        console.log("Response:", result.city.name);
        }
    };


    fetchData();
    }, [request]);
        console.log("Response:", data);

    return (

            <>
                <div className="main">
                    <div className="main__forecast">
                        <div className="main__values">
                            <span>погода сейчас</span>
                            {Object.entries(values).map(([key, { value, unit, description }]) => (
                            <div key={key} className="day-values">
                                <div className="main__line">
                                
                                <span>{value}</span>
                                <div className="body-light">{unit && ` ${unit}`}</div>
                                </div>
                                {description && <div className="main__description body-light">{description}</div>}
                            </div>
                            ))}
                        </div>
                    
    
    
                        {data &&
                           <div className="main__times-wrapper">
                                <div className="main__times">
                                {[...Array(8)].map((_,i) => 
                                (<DailyForecast key = {i} data={data} index = {i+1}/>)
                                    )}
                            </div>
                           </div>}
                    </div>
                </div>
        
            </>

    );
};

export default Body