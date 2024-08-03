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