import React from 'react';
import DailyForecast from '../ForeCasts/DailyForecast';
import ThreeDaysForecast from '../ForeCasts/ThreeDaysForecast';
import FiveDaysForecast from '../ForeCasts/FiveDayForecast'



type CityPageProps = {
  
  response: any,
  daily: boolean,
  threeDays: boolean,
  fiveDays: boolean,

};


const CityPage: React.FC<CityPageProps> = ({ response, daily, threeDays, fiveDays }) => {

  return (
    
    <>
    
    {daily &&(
      <>
        <h1 id="city-name">{response.city.name}</h1>
        <h3 id = 'forecast-declaration'>прогноз погоды на 24 часа</h3>
     
        <div className="times">
          
          {[...Array(9)].map((_, i) => (
            < DailyForecast key = {i} index = {i} data = {response} /> 
          ))}
        
        </div>
    
      </>)}
  
    {threeDays&&(
    <>
    <h1 id="city-name">{response.city.name}</h1>
    <h3 id = 'forecast-declaration'>прогноз погоды на 3 дня</h3>
    <div className="times-three-days">
      {[...Array(3)].map((_, i) => {
        return < ThreeDaysForecast key = {i} index = {i} data = {response} /> 
        })}
      </div>
    </>)
      }

    {fiveDays&&(
        <>
        <h1 id="city-name">{response.city.name}</h1>
        <h3 id = 'forecast-declaration'>прогноз погоды на 5 дней</h3>
        <div className="times-three-days">
          {[...Array(5)].map((_, i) => {
            return < FiveDaysForecast key = {i} index = {i} data = {response} /> 
            })}
          </div>
        </>)
      }    
    </>);
  
};

export default React.memo(CityPage);
