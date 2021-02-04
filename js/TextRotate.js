export default class TextRotate {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = Math.floor(Math.random() * toRotate.length);
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.isDeleting = false;
    this.tick();
  }

  tick() {
    const fullTxt = this.toRotate[this.loopNum % this.toRotate.length];

    this.txt = fullTxt.substring(
      0,
      this.txt.length + (this.isDeleting ? -1 : 1)
    );

    this.el.innerText = this.txt;

    const cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.innerText = "|";

    this.el.appendChild(cursor);

    let delta = 300;

    if (this.isDeleting) delta /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => this.tick(), delta);
  }
}
