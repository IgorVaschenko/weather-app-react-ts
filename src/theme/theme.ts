const font = 'Tahoma'

export default {
    font,
    boxShadows: [0, 1, 4, 5],
    width: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 260, 300, 365, 430, 600, 700, 800, 150, 20],
    height: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 150, 700],
    fontWeight: [500, 700, 800],
    spaces: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52],
    opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    fontSize: [0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3],
    flexBasis: [10, 12, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90],
    colors: {
        textColor: '#ffffff',
        textColorDark: '#000000',
        shadow: '#8E8E8E',
        runnerColor: '#ffffff',
        titleColorWarning: '#000000',
        descriptionColor: '#ffffff',
        descriptionColorWarning: '#000000',
        backgroundSuccess: '#5cb85c',
        backgroundError: '#B11C3E',
        backgroundInfo: '#0075B5',
        
        searchHover: '#242d49',
        search: '#788097',
        dayWeek: '#323233',
        titleColor: '#ffffff',
        backgroundDown: '#515456',
    },
}



// import { css } from 'styled-components'

// const font = 'Cursive'

// // Color palette
// const black = '#000000'
// const white = '#ffffff'
// const error = '#c86464'
// const primary = '#c06c84'
// const secondary = '#6c5b7b'
// const secondaryLight = '#6a6b7b'

// const boxShadows = [
//   'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
// ]

// const size = {
//   xs: 550,
//   small: 768,
//   med: 992,
//   large: 1200,
// }

// const above = Object.keys(size).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (min-width: ${size[label]}px) {
//       ${css(...args)}
//     }
//   `
//   return acc
// }, {})

// const below = Object.keys(size).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (max-width: ${size[label]}px) {
//       ${css(...args)}
//     }
//   `
//   return acc
// }, {})

// export default {
//   above,
//   below,
//   boxShadows,
//   font,
//   spaces: [0, 4, 8, 16, 32, 64, 128],
//   fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
//   colors: {
//     primary,
//     secondary,
//     secondaryLight,
//     black,
//     white,
//     error,
//   },
// }
