const section4 = document.querySelector('.section-4');
const section4Left1 = document.querySelector('.section-4-left-1');
const section4Left2 = document.querySelector('.section-4-left-2');
const section4Left3 = document.querySelector('.section-4-left-3');
const section4Left4 = document.querySelector('.section-4-left-4');
const section4RightImg = document.querySelector('.section-4-right-img');

const section4RightImage1 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png";
const section4RightImage2 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png";
const section4RightImage3 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png";
const section4RightImage4 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png";

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const headerOptions = document.querySelector('.section-1-header-options');

mobileMenuBtn.addEventListener('click', () => {
    headerOptions.style.display = headerOptions.style.display === 'flex' ? 'none' : 'flex';
});

// Responsive scroll effects
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const section4OffsetTop = section4.offsetTop;
    const section4Height = section4.clientHeight;
    const windowHeight = window.innerHeight;

    if (window.innerWidth >= 768) {
        if ((scrollPosition > section4OffsetTop) && (scrollPosition < section4Height + section4OffsetTop)) {
            if (scrollPosition > section4OffsetTop && scrollPosition < section4OffsetTop + 300) {
                section4Left1.style.opacity = 1;
                section4Left1.style.transition = "opacity 1s ease-in-out";
            } else if (scrollPosition > section4OffsetTop + windowHeight && scrollPosition < section4OffsetTop + windowHeight + 300) {
                section4Left2.style.opacity = 1;
                section4Left2.style.transition = "opacity 1s ease-in-out";
            } else if (scrollPosition > section4OffsetTop + windowHeight * 2 && scrollPosition < section4OffsetTop + windowHeight * 2 + 300) {
                section4Left3.style.opacity = 1;
                section4Left3.style.transition = "opacity 1s ease-in-out";
            } else if (scrollPosition > section4OffsetTop + windowHeight * 3 && scrollPosition < section4OffsetTop + windowHeight * 3 + 300) {
                section4Left4.style.opacity = 1;
                section4Left4.style.transition = "opacity 1s ease-in-out";
            } else {
                section4Left1.style.opacity = 0;
                section4Left2.style.opacity = 0;
                section4Left3.style.opacity = 0;
                section4Left4.style.opacity = 0;
            }

            if (scrollPosition > section4OffsetTop && scrollPosition < section4OffsetTop + windowHeight) {
                section4RightImg.src = section4RightImage1;
                section4RightImg.style.transition = "opacity 1s ease-in-out";
            } else if (scrollPosition > section4OffsetTop + windowHeight && scrollPosition < section4OffsetTop + windowHeight * 2) {
                section4RightImg.src = section4RightImage2;
                section4RightImg.style.transition = "opacity 1s ease-in-out";
            } else if (scrollPosition > section4OffsetTop + windowHeight * 2 && scrollPosition < section4OffsetTop + windowHeight * 3) {
                section4RightImg.src = section4RightImage3;
                section4RightImg.style.transition = "opacity 1s ease-in-out";
            } else if (scrollPosition > section4OffsetTop + windowHeight * 3 && scrollPosition < section4OffsetTop + windowHeight * 4) {
                section4RightImg.src = section4RightImage4;
                section4RightImg.style.transition = "opacity 1s ease-in-out";
            } else {
                section4RightImg.src = section4RightImage1;
            }
        }
    } else {
        // For mobile, show all content without scroll effects
        section4Left1.style.opacity = 1;
        section4Left2.style.opacity = 1;
        section4Left3.style.opacity = 1;
        section4Left4.style.opacity = 1;
        section4RightImg.src = section4RightImage1;
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        headerOptions.style.display = 'flex';
    } else {
        headerOptions.style.display = 'none';
    }
});

// Initialize based on current screen size
if (window.innerWidth < 768) {
    headerOptions.style.display = 'none';
    section4Left1.style.opacity = 1;
    section4Left2.style.opacity = 1;
    section4Left3.style.opacity = 1;
    section4Left4.style.opacity = 1;
    section4RightImg.src = section4RightImage1;
}