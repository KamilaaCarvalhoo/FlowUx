document.addEventListener('DOMContentLoaded', () => {
    // 1. Pega os elementos do DOM
    const searchInput = document.getElementById('busca');
    const menuItems = document.querySelectorAll('.menu-item-full');

    // 2. Adiciona um "ouvinte" de evento de digitação ao campo de busca
    searchInput.addEventListener('keyup', () => {
        // Pega o valor digitado e transforma em letras minúsculas (para a busca não ser sensível a maiúsculas/minúsculas)
        const searchTerm = searchInput.value.toLowerCase();

        // 3. Itera sobre cada item do menu
        menuItems.forEach(item => {
            // Pega o nome do item (texto dentro da tag .item-name) e converte para minúsculas
            const itemName = item.querySelector('.item-name').textContent.toLowerCase();

            // 4. Verifica se o nome do item inclui o termo de busca
            if (itemName.includes(searchTerm)) {
                // Se incluir, mostra o item
                item.style.display = 'flex'; // Usamos flex para garantir que o layout grid funcione
            } else {
                // Se não incluir, esconde o item
                item.style.display = 'none';
            }
        });
    });
});