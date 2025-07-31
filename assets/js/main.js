document.addEventListener('DOMContentLoaded', () => {
    // Impede acesso direto se não passou pela tela inicial
    if (!sessionStorage.getItem('access_granted')) {
      window.location.href = 'index.html';
      return;
    }
  
    // Botões de categoria (Bebidas, Tira-gosto)
    const categoriaBtns = document.querySelectorAll('.categoria-btn');
  
    // Botão de voltar
    const btnVoltar = document.getElementById('btnVoltar');
  
    // Adiciona evento para cada botão de categoria
    categoriaBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const destino = btn.dataset.target;
        // Redireciona para a página correspondente
        window.location.href = destino;
      });
    });
  
    // Evento para o botão "Voltar"
    if (btnVoltar) {
      btnVoltar.addEventListener('click', () => {
        sessionStorage.removeItem('access_granted');
        window.location.href = 'index.html';
      });
    }
  });
  