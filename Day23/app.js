//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items

const avatar = document.querySelector(".avatar img");
const info1 = document.querySelector(".info1");
const info2 = document.querySelector(".info2");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  avatar.style.transform = "translateZ(140px) rotateZ(-5deg)";  
  info1.style.transform = "translateZ(95px)";
  info2.style.transform = "translateZ(95px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  avatar.style.transition = "all 0.45 ease";
  info1.style.transition = "all 1s ease";
  info2.style.transition = "all 1.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  avatar.style.transform = "translateZ(0px) rotateZ(0deg)";
  info1.style.transform = "translateZ(0px)";
  info2.style.transform = "translateZ(0px)";
});
