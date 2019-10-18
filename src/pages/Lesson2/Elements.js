import styled, { css } from "styled-components";

export const Clock = styled.section`
  width: 80vmin;
  height: 80vmin;
  margin: auto;
  background-color: white;
  border: 3vmin solid #000;
  border-radius: 50%;
  margin-top: 3vmin;
  box-shadow: inset 40px 40px 90px rgba(0, 0, 0, 0.2),
    inset 10px 10px 30px rgba(0, 0, 0, 0.5), 20px 20px 30px rgba(0, 0, 0, 0.4),
    40px 40px 60px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
  box-sizing: content-box;

  &:before {
    content: "";
    width: 95%;
    height: 95%;
    border-radius: 50%;
    display: block;
    background: transparent;
    border: 2vmin solid white;
    box-sizing: content-box;
  }
  &:after {
    content: "";
    width: 105%;
    height: 105%;
    border-radius: 50%;
    display: block;
    background: transparent;
    position: absolute;
    top: -2.5%;
    left: -2.5%;
    box-shadow: -3px -3px 9px rgba(255, 255, 255, 0.8);
    box-sizing: content-box;
  }
`;
export const Hand = styled.div`
  width: 25vmin;
  height: 2vmin;
  background: #000;
  position: absolute;
  top: 40vmin;
  left: calc(50% - 3.5vmin);
  z-index: 2;
  transform-origin: 16%;
  transition: transform 0.9s;
  animation-timing-function: linear;

  &:after {
    content: "";
    background: #000;
    width: 5vmin;
    height: 5vmin;
    border-radius: 50%;
    z-index: 3;
    position: absolute;
    top: -1.5vmin;
    left: 1.5vmin;
  }
`;

export const HourHand = styled(Hand)`
  transform: ${({ move }) => `rotate(${move}deg)`};
  border-top-right-radius: 20%;
  border-bottom-right-radius: 20%;
  box-shadow: -10px 0px 10px rgba(0, 0, 0, 0.4);
`;

export const MinuteHand = styled(Hand)`
  width: 40vmin;
  height: 1vmin;
  top: 40.5vmin;
  transform: ${({ move }) => `rotate(${move}deg)`};
  transform-origin: 10%;
  border-top-right-radius: 30%;
  border-bottom-right-radius: 30%;
  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.4);

  &:before {
    content: "";
    width: 4.5vmin;
    height: 4.5vmin;
    border-radius: 50%;
    z-index: 99;
    position: absolute;
    top: -1.7vmin;
    left: 1.7vmin;
    box-shadow: -2px -2px 7px rgba(255, 255, 255, 0.6);
  }

  &:after {
    top: -2vmin;
  }
`;

export const SecondHand = styled(Hand)`
  width: 35vmin;
  height: 0.5vmin;
  top: 40.75vmin;
  transform: ${({ move }) => `rotate(${move}deg)`};
  transform-origin: 11.5%;
  box-shadow: -10px -10px 10px rgba(0, 0, 0, 0.4);

  &:after {
    top: -2.25vmin;
  }
`;

export const Hour = styled.div`
  height: 1vmin;
  width: 55vmin;
  background: transparent;
  border-left: 7vmin solid #000;
  border-right: 7vmin solid #000;

  top: 50%;
  left: 50%;
  position: absolute;
  box-sizing: content-box;

  transform: translate(-50%, -50%);
  transform: ${({ one }) => one && `rotate(120deg) translate(17vmin, 30vmin)`};
  transform: ${({ two }) => two && `rotate(150deg) translate(29vmin, 18vmin)`};
  transform: ${({ tree }) => tree && `rotate(90deg) translate(0, 34vmin)`};
  transform: ${({ four }) =>
    four && `rotate(210deg) translate(30vmin, -17vmin)`};
  transform: ${({ five }) =>
    five && `rotate(240deg) translate(17vmin, -30vmin)`};
  transform: ${({ five }) =>
    five && `rotate(240deg) translate(17vmin, -30vmin)`};
`;

export const Label = styled.label`
  position: absolute;
  top: 19vmin;
  left: 46%;
  font-size: 2.5vmin;
`;
