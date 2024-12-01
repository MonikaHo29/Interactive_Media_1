document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.grid .title, .grid .title2, .grid .title3');

    function checkVisibility() {
        titles.forEach(title => {
            const rect = title.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                title.classList.add('visible');
            } else {
                title.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});