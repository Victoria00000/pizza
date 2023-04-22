import React, { useReducer, useEffect } from 'react';
import { validate } from '../../utils';
import styled, { css } from 'styled-components';

const CHANGE = 'CHANGE';
const TOUCHED = 'TOUCHED';

const FormControl = styled.div`
  margin: 1rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  position: relative;
  background-color: #f4f4f4;
  border-radius: 15px;
  font-size: 16px;
  color: #7d7d7d;
  padding: 4px 0;
  min-width: 264px;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
  &:focus {
    background-color: #fff;
    outline-width: 0;
  }

  ${({ showError }) =>
    showError
      ? css`
          border-color: red;
          background: #ffd1d1;
        `
      : null}
`;

const StyledInput = styled.input`
  width: 100%;
  font: inherit;
  border: none;
  caret-color: #ff441f;
  padding: 1rem;
  border-radius: 15px;
  background-color: transparent;
  height: 25px;
  padding: 0.15rem 0.35rem;
  display: block;
  color: #7d7d7d;
  &:focus {
    outline: none;
    border-color: transparent;
    border-color: black;
  }
`;

const StyledLabel = styled.label`
  font-weight: bold;
  padding: 4px 0;
  margin: 0 16px;
  margin-bottom: 0.5rem;
  ${({ showError }) => (showError ? 'color:red' : null)}
`;

const inputReducer = (state, action) => {
  //
  switch (action.type) {
    //
    case CHANGE:
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };

    case TOUCHED:
      return {
        ...state,
        isTouched: true,
      };

    default:
      return state;
  }
};

const ErrorText = styled.p`
  color: red;
  padding: 4px 0;
  margin: 0 16px;
`;

export const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { isValid, value } = inputState;
  const { onInput, id } = props;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [onInput, id, value, isValid]);

  const changeHandler = (event) => {
    dispatch({
      type: CHANGE,
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchedHandler = () => {
    dispatch({
      type: TOUCHED,
    });
  };

  //console.log('TOUCHED', inputState.isTouched);
  //console.log('Valid', inputState.isValid);
  //console.log('FINAL', !inputState.isValid && inputState.isTouched);

  return (
    <FormControl>
      <StyledLabel
        htmlFor={props.id}
        showError={!inputState.isValid && inputState.isTouched}
      >
        {props.label}
      </StyledLabel>
      <InputContainer showError={!inputState.isValid && inputState.isTouched}>
        <StyledInput
          id={props.id}
          type={props.type}
          onChange={changeHandler}
          onBlur={touchedHandler}
          value={inputState.value}
          showError={!inputState.isValid && inputState.isTouched}
        />
      </InputContainer>

      {!inputState.isValid && inputState.isTouched && (
        <ErrorText>{props.errorText}</ErrorText>
      )}
    </FormControl>
  );
};
