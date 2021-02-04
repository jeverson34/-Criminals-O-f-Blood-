const showcase = document.querySelector(".showcase");
const parallax = document.querySelector(".parallax");

VanillaTilt.init(showcase, {
  max: 20,
  speed: 400,
});

new Rellax(".parallax");

const faqBars = document.querySelectorAll(".faq-bar");

faqBars.forEach((bar) => {
  bar.addEventListener("click", function () {
    this.nextElementSibling.style.maxHeight =
      this.nextElementSibling.style.maxHeight ===
      this.nextElementSibling.scrollHeight + "px"
        ? "0"
        : this.nextElementSibling.scrollHeight + "px";

    this.children[0].classList.toggle("active");
  });

  bar.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      this.nextElementSibling.style.maxHeight =
        this.nextElementSibling.style.maxHeight ===
        this.nextElementSibling.scrollHeight + "px"
          ? "0"
          : this.nextElementSibling.scrollHeight + "px";

      this.children[0].classList.toggle("active");
    }
  });
});

window.addEventListener("resize", function () {
  faqBars.forEach((bar) => {
    if (bar.children[0].classList.contains("active"))
      bar.nextElementSibling.style.maxHeight =
        bar.nextElementSibling.scrollHeight + "px";
  });
});
