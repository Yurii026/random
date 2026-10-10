document.addEventListener("DOMContentLoaded", () => {
    const statusBadge = document.getElementById("api-status");

    // Обращаемся к бэкенду. Порт 8000 берется из docker-compose конфигурации.
    // Запрос идет по относительному пути /api, который проксирует Nginx или напрямую.
    fetch('http://localhost:8000/health')
        .then(response => {
            if (!response.ok) throw new Error("Ошибка сервера");
            return response.json();
        })
        .then(data => {
            if (data.status === "ok") {
                statusBadge.className = "status-badge online";
                statusBadge.innerHTML = '<i class="fa-solid fa-circle-check"></i> Бэкенд на связи (API: OK)';
            } else {
                throw new Error();
            }
        })
        .catch(error => {
            statusBadge.className = "status-badge offline";
            statusBadge.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Нет связи с бэкендом (API: Offline)';
        });
});
