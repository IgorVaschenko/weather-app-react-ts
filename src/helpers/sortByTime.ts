export const byTime = () => {
    return (a: any, b: any) =>  +a.time.replace(':','') > +b.time.replace(':','') ? 1 : -1;
}