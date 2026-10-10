document.addEventListener("DOMContentLoaded", () => {
    const storageStatus = document.getElementById("storage-status");
    const btnCreate = document.getElementById("btn-create-ticket");
    const ticketCountEl = document.getElementById("ticket-count");

    // Имитация задержки "загрузки" системы для красивого скриншота
    setTimeout(() => {
        try {
            // Проверяем, работает ли локальное хранилище в браузеры
            localStorage.setItem("rtk_sd_test", "proven");
            localStorage.removeItem("rtk_sd_test");

            // Инициализируем счетчик заявок, если его нет
            if (!localStorage.getItem("ticket_count")) {
                localStorage.setItem("ticket_count", "0");
            }

            // Обновляем интерфейс успехом
            storageStatus.className = "status-badge online";
            storageStatus.innerHTML = '<i class="fa-solid fa-database"></i> Локальная БД активна (Client-Side Storage: Ready)';
            ticketCountEl.textContent = localStorage.getItem("ticket_count");

        } catch (e) {
            storageStatus.className = "status-badge offline";
            storageStatus.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Ошибка локального хранилища';
        }
    }, 800);

    // Логика нажатия на кнопку "Создать заявку"
    btnCreate.addEventListener("click", () => {
        let currentCount = parseInt(localStorage.getItem("ticket_count") || "0", 10);
        currentCount += 1;
        localStorage.setItem("ticket_count", currentCount.toString());
        ticketCountEl.textContent = currentCount;
        
        alert(`Заявка успешно зарегистрирована в локальной БД под номером #SD-${1000 + currentCount}`);
    });
});
