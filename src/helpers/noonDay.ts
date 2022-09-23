import { NUM_REQUEST } from "constants/days"

export const noonDay = (timeIndex: number, index: number) => {
    const noon = 40 - (40 - (8 - timeIndex)) + 5 + 8 * (index - 1)
    return noon < NUM_REQUEST ? noon : NUM_REQUEST - timeIndex - 4
}

