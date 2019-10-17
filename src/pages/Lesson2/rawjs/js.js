const calculation = (item, nr) => {
  return (item / nr) * 360 - 90;
};
const makeRotation = (second, className, nr = 60) => {
  let secondOnWatch = calculation(second, nr);
  let secHand = document.querySelector(className);
  secHand.style.transform = `rotate(${secondOnWatch}deg)`;
};
const setDate = () => {
  let d = new Date();
  let second = d.getSeconds();
  let minute = d.getMinutes();
  let hour = d.getHours();

  makeRotation(second, ".second-hand");
  makeRotation(minute, ".minute-hand");
  makeRotation(hour, ".hour-hand", 12);
};
setDate();
const interval = setInterval(setDate, 1000);
