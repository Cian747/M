import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  const { type } = action;

  if (type === 'INPUT') {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }

  if (type === 'BLUR') {
    return {
      value: state.value,
      isTouched: true,
    };
  }

  if (type === 'RESET') {
    return {
      value: '',
      isTouched: false,
    };
  }

  return initialInputState;
};

const useInputValidate = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    const { value } = e.target;
    dispatch({ type: 'INPUT', value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInputValidate;
