const reveals = document.querySelectorAll(".reveal");

function reveal() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

document.querySelector(".hero-content").classList.add("active");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  document.querySelector(".hero").style.backgroundPositionY = `${
    scrolled * 0.4
  }px`;
});

document
  .getElementById("form-contato")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    const feedback = document.querySelector(".feedback");

    if (nome && email && mensagem) {
      feedback.textContent = "Mensagem enviada com sucesso!";
      feedback.style.color = "green";
      this.reset();
    } else {
      feedback.textContent = "Por favor, preencha todos os campos.";
      feedback.style.color = "red";
    }
  });
