document.querySelectorAll('button').forEach((el) => {
    if (el.id.startsWith('~goTo[')) {
        el.onclick = function () {
            setTimeout(() => {
                const elem = document.querySelector(el.id.slice(6, el.id.length - 1));
                elem.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        };
    };
});


const data = [
    ['Несколько языков', 1, 1, 1],
    ['Изменение меню в таблице', 1, 1, 1],
    ['Отправка заказов в телеграм', 1, 1, 1],
    ['Улучшенный дизайн', 0, 1, 1],
    ['Скидки на продукты', 0, 1, 1],
    ['Акции. Пример: Обеденное меню', 0, 0, 1],
    ['Статистика заказов', 0, 0, 1],
];

const cardLists = document.querySelectorAll('.card__list');

data.forEach(row => {
    const serviceName = row[0];
    cardLists.forEach((list, index) => {
        const flag = row[index + 1];
        const li = document.createElement('li');
        li.classList.add('card__function');
        const icon = document.createElement('i');

        icon.classList.add('fas');
        icon.classList.add(flag === 1 ? 'fa-check' : 'fa-xmark');

        const p = document.createElement('p');
        p.textContent = serviceName;

        li.appendChild(icon);
        li.appendChild(p);

        list.appendChild(li);
    });
});

