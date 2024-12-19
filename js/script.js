document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const topNav = document.getElementById('myTopnav');

    // Проверка на наличие элементов перед назначением обработчика события
    if (hamburger && topNav) {
        hamburger.onclick = function() {
            topNav.classList.toggle('responsive'); // Используем classList.toggle для переключения класса
        };
    }

    const menuList = document.querySelectorAll('.menu-element');
    menuList.forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем переход по ссылке
            const elementLink = element.dataset.link;
            const targetElement = document.getElementById(elementLink);

            // Проверка на наличие целевого элемента перед прокруткой
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Плавная прокрутка
            }
        });
    });
});