const pages = document.querySelectorAll('.page');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentPage = 0;

// عرض الصفحة الحالية
function showPage(index) {
    pages.forEach((page, i) => {
        if (i === index) {
            page.style.transform = 'rotateY(0deg)';
            page.style.zIndex = 5;
            page.classList.remove('hidden');
        } else {
            page.classList.add('hidden');
        }
    });
}

// التنقل بالسهم الأيمن
rightArrow.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
});

// التنقل بالسهم الأيسر
leftArrow.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

// عرض الصفحة الأولى عند التحميل
showPage(currentPage);
