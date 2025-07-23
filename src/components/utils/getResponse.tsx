


async function getResponse(request: string, api: string) {
    const WEATHER_API_KEY: string = 'f4c00f312087165b908fcc539f5922d2'
    const MAP_API_KEY: string = 'bf0e34a7-6408-4b5e-b674-db1fae99f13b'
    const url: string = `https://api.openweathermap.org/data/2.5/forecast?q=${request}&units=metric&lang=ru&appid=${WEATHER_API_KEY}`
    const mapUrl: string = `https://geocode-maps.yandex.ru/v1/?apikey=${MAP_API_KEY}&geocode=${request}&format=json`

    if (api === 'weather'){
        const response = await fetch(url)

        if(!response.ok){
            throw new Error(`Ошибка: ${response.status}`)
        }

        const data = await response.json()
        return data
    }
    else{

        const response = await fetch(mapUrl)

        if(!response.ok){
            throw new Error(`Ошибка: ${response.status}`)
        }

        const data = await response.json()
        const coordStr = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
        let coord: [] = coordStr.split(' ');
        return coord.map(Number)
    }
    
}
export default getResponse
