// Gör först att koden körs när DOM:en är klar
document.addEventListener('DOMContentLoaded', () => {
    // Hitta alla "Läs mer"-knappar
    document.querySelectorAll('.more-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const target = document.getElementById(targetId);
        if (!target) return;
  
        // Stäng alla andra panels och markera dem som dolda (ARIA)
        document.querySelectorAll('.more-info').forEach(panel => {
          if (panel.id !== targetId) {
            panel.classList.remove('active');
            panel.setAttribute('aria-hidden', 'true');
          }
        });
        document.querySelectorAll('.more-btn').forEach(b => {
          if (b.getAttribute('data-target') !== targetId) {
            b.setAttribute('aria-expanded', 'false');
          }
        });
  
        // Växla den valda panelen
        const isActive = target.classList.toggle('active');
        target.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        btn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  
        // Scrolla smidigt så användaren ser innehållet (endast vid öppning)
        if (isActive) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 160);
        }
      });
    });
  });