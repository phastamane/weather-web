
const getDate = () => {

    const date: Date = new Date();

    const days: string [] = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"] 
    const month: string [] = ["Янв", "Фев", "Марта", "Апр", "Мая", "Июня", "Июля", "Авг", "Сент", "Окт", "Нояб", "Дек" ];

    return {
        dateLine: `${days[date.getDay()]} ${date.getDate()} ${month[date.getMonth()]}`,
        timeLine: `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
    };


}

export default getDate