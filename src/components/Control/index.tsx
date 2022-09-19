import { useSelector } from 'react-redux';

import { RootState } from 'store';
import SettingsInfo from 'components/SettingsInfo';
import Todo from 'components/Todo';
import Loader from 'components/Loader';
import ErrorLoad from 'components/ErrorLoad';

import { UpBlock } from 'components/Control/components'

const Control = () => {
    const loading = useSelector((state: RootState) => state.weather.loading)
    const error = useSelector((state: RootState) => state.weather.error)
    return (
        <UpBlock>
            <SettingsInfo />
            {loading ? <Loader /> : error ? <ErrorLoad message={error} /> : <Todo />}
        </UpBlock>
    );
}

export default Control;