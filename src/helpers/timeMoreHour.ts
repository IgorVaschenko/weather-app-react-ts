import { HOURS_IN_SECONDS } from "constants/days"

export const timeMoreHour = (source: string, city: string) => Date.now() - (JSON.parse(localStorage.getItem(city.toLowerCase() + source) || '').saveTime) < HOURS_IN_SECONDS
