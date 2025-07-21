import { unique } from "../../utils/dateHelpers";

interface ForecastDay {
  day: number;
  temp: (number | null)[];
  icon: (string | null)[];
  wind: (number | null)[];
  rain: (number | null)[];
  weatherDescription: (string | null)[];
}

export function FiveDaysForecastLogic(data: any): ForecastDay[] {
  const today = new Date().getDate();
  const allDays: number[] = [];
  const times = [0, 6, 12, 18];

  // Функция для создания пустого дня с null значениями
  const makeEmptyDay = (): ForecastDay => ({
    day: 0,
    temp: [null, null, null, null],
    icon: [null, null, null, null],
    wind: [null, null, null, null],
    rain: [null, null, null, null],
    weatherDescription: [null, null, null, null],
  });

  // Создаем массив из 5 пустых дней
  const daysCard: ForecastDay[] = [
    makeEmptyDay(),
    makeEmptyDay(),
    makeEmptyDay(),
    makeEmptyDay(),
    makeEmptyDay(),
  ];

  for (let i = 0; i < 40; i++) {
    const dt = data?.list[i].dt_txt;
    const requiredDate = Number(dt.slice(8, 10));
    const requiredTime = Number(dt.slice(11, 13));
    const timeIndex = times.indexOf(requiredTime);
    if (timeIndex === -1) continue;

    const dayOffset = requiredDate - today;
    if (dayOffset > 4) continue;

    const weatherDescriptionRaw = data.list[i].weather[0].description;
    const weatherDescription =
      weatherDescriptionRaw[0].toUpperCase() + weatherDescriptionRaw.slice(1);

    const forecastDay = daysCard[dayOffset];
    allDays.push(requiredDate);

    forecastDay.temp[timeIndex] = Math.round(data.list[i].main.temp);
    forecastDay.icon[timeIndex] = data.list[i].weather[0].icon;
    forecastDay.wind[timeIndex] = Number(data.list[i].wind.speed);
    forecastDay.rain[timeIndex] = Number(data.list[i].rain?.["3h"] ?? 0);
    forecastDay.weatherDescription[timeIndex] = weatherDescription;
  }

  const fiveDays = unique(allDays);
  fiveDays.forEach((day, i) => {
    if (daysCard[i]) {
      daysCard[i].day = day;
    }
  });

  return daysCard;
}
