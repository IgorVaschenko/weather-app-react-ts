import { NUM_REQUEST, OPENWEATHER_REQUESTS_PER_DAY, REQUEST_IN_3_PM } from "constants/days"

export const noonDay = (timeIndex: number, index: number) => {
    const noon = NUM_REQUEST - 1 - (NUM_REQUEST - 1 - (OPENWEATHER_REQUESTS_PER_DAY - timeIndex)) + REQUEST_IN_3_PM + OPENWEATHER_REQUESTS_PER_DAY * (index - 1)
    return noon < NUM_REQUEST ? noon : NUM_REQUEST - timeIndex - REQUEST_IN_3_PM - 1
}

