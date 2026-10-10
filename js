document.addEventListener("DOMContentLoaded", () => {
    const btnCreate = document.getElementById("btn-create-ticket");
    const ticketCountEl = document.getElementById("ticket-count");

    // Инициализируем счетчик сохраненных заявок в браузере
    if (!localStorage.getItem("local_ticket_count")) {
        localStorage.setItem("local_ticket_count", "0");
    }

    // Отображаем текущее число заявок при загрузке страницы
    ticketCountEl.textContent = localStorage.getItem("local_ticket_count");

    // Обработчик клика по кнопке
    btnCreate.addEventListener("click", () => {
        // Читаем текущее значение, увеличиваем на 1 и сохраняем обратно
        let currentCount = parseInt(localStorage.getItem("local_ticket_count") || "0", 10);
        currentCount += 1;
        
        localStorage.setItem("local_ticket_count", currentCount.toString());
        
        // Обновляем цифру на экране
        ticketCountEl.textContent = currentCount;
        
        // Выводим уведомление для подтверждения работы MVP
        alert(`Успешно! ООО «РТК ИТ» зарегистрировало обращение под номером: #SD-${1000 + currentCount}`);
    });
});
