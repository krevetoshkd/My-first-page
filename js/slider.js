document.addEventListener('DOMContentLoaded', () => {
    const slides = [
        'img/001.jpg',
        'img/002.jpg',
        'img/003.jpg',
        'img/004.jpg',
        'img/005.jpg',
    ];
    
    let currentSlide = 0;
    const sliderImage = document.querySelector('.slider-image');
    const leftArrow = document.querySelector('.slider-arrow.left');
    const rightArrow = document.querySelector('.slider-arrow.right');

    // Функция для обновления изображения
    const updateSlide = () => {
        sliderImage.style.backgroundImage = `url(${slides[currentSlide]})`;
    };

    // Событие на левую стрелку
    leftArrow.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        updateSlide();
    });

    // Событие на правую стрелку
    rightArrow.addEventListener('click', () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        updateSlide();
    });

    // Инициализация первого слайда
    updateSlide();
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

