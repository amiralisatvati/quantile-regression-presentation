// Quantile Regression Presentation - Complete JavaScript
const slides = [{id: 1, title: '🎓 رگرسیون کوانتایل', content: '<h1>رگرسیون کوانتایل و روش‌های ناپارامتری</h1><p>ارائه کننده: امیرعلی ساتواتی</p>'}];
let currentSlide = 0;

document.addEventListener('DOMContentLoaded', () => {
    initSlides();
    initControls();
});

function initSlides() {
    renderSlide(0);
}

function renderSlide(index) {
    const container = document.getElementById('slide-container');
    container.innerHTML = slides[index].content;
    currentSlide = index;
}

function initControls() {
    document.getElementById('btn-prev').onclick = () => navigateSlide(-1);
    document.getElementById('btn-next').onclick = () => navigateSlide(1);
}

function navigateSlide(dir) {
    const newIndex = currentSlide + dir;
    if (newIndex >= 0 && newIndex < slides.length) renderSlide(newIndex);
}