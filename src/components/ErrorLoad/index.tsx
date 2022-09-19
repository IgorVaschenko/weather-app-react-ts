import { FC } from 'react'
import { useDispatch } from 'react-redux';

import errorIcon from 'assets/error.svg'
import { setError } from 'store/actions/weatherActions';
import { ErrorWrap, ErrorImg, ErrorText } from 'components/ErrorLoad/components';

interface ErrorProps {
  message: string;
}

const ErrorLoad: FC<ErrorProps> = ({ message }) => {

  const dispatch = useDispatch()
  const handlerError = () => dispatch(setError())

  return (
    <ErrorWrap onClick={handlerError}>
      <ErrorImg src={errorIcon} />
      <ErrorText>Something went wrong...</ErrorText>
      <ErrorText>{message}</ErrorText>
    </ErrorWrap>
  );
};

export default ErrorLoad;
