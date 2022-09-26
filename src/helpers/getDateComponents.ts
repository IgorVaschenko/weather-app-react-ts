import { MS_IN_SECOND, SECOND_IN_MINUTE } from "constants/days"

export function getDateComponents(timezone: number) {
    const targetDate = new Date()
    const timestamp = targetDate.getTime() / MS_IN_SECOND + targetDate.getTimezoneOffset() * SECOND_IN_MINUTE
    const date = new Date((timestamp + timezone) * MS_IN_SECOND)

    return {
        date,
        hours: date.getHours(),
        minutes: date.getMinutes(),
        dayPerWeek: date.getDay(),
        dateNow: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        seconds: date.getFullYear(),
    }

}