document.addEventListener('DOMContentLoaded', () => {
    
 
    AOS.init({
        duration: 1000,
        once: true      
    });


    
    const form = document.getElementById('formulario-contato');
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const nomeInput = form.querySelector('input[name="nome"]');
            const emailInput = form.querySelector('input[name="email"]');
            
            const nome = nomeInput.value.trim();
            const email = emailInput.value.trim();

            if (nome === "" || email === "") {
                alert("Por favor, preencha seu nome e e-mail para receber as novidades.");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Por favor, insira um e-mail válido.");
                return;
            }

            alert(`🥳 Parabéns, ${nome}! Você será a primeira a saber dos lançamentos das Joias!`);
            form.reset();
        });
    }



    const carousel = document.querySelector('.carousel-slides');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    if (carousel && prevButton && nextButton) {
        
        const itemWidth = carousel.clientWidth; 
        
        nextButton.addEventListener('click', () => {
            carousel.scrollBy({ left: itemWidth, behavior: 'smooth' });
            
            setTimeout(() => {
                 if (carousel.scrollLeft + itemWidth >= carousel.scrollWidth) {
                    carousel.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }, 500); 
        });

        prevButton.addEventListener('click', () => {
            carousel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
            
            setTimeout(() => {
                if (carousel.scrollLeft <= 0) {
                    carousel.scrollTo({ left: carousel.scrollWidth - itemWidth, behavior: 'smooth' });
                }
            }, 500);
        });


    }
    
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (!this.classList.contains('whatsapp-flutuante')) {
                 e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});