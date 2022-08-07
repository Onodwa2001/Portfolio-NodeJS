let nav = document.getElementById('myNav');
let link = document.querySelectorAll('.link');
let carousel = document.getElementById('carousel');
let wrapper = document.getElementById('caroursel-wrapper');
let image = document.querySelector('.img');
let topics = document.getElementsByClassName('topic');
let paragraphs = document.getElementsByClassName('paragraph');
let headings = document.getElementsByClassName('heading-topic');
let technology = document.getElementsByClassName('technology');

window.onscroll = (e) => {
    if (window.scrollY >= 1) {
        nav.style.backgroundColor = 'rgb(77, 77, 240)';
        nav.style.boxShadow = '0 4px 4px 0 rgba(0, 0, 0, 0.2)';
        nav.style.color = 'white';
        nav.style.transition = '0.3s';
        document.querySelectorAll('.bar').forEach(el => {
            el.style.backgroundColor = 'white';
        });

        link.forEach(element => {
            element.style.color = 'white';
        });
    } else {
        link.forEach(element => {
            element.style.color = 'black';
        });
        nav.style.color = '';
        nav.style.backgroundColor = '';
        nav.style.boxShadow = '';
        document.querySelectorAll('.bar').forEach(el => {
            el.style.backgroundColor = 'rgb(77, 77, 240)';
        });
    }
}


Array.from(topics).forEach((element, index, arr) => {
    element.addEventListener('click', (e) => {
        element.style.transform = 'rotateY(180deg)';
        paragraphs[index].style.display = 'block';
        paragraphs[index].style.transform = 'rotateY(180deg)';
        headings[index].style.visibility = 'hidden';
    });
});

let value = document.getElementsByClassName('technology');

document.getElementById('show-skills').addEventListener('click', (e) => {
    // location.reload();
    location.href = '/#skills';

    Array.from(technology).forEach((element, index, arr) => {
        element.style.display = 'block';
        // value.innerText = value.style.width;
    });
});

document.getElementById('contact-button').addEventListener('click', (e) => {
    location.href = '/#contact';
});

let i = 0;

document.getElementById('hamburger').addEventListener('click', (e) => {
    i++;
    if (i % 2 != 0) {
        document.getElementById('links-ul').style.display = 'block';
    } else {
        document.getElementById('links-ul').style.display = 'none';
    }
});


// Projects Buttons

document.getElementById('oscar').addEventListener('click', (e) => {
    // location.href = '';
    window.open('https://github.com/Onodwa2001/Portfolio.git', '_newtab');
});

document.getElementById('cart').addEventListener('click', (e) => {
    // location.href = '';
    window.open('https://github.com/Viggo2001/online-shopping', '_newtab');
});

document.getElementById('lookUp').addEventListener('click', (e) => {
    // location.href = '';
    window.open('https://github.com/Onodwa2001/API-Tutorial', '_newtab');
});

document.getElementById('registration').addEventListener('click', (e) => {
    // location.href = '';
    window.open('https://github.com/Onodwa2001/User-Registration', '_newtab');
});

document.getElementById('chainStore').addEventListener('click', (e) => {
    // location.href = '';
    document.getElementById('chainStore').disabled = true;
});

