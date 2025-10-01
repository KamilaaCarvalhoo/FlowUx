
const btn = document.getElementById('btn');

function Clicar(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value.trim();
    const number = document.getElementById('number').value.trim();

    
    if (nome === '') {
        alert('Por favor, preencha seu nome completo.');
        return;
    }
    if (number === '') {
        alert('Por favor, preencha seu telefone ou WhatsApp.');
        return;
    }

  
    window.location.href = 'inform.html';
}

btn.addEventListener('click', Clicar);
