document.addEventListener('DOMContentLoaded', () => {
    // Protege acesso direto
    if (!sessionStorage.getItem('access_granted')) {
      window.location.href = 'index.html';
      return;
    }
  
    // Navegação por subcategoria
    document.querySelectorAll('.categoria-card').forEach(card => {
      card.addEventListener('click', () => {
        const sub = card.getAttribute('data-sub');
        sessionStorage.setItem('selected_category', sub);
        window.location.href = `bebidas-${sub}.html`;
      });
    });
  });
  
  function goBackToMenu() {
    sessionStorage.removeItem('selected_category');
    window.location.href = 'menu.html';
  }
  