document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        // Cerrar menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuCards = document.querySelectorAll('.menu-card');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Quitar clase active a todos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-filter');
            menuCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (category === 'all' || category === cardCategory) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});
function agregarPedido(nombrePlato, precio) {
    const toast = document.getElementById('toast');
    toast.textContent = `✓ ${nombrePlato} (${precio}) agregado a tu pedido`;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
