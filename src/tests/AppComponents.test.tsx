import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux';

import store from 'store';
import DateTime from 'components/DateTime';
import Info from 'components/Info';
import InsideBlock from 'components/InsideBlock';
import Loader from 'components/Loader';
import SettingsInfo from 'components/SettingsInfo';
import Toggle from 'components/Toggle';
import WeekWeather from 'components/WeekWeather';
import Control from 'containers/Control';
import Date from 'containers/Date';
import ErrorLoad from 'containers/ErrorLoad';
import OtherDay from 'containers/OtherDay';
import Region from 'containers/Region';
import Search from 'containers/Search/Search';
import SignIn from 'containers/SignIn';
import Time from 'containers/Time';
import Today from 'containers/Today';
import Todo from 'containers/Todo';
import Toggles from 'containers/Toggles';
import App from 'App'


describe('App Component', () => {
    it('Should render DateTime', () => {
        const component = render(
            <Provider store={store}>
                <DateTime />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render Info', () => {
        const component = render(
            <Provider store={store}>
                <Info />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render InsideBlock', () => {
        const component = render(
            <Provider store={store}>
                <InsideBlock />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render Loader', () => {
        const component = render(
            <Provider store={store}>
                <Loader />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render SettingsInfo', () => {
        const component = render(
            <Provider store={store}>
                <SettingsInfo />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render Toggle', () => {
        const component = render(
            <Provider store={store}>
                <Toggle
                    nameLeft={'url1'}
                    nameRight={'url2'}
                    pointer={true}
                    onClick={() => { }}
                />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render WeekWeather', () => {
        const component = render(
            <Provider store={store}>
                <WeekWeather />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render WeekWeather', () => {
        const component = render(
            <Provider store={store}>
                <Control />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render Date', () => {
        const component = render(
            <Provider store={store}>
                <Date />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render ErrorLoad', () => {
        const component = render(
            <Provider store={store}>
                <ErrorLoad message='error message' />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render OtherDay', () => {
        const component = render(
            <Provider store={store}>
                <OtherDay index={1} key={1} />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render Region', () => {
        const component = render(
            <Provider store={store}>
                <Region />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render Search', () => {
        const component = render(
            <Provider store={store}>
                <Search />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render SignIn', () => {
        const component = render(
            <Provider store={store}>
                <SignIn />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render Time', () => {
        const component = render(
            <Provider store={store}>
                <Time />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render Today', () => {
        const component = render(
            <Provider store={store}>
                <Today />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render Todo', () => {
        const component = render(
            <Provider store={store}>
                <Todo />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render Toggles', () => {
        const component = render(
            <Provider store={store}>
                <Toggles />
            </Provider>
        )
        expect(component.container).toBeInTheDocument()
    })
    it('Should render correctly', () => {
        const app = render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        expect(app.container).toMatchSnapshot()
    })
})