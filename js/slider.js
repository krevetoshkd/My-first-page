document.addEventListener('DOMContentLoaded', function () {
    // Находим элемент слайдера
    let carouselElement = document.querySelector('#carouselExampleIndicators');
    
    // Проверяем, существует ли элемент
    if (carouselElement) {
        // Инициализация слайдера с помощью Bootstrap
        let carousel = new bootstrap.Carousel(carouselElement, {
            interval: 3000, // Интервал между слайдами (3 секунды)
            ride: 'carousel' // Автоматический запуск слайдера при загрузке страницы
        });

        // Обработчики событий для кнопок
        let nextButton = document.querySelector('.carousel-control-next');
        let prevButton = document.querySelector('.carousel-control-prev');

        if (nextButton) {
            nextButton.addEventListener('click', function () {
                carousel.next(); // Переход к следующему слайду
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', function () {
                carousel.prev(); // Переход к предыдущему слайду
            });
        }
    } else {
        console.error('Элемент слайдера не найден.');
    }
});
