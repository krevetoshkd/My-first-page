
$(document).ready(() => {
    // Находим все элементы с классом .countup и выполняем для каждого из них анимацию
    $('.countup').each(function() { 
        const that = $(this);  // Сохраняем текущий элемент jQuery для дальнейшего использования
        const countTo = that.attr('data-end');  // Получаем конечное значение из атрибута data-end

        // Инициализируем объект с начальным числом countNum = 0 и запускаем анимацию до countTo
        $({countNum: 0}).animate(
            { countNum: countTo },  // Цель анимации - достичь значения countTo
            {
                duration: 8000,  // Длительность анимации - 8 секунд
                easing: 'linear',  // Анимация происходит с постоянной скоростью
                step: function() {
                    // Обновляем текст элемента на каждом шаге анимации с округлением вниз
                    that.text(Math.floor(this.countNum));
                },
                complete: function() {
                    // Устанавливаем финальное значение после завершения анимации
                    that.text(this.countNum);
                }
            }
        );
    });
});