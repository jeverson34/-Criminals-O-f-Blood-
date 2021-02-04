import TextRotate from "./TextRotate.js";
import * as header from "./header.js";

/* Initialize the page */

header.default();

const elements = document.getElementsByClassName("text-rotate");

for (let i = 0; i < elements.length; i++) {
  const toRotate = elements[i].getAttribute("data-rotate");
  const period = elements[i].getAttribute("data-period");
  if (toRotate && period)
    new TextRotate(elements[i], JSON.parse(toRotate), period);
}

const body = document.body;
const html = document.documentElement;

const height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);

document.getElementById("background").style.minHeight = height + "px";

window.addEventListener("resize", function () {
  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  document.getElementById("background").style.minHeight = height + "px";
});
