import { ABSOLUTE_NULL_CELSIUS, ABSOLUTE_NULL_FAHRENHEIT, MAX_WORLD_TEMPERATURE, ROLLING_COEF } from "constants/days"

export const fahrenheit = (temp: number) => Math.round(temp * ROLLING_COEF - ABSOLUTE_NULL_FAHRENHEIT) > 0 ? `+${Math.round(temp * ROLLING_COEF - ABSOLUTE_NULL_FAHRENHEIT)}` : `${Math.round(temp * ROLLING_COEF - ABSOLUTE_NULL_FAHRENHEIT)}`

export const celsius = (temp: number) => Math.round(temp - ABSOLUTE_NULL_CELSIUS) > 0 ? `+${Math.round(temp - ABSOLUTE_NULL_CELSIUS)}` : `${Math.round(temp - ABSOLUTE_NULL_CELSIUS)}`

export const degreeMeasure = (degrees: boolean, temp: number = 0) => {
    temp = temp < MAX_WORLD_TEMPERATURE ? temp + ABSOLUTE_NULL_CELSIUS : temp
    return degrees ? celsius(temp) : fahrenheit(temp)
}



