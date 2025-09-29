  document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e){
        e.preventDefault();
        const alvo = document.querySelector(this.getAttribute('href'));
        if(alvo){
          window.scrollTo({ top: alvo.offsetTop - 60, behavior:"smooth" });
        }
      });
    });

    const form = document.querySelector('.contato form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert("Obrigado por entrar em contato! 🌸 Logo retornaremos.");
      form.reset();
    });