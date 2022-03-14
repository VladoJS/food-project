window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContect = document.querySelectorAll('.tabcontect'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContect.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i) {
        tabsContect[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent(0);
});