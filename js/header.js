export default function init() {
  const navToggle = document.getElementById("nav-toggle");

  navToggle.addEventListener("click", function () {
    this.classList[this.classList.contains("is-active") ? "remove" : "add"](
      "is-active"
    );

    this.parentNode.classList[
      this.parentNode.classList.contains("is-active") ? "remove" : "add"
    ]("is-active");
  });

  const antiOutline = document.querySelector(".anti-outline");

  antiOutline.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      this.classList[this.classList.contains("is-active") ? "remove" : "add"](
        "is-active"
      );

      this.children[0].classList[
        this.classList.contains("is-active") ? "remove" : "add"
      ]("is-active");
    }
  });

  const navLinks = document.querySelectorAll(".link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      navToggle.classList.remove("is-active");

      navToggle.parentNode.classList.remove("is-active");
    });
  });
}
