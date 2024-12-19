// Пример данных в формате JSON (в реальном случае, данные можно получать с сервера через AJAX)
const jsonData = `[
    {
        "image": "img/004.jpg",
        "title": "Exploring the Hidden Depths",
        "text": "The world is full of hidden wonders that we often overlook. Many people find joy in uncovering these mysteries. It's an adventure that never ends.",
        "date": "2 дня назад",
        "tags": ["adventure", "mystery", "exploration"]
    },
    {
        "image": "img/003.jpg",
        "title": "The Beauty of Nature",
        "text": "Nature has a way of calming the mind and soothing the soul. The peaceful environment offers respite from the chaos of everyday life. It's a treasure worth cherishing.",
        "date": "3 дня назад",
        "tags": ["nature", "peace", "serenity"]
    },
    {
        "image": "img/006.jpg",
        "title": "Technology in the Modern Age",
        "text": "In the modern world, technology is constantly evolving. It shapes how we communicate, learn, and work. Understanding its impact is essential for future success.",
        "date": "4 дня назад",
        "tags": ["technology", "innovation", "future"]
    }
]`;

// Шаблон для карточки
const cardHtml = `
<section class="blog-card">
    <div class="blog-header">
        <div class="blog-cover"></div>
    </div>
    <div class="blog-body">
        <div class="blog-title"><h2></h2></div>
        <div class="blog-text"><p></p></div>
        <div class="blog-tags"><ul></ul></div>
        <div class="blog-footer">
            <div class="blog-published-date"></div>
        </div>
    </div>
</section>`;

$(document).ready(() => {
    // Преобразуем строку JSON в объект JavaScript
    const data = JSON.parse(jsonData);

    // Отрисовываем карточки при загрузке страницы
    drawCards(data);

    // Инициализируем обработчики кликов для поиска
    $('.search-do').on('click', () => {
        const search = $('.search-text').val().toLowerCase().trim();
        if (search) {
            filter(search, data);  // Фильтруем записи по запросу
        } else {
            drawCards(data);  // Если поле поиска очищено, показываем все записи
        }
    });

    // Инициализируем обработчики кликов по тегам
    initTagsHandler(data);
});

// Функция для отрисовки карточек
function drawCards(data) {
    // Очищаем контейнер с записями блога
    $('.blog-container').html('');

    // Перебираем все записи и создаем карточки
    data.forEach((item) => {
        let card = $(cardHtml);  // Создаем копию шаблона карточки
        card.find('.blog-cover').css('background-image', `url(${item.image})`); // Устанавливаем изображение
        card.find('.blog-title h2').text(item.title);  // Заголовок
        card.find('.blog-text p').text(item.text);  // Текст
        card.find('.blog-published-date').text(item.date);  // Дата

        // Создаем список тегов для каждой карточки
        let tagsHtml = '';
        item.tags.forEach((tag) => {
            tagsHtml += `<li><a href="#">${tag}</a></li>`;  // Тег как ссылка
        });
        card.find('.blog-tags ul').html(tagsHtml);

        // Добавляем карточку в контейнер
        $('.blog-container').append(card);
    });
}

// Функция фильтрации данных по поисковому запросу
function filter(value, data) {
    const filteredData = data.filter((item) => {
        const regex = new RegExp(value, 'i');  // Регулярное выражение для поиска с игнорированием регистра
        let matchCount = 0;

        // Проверка, содержится ли значение в различных полях
        matchCount += regex.test(item.title);  // Проверяем заголовок
        matchCount += regex.test(item.text);   // Проверяем текст
        matchCount += regex.test(item.date);   // Проверяем дату

        // Проверка на совпадение в тегах (точное совпадение)
        item.tags.forEach((tag) => {
            matchCount += regex.test(tag);  // Проверяем каждый тег
        });

        return matchCount > 0;  // Если хотя бы одно совпадение, то добавляем элемент
    });

    // Если поиск не дал результатов, показываем все карточки
    if (filteredData.length > 0) {
        drawCards(filteredData);  // Отображаем отфильтрованные карточки
    } else {
        drawCards(data);  // Если нет совпадений, показываем все карточки
    }

    // Инициализируем обработчик кликов для тегов после фильтрации
    initTagsHandler(filteredData);
}

// Функция для добавления обработчиков к тегам
function initTagsHandler(data) {
    // Обработчик кликов по тегам
    $('.blog-tags a').off().on('click', (e) => {
        e.preventDefault();
        const tag = $(e.currentTarget).text().toLowerCase();  // Получаем текст тега
        filterTags(tag, data);  // Фильтруем по выбранному тегу
    });
}

// Функция фильтрации по тегу
function filterTags(tag, data) {
    const filteredData = data.filter((item) => {
        return item.tags.some((itemTag) => itemTag.toLowerCase() === tag);
    });

    drawCards(filteredData);  // Отображаем только те карточки, которые соответствуют тегу
}
