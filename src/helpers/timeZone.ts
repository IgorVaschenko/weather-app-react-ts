export const timeZone = (timezone: string) => {    
    const date = new Date()
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        timeZoneName: 'shortOffset',
    })
    return +formatter.format(date).slice(formatter.format(date).lastIndexOf('T') + 1)
}