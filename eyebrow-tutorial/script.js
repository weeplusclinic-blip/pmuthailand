// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

// Portfolio data
const works = [
    {
        year: 2023,
        images: [
            'https://via.placeholder.com/300x200?text=ผลงาน+1+2023',
            'https://via.placeholder.com/300x200?text=ผลงาน+2+2023',
            'https://via.placeholder.com/300x200?text=ผลงาน+3+2023'
        ]
    },
    {
        year: 2024,
        images: [
            'https://via.placeholder.com/300x200?text=ผลงาน+1+2024',
            'https://via.placeholder.com/300x200?text=ผลงาน+2+2024'
        ]
    },
    {
        year: 2025,
        images: [
            'https://via.placeholder.com/300x200?text=ผลงาน+1+2025'
        ]
    }
];

// Load portfolio
function loadPortfolio() {
    const container = document.getElementById('portfolio-container');
    works.forEach(work => {
        const yearDiv = document.createElement('div');
        yearDiv.innerHTML = `<h3>ผลงานปี ${work.year}</h3>`;
        work.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `ผลงานปี ${work.year}`;
            yearDiv.appendChild(img);
        });
        container.appendChild(yearDiv);
    });
}

// Load portfolio on page load
document.addEventListener('DOMContentLoaded', loadPortfolio);