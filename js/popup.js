$(document).ready(() => {
    // Обработчик клика на элемент с классом .portfolio-item
    $('.portfolio-item').on('click', (e) => {
        e.stopPropagation(); // Предотвращаем всплытие события
        createPopup(e.currentTarget); // Вызываем функцию для создания попапа
    });
});

function createPopup(item) {
    console.log(item); // Логируем элемент, на который кликнули

    const clicked = $(item); // Получаем выбранный элемент
    const src = clicked.data('src'); // Извлекаем значение атрибута data-src

    if (!src) {
        console.error('Атрибут data-src отсутствует у выбранного элемента'); // Лог ошибки, если src не найден
        return;
    }

    // Создаём контейнер для попапа
    const container = $('<div>', { 'class': 'popup-container' });

    // Создаём изображение для попапа с указанным src
    const img = $('<img>', { 'class': 'popup', 'src': src });

    // Добавляем изображение в контейнер
    container.append(img);

    // Добавляем контейнер на страницу
    $('body').append(container);

    // Навешиваем обработчик для закрытия попапа при клике на контейнер
    container.on('click', () => {
        container.remove(); // Удаляем контейнер при клике
    });
}
$(document).ready(() => {
    // Обработчик клика на кнопки переключения
    $('.control-item').on('click', (e) => {
        const clickedButton = $(e.currentTarget); // Получаем нажатую кнопку
        slideTestimonials(clickedButton); // Вызываем функцию перелистывания
    });
});

function slideTestimonials(clickedButton) {
    // Если элемент уже активен, то прерываем функцию
    if (clickedButton.hasClass('active')) {
        return; // Прерываем выполнение, если кнопка уже активна
    }

    // Получаем индекс кнопки
    const index = clickedButton.index(); 
    console.log(`Перелистывание на индекс: ${index}`);

    // Получаем контейнер с отзывами
    const testimonialsInner = $('.testimonials-inner');

    // Получаем ширину одной карточки, включая margin
    const cardWidth = $('.testimonials-card').outerWidth(true);

    // Вычисляем нужное количество сдвигов влево в зависимости от индекса
    const offset = -(cardWidth * index*2); // Отрицательное значение для сдвига

    // Анимация для перелистывания
    testimonialsInner.css('transform', `translateX(${offset}px)`);

    // Управление классом active на кнопках
    $('.control-item').removeClass('active'); // Убираем активный класс со всех кнопок
    clickedButton.addClass('active'); // Добавляем активный класс на текущую кнопку
}

