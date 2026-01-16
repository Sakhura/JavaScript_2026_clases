// ========================================
// CONFIGURACIÓN INICIAL
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🐱 Gatitos Blog cargado exitosamente!');
    initializeApp();
});

// ========================================
// INICIALIZACIÓN DE LA APLICACIÓN
// ========================================
function initializeApp() {
    setupNavbar();
    setupBackToTop();
    setupFilters();
    setupForms();
    setupAnimations();
    setupSmoothScroll();
}

// ========================================
// NAVBAR - Cambio de color al hacer scroll
// ========================================
function setupNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(99, 102, 241, 0.95)';
        } else {
            navbar.style.backgroundColor = '';
        }
    });

    // Actualizar nav-link activo según la sección
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// BOTÓN BACK TO TOP
// ========================================
function setupBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// SISTEMA DE FILTROS
// ========================================
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogItems = document.querySelectorAll('.blog-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Actualizar botón activo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrar artículos con animación
            filterItems(blogItems, filterValue);
        });
    });
}

function filterItems(items, filterValue) {
    items.forEach(item => {
        const category = item.getAttribute('data-category');
        
        // Fade out
        item.classList.add('fade-out');
        
        setTimeout(() => {
            if (filterValue === 'all' || category === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.classList.remove('fade-out');
                    item.classList.add('fade-in');
                }, 50);
            } else {
                item.style.display = 'none';
            }
        }, 300);
    });
    
    // Mostrar contador de resultados
    showFilterResults(items, filterValue);
}

function showFilterResults(items, filterValue) {
    let count = 0;
    items.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
            count++;
        }
    });
    
    showToast(`${count} artículo${count !== 1 ? 's' : ''} encontrado${count !== 1 ? 's' : ''}`);
}

// ========================================
// FORMULARIOS
// ========================================
function setupForms() {
    // Formulario de Newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simular envío
            showToast('¡Gracias por suscribirte! 🎉', 'success');
            this.reset();
            
            console.log('Newsletter suscrito:', email);
        });
    }
    
    // Formulario de Contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Validación básica
            if (nombre && email && mensaje) {
                // Simular envío
                showToast('¡Mensaje enviado correctamente! 📧', 'success');
                this.reset();
                
                console.log('Contacto enviado:', { nombre, email, mensaje });
            }
        });
    }
}

// ========================================
// ANIMACIONES AL HACER SCROLL
// ========================================
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Observar elementos con animaciones
    const animatedElements = document.querySelectorAll('.blog-card, .category-card');
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar enlaces sin destino válido
            if (href === '#' || !href) return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// FUNCIÓN AUXILIAR: SCROLL A ARTÍCULOS
// ========================================
function scrollToArticles() {
    const articulosSection = document.getElementById('articulos');
    if (articulosSection) {
        articulosSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ========================================
// SISTEMA DE NOTIFICACIONES (TOAST)
// ========================================
function showToast(message, type = 'info') {
    // Crear el toast
    const toast = document.createElement('div');
    toast.className = `toast-notification alert alert-${type === 'success' ? 'success' : 'info'} alert-dismissible fade show`;
    toast.setAttribute('role', 'alert');
    
    const icon = type === 'success' ? '✓' : 'ℹ️';
    
    toast.innerHTML = `
        <strong>${icon}</strong> ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    document.body.appendChild(toast);
    
    // Auto-eliminar después de 3 segundos
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ========================================
// LIKE BUTTON (Interactividad extra)
// ========================================
function setupLikes() {
    const likeButtons = document.querySelectorAll('.card-footer i.bi-heart');
    
    likeButtons.forEach(btn => {
        btn.style.cursor = 'pointer';
        
        btn.addEventListener('click', function() {
            // Toggle like
            if (this.classList.contains('bi-heart')) {
                this.classList.remove('bi-heart');
                this.classList.add('bi-heart-fill');
                this.style.color = '#ef4444';
                
                // Incrementar contador
                const likeText = this.nextSibling;
                const currentLikes = parseInt(likeText.textContent.trim());
                likeText.textContent = ` ${currentLikes + 1} likes`;
                
                // Animación
                this.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            } else {
                this.classList.remove('bi-heart-fill');
                this.classList.add('bi-heart');
                this.style.color = '';
                
                // Decrementar contador
                const likeText = this.nextSibling;
                const currentLikes = parseInt(likeText.textContent.trim());
                likeText.textContent = ` ${currentLikes - 1} likes`;
            }
        });
    });
}

// Inicializar likes después de cargar el DOM
document.addEventListener('DOMContentLoaded', setupLikes);

// ========================================
// BÚSQUEDA EN TIEMPO REAL (Funcionalidad adicional)
// ========================================
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const blogItems = document.querySelectorAll('.blog-item');
            
            blogItems.forEach(item => {
                const title = item.querySelector('.card-title').textContent.toLowerCase();
                const description = item.querySelector('.card-text').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    item.style.display = 'block';
                    item.classList.remove('fade-out');
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
}

// ========================================
// MODO OSCURO (Bonus)
// ========================================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// Cargar preferencia de modo oscuro
window.addEventListener('DOMContentLoaded', function() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
});

// ========================================
// UTILIDADES
// ========================================

// Formatear fecha
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('es-ES', options);
}

// Generar ID único
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Debounce para optimizar eventos
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========================================
// ESTADÍSTICAS (Console log para debugging)
// ========================================
console.log(`
╔═══════════════════════════════════════╗
║     🐱 GATITOS BLOG - STATS 🐱       ║
╠═══════════════════════════════════════╣
║ Total de artículos: ${document.querySelectorAll('.blog-item').length}           ║
║ Categorías: ${document.querySelectorAll('.filter-btn').length - 1}                      ║
║ Bootstrap: 5.3.3                     ║
║ Estado: ✓ Funcionando                ║
╚═══════════════════════════════════════╝
`);