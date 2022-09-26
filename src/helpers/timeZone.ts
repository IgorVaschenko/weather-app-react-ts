export const timeZone = (timezone: string = 'Europe/Minsk') => {    
    if(timezone==='uninhabited') return 0
    
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        timeZoneName: 'short',
    })
    return Number(formatter.format().slice(formatter.format().lastIndexOf('T') + 1))
}