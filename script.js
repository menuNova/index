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