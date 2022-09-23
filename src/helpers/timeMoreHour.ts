import { timeLimit } from "constants/days"

export const timeMoreHour = (source: string, city: string) => Date.now() - (JSON.parse(localStorage.getItem(city.toLowerCase() + source) || '').saveTime) < timeLimit
