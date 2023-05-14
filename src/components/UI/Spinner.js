import React from 'react';
import styled, { keyframes } from 'styled-components';
import { red } from '../../styles/utilities';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Spinnerimation = keyframes`
0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
}
100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
`;

const SpinnerStyled = styled.div`
  color: ${red};
  font-size: 4px;
  text-indent: -9999em;
  margin: 20px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  border-radius: 50%;

  &:after {
    border-radius: 50%;
    position: absolute;
    content: '';
    width: 5.2em;
    height: 10.2em;
    background: #fff;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 5.1em;
    -webkit-transform-origin: 0px 5.1em;
    transform-origin: 0px 5.1em;
    -webkit-animation: ${Spinnerimation} 1.8s infinite ease;
  }

  &:before {
    bordeder-radius: 50%;
    position: absolute;
    content: '';
    width: 5.2em;
    height: 10.2em;
    background: #fff;
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    -webkit-transform-origin: 5.2em 5.1em;
    transform-origin: 5.2em 5.1em;
    -webkit-animation: load2 1s infinite ease 1.5s;
    animation: ${Spinnerimation} 1s infinite ease 1.5s;
  }
`;

export const Spinner = () => {
  return (
    <Container>
      <SpinnerStyled></SpinnerStyled>
    </Container>
  );
};
