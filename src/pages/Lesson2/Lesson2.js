import React, { useState, useEffect } from "react";
import {
  Clock,
  HourHand,
  MinuteHand,
  SecondHand,
  Hour,
  Label
} from "./Elements";

const Lesson2 = () => {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
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
    <Clock>
      <Label>SEIKO</Label>
      <HourHand move={calculateRotation(h, 12)} />
      <MinuteHand move={calculateRotation(m)} />
      <SecondHand move={calculateRotation(s)} />
      <Hour />
      <Hour one />
      <Hour two />
      <Hour tree />
      <Hour four />
      <Hour five />
    </Clock>
  );
};

const calculateRotation = (time, number = 60) => (time / number) * 360 - 90;

export default Lesson2;
