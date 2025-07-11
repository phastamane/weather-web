


async function getResponse(request: string) {
    const API_KEY: string = 'f4c00f312087165b908fcc539f5922d2'
    const url: string = `http://api.openweathermap.org/data/2.5/forecast?q=${request}&units=metric&lang=ru&appid=${API_KEY}`
    const response = await fetch(url)

    if(!response.ok){
        throw new Error(`Ошибка: ${response.status}`)
    }

    const data = await response.json()
    return data
}
export default getResponse
