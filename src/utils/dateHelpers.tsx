
export function getWeekDay(date: string, num: number = 0): string{
    const days: string [] = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const processedData: Date = new Date(date)
    processedData.setDate(processedData.getDate() + num)
    return days[processedData.getDay()]
  }
  
  export function getMonth(date: string, num: number = 0): string{
    const months: string [] = ["Янв", "Фев", "Марта", "Апр", "Мая", "Июня", "Июля", "Авг", "Сент", "Окт", "Нояб", "Дек" ];
    const processedData: Date = new Date(date)
    processedData.setDate(processedData.getDate() + num)
  
    return months[processedData.getMonth()]
  }
 
  export function getImage(current: string){
    
    const url: string = `https://openweathermap.org/img/wn/${current}@2x.png`
    
    return <img src = {url}  id = 'weather-icon'/>
  }

  // функция для получения 3-х уникальных чисел дней

export function unique(arr: number []){

  return Array.from(new Set(arr))

}

type PageConstructorProps = {
  rainAmount: number,
  icon: string | null,
  i: number,
  forecastList: any,
  index: number,
}

export function PageConstructor({rainAmount, icon, i, forecastList, index} : PageConstructorProps){


    
  const timesOfDay: string [] = ["Ночь", "Утро", "День", "Вечер"]
    if(!icon){ return null}
    return(
      <>  

        <div className="indicators" key={i}>
          <h3>{timesOfDay[i]}</h3>
          <p>
            {forecastList[index].temp[i]}
            <strong> °С</strong>
          </p>
          <div id="rain">
          {getImage(icon)}
          <p id="rainfall">
            <strong>
              {forecastList[index].weatherDescription[i] + ","}
              <br />
              {rainAmount ? rainAmount + ' мм' : "без осадков"}
            </strong>
          </p>
          </div>
        </div>
 
        </>
      );

}