
document.getElementById('about-btn').addEventListener('click', () => showPage('about'));
document.getElementById('education-btn').addEventListener('click', () => showPage('education'));
document.getElementById('experience-btn').addEventListener('click', () => showPage('experience'));
document.getElementById('skills-btn').addEventListener('click', () => showPage('skills'));
document.getElementById('contact-btn').addEventListener('click', () => showPage('contact'));


function toggleGoHomeButton(show) {
    const goHomeBtns = document.querySelectorAll('.go-home-btn');
    goHomeBtns.forEach(btn => {
        btn.style.display = show ? 'block' : 'none';
    });
}


function showPage(pageId) {
    document.getElementById(pageId).scrollIntoView({ behavior: 'smooth' });

    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    document.getElementById(pageId).style.display = 'block';

    toggleGoHomeButton(pageId !== 'home');
}


document.querySelectorAll('.go-home-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
        toggleGoHomeButton(false);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    showPage('home');
});


