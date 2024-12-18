const pages = document.querySelectorAll('.page');

pages.forEach((page, index) => {
    page.addEventListener('click', () => {
        page.style.transform = `rotateY(-180deg)`;
        page.style.zIndex = 5 + index;
    });
});
