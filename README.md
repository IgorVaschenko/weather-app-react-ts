# React Weather Application

## Builded with:

- [React](https://es.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [Axios](https://github.com/axios/axios)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [WeatherBit API](https://www.weatherbit.io/api)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Firebase](https://firebase.google.com/)

## Environment Variables:

To run the project locally you will need to set environment variables, which will be secrets ignored by git like API KEYS or related.

For this, create a `.env` file in the root of the project with the following: 

```
// OpenWeather API KEY:
REACT_APP_API_KEY_OPEN_WEATHER = YourApiKeyHere
REACT_APP_API_KEY_WEATHERBIT = YourApiKeyHere
```

Just replace `YourApiKeyHere` with __your real API KEY__ .

This file is already set to be ignored by git in `.gitignore`, and will be also the place to store and hide any new secret that should not be commited. Just remember to add any new secret here in the above `.env` file reference to keep the list of required enviroment variables up to date.

## Deployment:

The project is hosted in firebase, for deploy you will have to install [Firebase Cli](https://github.com/firebase/firebase-tools).

With the [Firebase Cli](https://github.com/firebase/firebase-tools) installed, and the correct access to the project in the Firebase Console, you just will need to run `yarn build` to generate a production build folder, and after that, `firebase deploy` to deploy the build.

The project will be deployed in [https://weather-app-react-ts-borland.web.app/](https://weather-app-react-ts-borland.web.app/).