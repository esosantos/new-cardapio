document.addEventListener('DOMContentLoaded', () => {
    // Verifica se tem permissão
    if (!sessionStorage.getItem('access_granted')) {
      window.location.href = 'index.html';
      return;
    }
  
    const categoriaBtns = document.querySelectorAll('.categoria-btn');
    const btnVoltar = document.getElementById('btnVoltar');
  
    categoriaBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const destino = btn.dataset.target;
        if (destino) {
          window.location.href = destino;
        }
      });
    });
  
    if (btnVoltar) {
      btnVoltar.addEventListener('click', () => {
        sessionStorage.removeItem('access_granted');
        window.location.href = 'index.html';
      });
    }
  });
  