document.addEventListener('DOMContentLoaded', () => {
    // Массив с путями к изображениям
    const slides = [
        'img/001.jpg',
        'img/002.jpg',
        'img/003.jpg',
        'img/004.jpg',
        'img/005.jpg',
    ];

    
    
    $(document).ready(() => {
        let currentSlide = 0; // Текущий слайд
        let isBusy = false; // Флаг занятости (анимации)
        const slidesCount = slides.length - 1; // Количество слайдов (индекс последнего)
    
        $('.slider-arrow').on('click', (e) => {
            const that = $(e.currentTarget);
    
            if (!isBusy) {
                if (that.hasClass('right')) {
                    currentSlide += 1;
                    if (currentSlide > slidesCount) currentSlide = 0;
                } else {
                    currentSlide -= 1;
                    if (currentSlide < 0) currentSlide = slidesCount;
                }
    
                isBusy = true;
                $('.slider-image').animate({'opacity': 0}, 350, () => {
                    $('.slider-image').css('background-image', 'url(' + slides[currentSlide] + ')');
                });
                $('.slider-image').animate({'opacity': 1}, 350, () => isBusy = false);
            }
        });
    });
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
});