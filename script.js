 document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Variáveis para os elementos do WhatsApp
            const button = document.getElementById('whatsapp-button');
            const optionsMenu = document.getElementById('whatsapp-options');
            
            // 2. Inicializa os ícones do Lucide (após o DOM carregar)
            if (typeof lucide !== 'undefined' && lucide.createIcons) {
                lucide.createIcons();
            }

            // Apenas prossegue se o botão e o menu existirem
            if (button && optionsMenu) {
                
                // Função utilitária para fechar o menu e limpar as classes
                const closeMenuAndRemoveActiveClasses = () => {
                    optionsMenu.classList.remove('active');
                    button.classList.remove('active');
                };

                // 3. Listener para o clique no botão principal (abre/fecha)
                button.addEventListener('click', (event) => {
                    // Impedir que o clique feche o menu imediatamente (propagação)
                    event.stopPropagation(); 
                    optionsMenu.classList.toggle('active');
                    button.classList.toggle('active');
                });
                
                // 4. Listener para fechar o menu ao clicar fora dele
                document.addEventListener('click', (event) => {
                    // Verifica se o clique foi dentro do container principal (incluindo o botão)
                    const container = document.getElementById('whatsapp-container');
                    const isClickInsideContainer = container ? container.contains(event.target) : false;

                    // Se o clique foi fora do container E o menu estiver aberto, feche.
                    if (!isClickInsideContainer && optionsMenu.classList.contains('active')) {
                        closeMenuAndRemoveActiveClasses();
                    }
                });

                // 5. Listener para fechar o menu ao clicar em uma das opções
                document.querySelectorAll('#whatsapp-options a').forEach(link => {
                    link.addEventListener('click', closeMenuAndRemoveActiveClasses);
                });

            } else {
                console.error("ERRO JS: Elementos do WhatsApp ('whatsapp-button' ou 'whatsapp-options') não foram encontrados. Verifique as IDs no HTML.");
            }
        });

        // Nota: A função closeMenuAndRemoveActiveClasses() é chamada no HTML
        // Se você está usando onclick diretamente no HTML, essa função precisa 
        // estar disponível globalmente. Vamos colocá-la fora do DOMContentLoaded
        // para garantir o funcionamento do código no HTML.
        const closeMenuAndRemoveActiveClasses = () => {
            const button = document.getElementById('whatsapp-button');
            const optionsMenu = document.getElementById('whatsapp-options');
            if (optionsMenu && button) {
                optionsMenu.classList.remove('active');
                button.classList.remove('active');
            }
        };