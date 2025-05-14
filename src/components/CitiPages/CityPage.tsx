import React from 'react';
import DailyForecast from '../ForeCasts/DailyForecast';


type CityPageProps = {
  response: any;
};


const CityPage: React.FC<CityPageProps> = ({ response }) => {

  return (
    <>
    <h1 id="city-name">{response.city.name}</h1>
     
    <div className="times">
      
      {[...Array(9)].map((_, i) => (
        < DailyForecast key = {i} index = {i} data = {response} /> 
      ))}
    
    </div>
  
  </>
  );
  
};

export default React.memo(CityPage);
