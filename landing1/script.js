document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offset = targetElement.offsetTop - 60;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  });
});

const form = document.querySelector(".contato form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Obrigado por entrar em contato! 🌸 Logo retornaremos.");
  form.reset();
});
