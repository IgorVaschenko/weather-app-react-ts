export const fahrenheit = (temp: number) => Math.round(temp * 1.8 - 459.67) > 0 ? `+${Math.round(temp * 1.8 - 459.67)}` : `${Math.round(temp * 1.8 - 459.67)}`

export const celsius = (temp: number) => Math.round(temp - 273.15) > 0 ? `+${Math.round(temp - 273.15)}` : `${Math.round(temp - 273.15)}`

export const degreeMeasure = (degrees: boolean, temp: number = 273) => {
    temp = temp < 200 ? temp + 273.15 : temp
    return degrees ? celsius(temp) : fahrenheit(temp)
}


