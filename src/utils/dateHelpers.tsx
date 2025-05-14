
export function getWeekDay(date: string): string{
    const days: string [] = ["Воскресенье", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Понедельник"];
    const processedData: Date = new Date(date)
  
    return days[processedData.getDay()]
  }
  
  export function getMonth(date: string): string{
    const months: string [] = ["Янв", "Фев", "Марта", "Апр", "Мая", "Июня", "Июля", "Авг", "Сент", "Окт", "Нояб", "Дек" ];
    const processedData: Date = new Date(date)
  
    return months[processedData.getMonth()]
  }
  export function getImage(current: string){
    
    const url: string = `https://openweathermap.org/img/wn/${current}@2x.png`
    
    return <img src = {url}  id = 'weather-icon'/>
  }