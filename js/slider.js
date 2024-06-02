document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.main-banner__image');
    const pagination = document.querySelector('.main-banner__pagination-list');
    const paginationItems = pagination.querySelectorAll('.main-banner__pagination-item');
    let currentIndex = 0;
    let autoSlideInterval;

    if (!image || !pagination || paginationItems.length === 0) {
        console.error('Required elements not found on the page');
        return;
    }

    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 3000);
    };

    const changeSlide = (index) => {
        paginationItems.forEach((elem) => elem.classList.remove('main-banner__pagination-item--active'));
        paginationItems[index].classList.add('main-banner__pagination-item--active');
        image.src = `img/slider-${index}.jpg`;
        currentIndex = index;
    };

    pagination.addEventListener('click', (event) => {
        const item = event.target.closest('.main-banner__pagination-item');
        if (!item) return;
        const index = Array.from(paginationItems).indexOf(item);
        changeSlide(index);
        resetAutoSlide();
    });

    const autoSlide = () => {
        const nextIndex = (currentIndex + 1) % paginationItems.length;
        changeSlide(nextIndex);
    };

    autoSlideInterval = setInterval(autoSlide, 3000); // смена слайда каждые 3 секунды
});
