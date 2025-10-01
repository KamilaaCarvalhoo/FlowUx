
function abrirModal(title, desc, img){
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;

    const modalImg = document.getElementById('modalImg');
    modalImg.style.opacity = '0';
    setTimeout(() => {
        modalImg.src = img;
        modalImg.style.opacity = '1';
    }, 200);

    document.getElementById('modal').classList.add('active');
}
function fecharModal(){
    document.getElementById('modal').classList.remove('active');
}

document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target.id === 'modal') {
        fecharModal();
    }
});

window.abrirModal = abrirModal;
window.fecharModal = fecharModal;



const counters = document.querySelectorAll('.contador');
const speed = 200;
const contSection = document.getElementById('contadores');
let counted = false;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace(/[^0-9.]/g, ''); 
            
            const increment = target / speed; 
            
            if (count < target) {
                let newCount = Math.ceil(count + increment);
                
                if (target > 1000) {
                    counter.innerText = newCount.toLocaleString('pt-BR');
                } else {
                    counter.innerText = newCount;
                }
                
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target.toLocaleString('pt-BR'); 
                if (target === 99) counter.innerText += '%';
            }
        }
        updateCount();
    });
    counted = true;
};


window.addEventListener('scroll', () => {
    if (!contSection) return;

    const trigger = contSection.offsetTop - window.innerHeight + 200;
    
    if (!counted && window.scrollY > trigger) {
        startCounters();
    }
});

if(contSection) {
    const rect = contSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        startCounters();
    }
}



const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideIndex = 0;
let slideInterval;

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        dots[index].classList.remove('active');
    });

    slideIndex = (n + slides.length) % slides.length;
    
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function startSlider() {
    showSlide(0);
    slideInterval = setInterval(nextSlide, 4000); 
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlide(n);
    slideInterval = setInterval(nextSlide, 4000);
}

window.currentSlide = currentSlide; 

if (slides.length > 0) {
    startSlider();
}


const heroSection = document.getElementById('hero-section');
const heroContent = document.getElementById('hero-content');

if (heroSection && heroContent) {
    heroSection.addEventListener('mousemove', (e) => {
       
        const rect = heroSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        
        const rotateY = x * 8; 
        const rotateX = y * -8; 

        heroContent.style.transform = `
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg)
            scale(1)
        `;
    });

   
    heroSection.addEventListener('mouseleave', () => {
        heroContent.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
}



const canvas = document.getElementById('bgCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let w, h;

    function resizeCanvas() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = [];
    const maxParticles = 100;
    const particleColor = 'rgba(0, 188, 212, 0.7)'; 

    for (let i = 0; i < maxParticles; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 2 + 1,
            dx: (Math.random() - 0.5) * 0.8,
            dy: (Math.random() - 0.5) * 0.8
        });
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);

        particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;
            if (p.x < 0 || p.x > w) p.dx *= -1;
            if (p.y < 0 || p.y > h) p.dy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = particleColor;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }
    animate();
}