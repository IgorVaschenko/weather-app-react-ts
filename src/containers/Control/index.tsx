import { useSelector } from 'react-redux';

import { RootState } from 'store';
import SettingsInfo from 'components/SettingsInfo';
import Todo from 'containers/Todo';
import Loader from 'components/Loader';
import ErrorLoad from 'containers/ErrorLoad';

import { UpBlock } from 'containers/Control/components'

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