/* ===================================================
 Mobile Menu
 ================================================== */

const header = document.querySelector('#header');

$('#menu-toggle').click(() => {
    header.classList.toggle('active');
});

$('#header-list a').click(() => {
    header.classList.remove('active');
});



/* ===================================================
 Scroll Effects
 ================================================== */

let prev = 0;

$(window).on('load scroll', function () {
    const scrolled = $(this).scrollTop();

    // Hero Curtain Effect
    if ($(this).scrollTop() <= $('#hero').outerHeight()) {
        $('#curtain').css(
            'transform',
            'translate3d(0, ' + -(scrolled * 0.5) + 'px, 0)' // Parallax (50% scroll rate)
        );
    }

    // Header Show & Hide Effect
    $('#header').toggleClass('hidden', scrolled > prev);
    prev = scrolled;
});



/* ===================================================
 GSAP
 ================================================== */

$(window).on("load", function() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CustomEase);

    CustomEase.create('header', '0.666, 0, 0.237, 1');
    CustomEase.create('name', '0.4, 0, 0.2, 1');
    CustomEase.create('section', '0.645, 0.045, 0.355,1');

    gsap.from('[data-gsap=header]', {
        duration: 0.85,
        ease: 'header',
        y: -200
    });

    gsap.from('[data-gsap=first-name]', {
        display: 'block',
        duration: 0.9,
        ease: 'name',
        y: '100vh'
    });

    gsap.from('[data-gsap=last-name]', {
        delay: 0.1,
        display: 'block',
        duration: 0.9,
        ease: 'name',
        y: '200vh'
    });

    gsap.from('[data-gsap=about]', {
        autoAlpha: 0,
        duration: 1,
        ease: 'section',
        scrollTrigger: '[data-gsap=about]',
        y: 30
    });

    const projects = gsap.utils.toArray('[data-gsap=project]');

    projects.forEach(project => {
        gsap.from(project, {
            autoAlpha: 0,
            duration: 1,
            ease: 'section',            
            scrollTrigger: project,
            y: 30
        });
    });

    gsap.from('[data-gsap=contact]', {
        autoAlpha: 0,
        duration: 1,
        ease: 'section',
        y: 30,
        scrollTrigger: '[data-gsap=contact]'
    });
});
