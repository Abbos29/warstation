// TABS

function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') {
    const headers = document.querySelectorAll(headerSelector);

    headers.forEach((header) => {
        const tabs = header.querySelectorAll(tabSelector);
        const contents = header.parentElement.querySelectorAll(contentSelector);

        function hideTabContent() {
            contents.forEach((item) => {
                item.style.display = 'none';
            });
            tabs.forEach((item) => {
                item.classList.remove(activeClass);
            });
        }

        function showTabContent(i = 0) {
            contents[i].style.display = display;
            tabs[i].classList.add(activeClass);
        }

        hideTabContent();
        showTabContent();

        header.addEventListener('click', (e) => {
            const target = e.target;

            if (
                target.classList.contains(tabSelector.replace(/\./, '')) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, ''))
            ) {
                tabs.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    });
}

// Пример использования:
tabs('.tabs__header', '.tabs__header-item', '.tabs__content-item', 'active');





// FORM TELEGRAM


document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal');
    const modalBox = document.querySelector('.modal__box');
    const modalOpenBtns = document.querySelectorAll('.modal__btn'); // Получение всех кнопок открытия
    const modalCloseBtn = document.querySelector('.modal__close');
    const form = document.getElementById('myForm');

    // Добавление обработчика ко всем кнопкам открытия
    modalOpenBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('modal__open');
        });
    });

    modalCloseBtn.addEventListener('click', () => {
        modal.classList.remove('modal__open');
    });

    modal.addEventListener('click', (event) => {
        if (!modalBox.contains(event.target)) {
            modal.classList.remove('modal__open');
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const phoneNumber = document.getElementById('phoneNumber').value;
        const chatId = '-4285699435';
        const botToken = '7266024320:AAFWtt01ghCyqXQhZLhZxrMda9562nhDIHE';
        
        const message = `Номер телефона: ${phoneNumber}`;
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                modalBox.innerHTML = '<h2>Успешно отправлено ✅</h2>';
                setTimeout(() => {
                    modal.classList.remove('modal__open');
                }, 4000); // Убираем класс modal__open через 1 секунду
            } else {
                alert('Ошибка отправки сообщения');
            }
        })
        .catch(error => {
            alert('Произошла ошибка: ' + error);
        });
    });
});





// MODAL






// BURGER

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.header__menu');
    const burger = document.querySelector('.header__burger');
    const menuLinks = menu.querySelectorAll('a');

    burger.addEventListener('click', () => {
        menu.classList.toggle('menu__open');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('menu__open');
        });
    });
});
