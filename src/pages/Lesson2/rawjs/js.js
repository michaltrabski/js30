const roteteClockHand = (time, className, nr = 60) => {
  let x = (time / nr) * 360 - 90;
  document.querySelector(className).style.transform = `rotate(${x}deg)`;
};
const setWatch = () => {
  let d = new Date();
  let second = d.getSeconds();
  let minute = d.getMinutes();
  let hour = d.getHours();

  roteteClockHand(second, ".second-hand");
  roteteClockHand(minute, ".minute-hand");
  roteteClockHand(hour, ".hour-hand", 12);
};
setWatch();
setInterval(setWatch, 1000);
