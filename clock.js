function updateClock() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = (hours < 10) ? `0${hours}` : hours;
  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;
  document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
}

function countDown() {
  const countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = `${days}hari ${hours}jam ${minutes}menit ${seconds}detik`;
}

function countUp() {
  const startDate = new Date("May 31, 2022 21:00:00").getTime();
  const now = new Date().getTime();
  const distance = now - startDate;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countup").innerHTML = `${days}hari ${hours}jam ${minutes}menit ${seconds}detik`;
}

setInterval(updateClock, 1000);
setInterval(countDown, 1000);
setInterval(countUp, 1000);
