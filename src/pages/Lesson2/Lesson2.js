import React, { useState, useEffect } from "react";
import "./Lesson2.css";
import styled, { css } from "styled-components";

const Hand = styled.div`
  transform: rotate(-90deg);
  transform-origin: 0%;
  transition-timing-function: ease;
  background-color: black;
  width: 60%;
  height: 6px;
  background-color: black;

  ${({ second }) =>
    second &&
    css`
      background-color: blue;
      width: 90%;
      height: 1px;
    `};

  ${({ minute }) =>
    minute &&
    css`
      width: 80%;
      height: 4px;
    `};
`;

const calculateRotation = (time, number = 60) =>
  `rotate(${(time / number) * 360 - 90}deg)`;

const Lesson2 = ({ lesson }) => {
  console.log("Lesson2");
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second!");
      let d = new Date();
      let s = d.getSeconds();
      let m = d.getMinutes();
      let h = d.getHours();
      setTime({ s, m, h });
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const { s, m, h } = time;

  return (
    <>
      {console.log("Lesson2 return ")}
      {`s=${s}m=${m}h=${h}`}
      <h2 className="text-center">lesson 2</h2>
      <div className="clock">
        <div className="hand-wrapper">
          <Hand second style={{ transform: calculateRotation(s) }} />
          <Hand minute style={{ transform: calculateRotation(m) }} />
          <Hand style={{ transform: calculateRotation(h, 12) }} />
        </div>
      </div>
    </>
  );
};

export default Lesson2;
