export const actualDegrees = (degrees : string) => Number(degrees) > 0 ? `+${Math.round(Number(degrees))}` : `${Math.round(Number(degrees))}`
