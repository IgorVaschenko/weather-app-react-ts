export function getDateComponents(timezone: number) {    
    const targetDate = new Date()
    const timestamp = targetDate.getTime() / 1000 + targetDate.getTimezoneOffset() * 60
    const date = new Date((timestamp + timezone) * 1000)

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        dayPerWeek: date.getDay(),
        dateNow: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
    }

}