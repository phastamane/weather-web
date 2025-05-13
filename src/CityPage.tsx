import React from 'react';

type CityPageProps = {
  response: any;
};




const CityPage: React.FC<CityPageProps> = ({ response }) => {

  return (
    
    <div className="city-window">
      
      <div className="chose-days">
      
      {/* <button onClick={day()}></button>
      <button onClick={threeDays()}></button>
      <button onClick={sevenDays()}></button> */}
      
      </div>

      <h1 id ='city-name'>{response.city.name}</h1>
      <div className="times">
        {[...Array(9)].map((_, i: number) => {

          const date: string = response.list[i].dt_txt.slice(0,10)
          const day: string = response.list[i].dt_txt.slice(8, 10)
          const weekDay: string = getWeekDay(date)
          const month: string = getMonth(date)
          const icon: string = '10n'
          
          return(
          <div
            className="child-times"
            key={i}
            style={{
              animation: 'fadeIn 0.6s ease forwards',
              animationDelay: `${i * 0.2}s`,
              opacity: 0,
              transform: 'translateY(20px)',
            }}
          >
            <h3>
              { weekDay }<br />
              {day} {month}
            </h3>
            <h3>{response.list[i].dt_txt.slice(11, 16)}</h3>
            <p>
              {Math.round(response.list[i].main.temp)}
              <strong>°С</strong>
            </p>
            <p>
              <strong>Облачность:<br /></strong>
              {response.list[i].clouds.all}%
            </p>

            {response.list[i].rain ? (
              (() => {
                const rainAmount = Number(response.list[i].rain['3h']);
                if (rainAmount < 3) {
                  return (
                    <div id = 'rain'>
                    {getImage(icon)}
                    <p id = 'rainfall'>
                      <strong>Небольшой дождь</strong>
                    </p>
                    </div>
                  );
                } else if (rainAmount >= 3 && rainAmount < 49) {
                  return (
                    <div id = 'rain'>
                    {getImage(icon)}
                    <p id = 'rainfall'>
                      <strong>Дождь</strong>
                    </p>
                    </div>
                  );
                } else if (rainAmount >= 49 && rainAmount <= 50) {
                  return (
                    <div id = 'rain'>
                    {getImage(icon)}
                    <p id = 'rainfall'>
                      <strong>Сильный дождь</strong>
                    </p>
                    </div>
                  );
                } else if (rainAmount > 50) {
                  return (
                    <div id = 'rain'>
                    {getImage(icon)}
                    <p id = 'rainfall'>
                      <strong>Ливни</strong>
                    </p>
                    </div>
                  );
                }
                return null;
              })()
            ) : (
                  <div id = 'rain'>
                   {getImage(icon)}
                   <p id = 'rainfall'>
                  <strong>Осадков нет</strong>
                </p>
              </div>
            )}
          </div>)
        })}
      </div>
    </div>
  );
};

export default React.memo(CityPage);

function getWeekDay(date: string): string{
  const days: string [] = ["Воскресенье", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Понедельник"];
  const processedData: Date = new Date(date)

  return days[processedData.getDay()]
}

function getMonth(date: string): string{
  const months: string [] = ["Янв", "Фев", "Марта", "Апр", "Мая", "Июня", "Июля", "Авг", "Сент", "Окт", "Нояб", "Дек" ];
  const processedData: Date = new Date(date)

  return months[processedData.getMonth()]
}
function getImage(current: string){
  
  const url: string = `https://openweathermap.org/img/wn/${current}@2x.png`
  
  return <img src = {url}  id = 'weather-icon'/>
}
