window.onload = () => {

// ripple effect on buttons
const openOrderButtons = document.getElementsByClassName('open-order-popup');
for (let button of openOrderButtons) {
    button.addEventListener('mouseenter', createRipple);
}
const makeOrderButton = document.getElementById('make-order');
makeOrderButton.addEventListener('mouseenter', createRippleInOrderPopup);

function createRipple(e) {
    const button = e.target;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.pageX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.pageY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
        ripple.remove();
    }
    button.appendChild(circle);
}

function createRippleInOrderPopup(e) {
    const button = e.target;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const orderContainer = document.getElementById('order-container');
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${- radius + e.screenX - button.offsetLeft - orderContainer.offsetLeft}px`;
    circle.style.top = `${- radius + e.screenY - button.offsetTop - orderContainer.offsetTop - button.offsetHeight}px`;
    circle.classList.add("ripple");
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
        ripple.remove();
    }
    button.appendChild(circle);
}

// open order pop-up
const orderPopup = document.getElementById('order');
for (let i = 0; i < openOrderButtons.length; i++) {
    openOrderButtons[i].addEventListener('click', openOrderPopup);
}

function openOrderPopup() {
    orderPopup.style.display = 'flex';
}

// close order pop-up
const closeSign = document.getElementById('order-close');
closeSign.addEventListener('click', closeOrderPopup);
orderPopup.onclick = (e) => {
    if (e.target.classList.contains('popup-fon')) {
        closeOrderPopup();
    }
};
window.onkeydown = (e) => {
    if (e.key==='Escape'||e.key==='Esc') {
        closeOrderPopup();
        orderSuccess.style.display = 'none';
    }
};

function closeOrderPopup() {
    orderPopup.style.display = 'none';
}

//social media flip
const smFlipBoxes = document.getElementsByClassName('sm-flip-box');
for (let smFlipBox of smFlipBoxes) {
    smFlipBox.onmouseenter = () => {
        smFlipBox.firstElementChild.classList.add('oneFlip');
    }
    smFlipBox.onmouseleave = () => {
        smFlipBox.firstElementChild.classList.remove('oneFlip');
    }
}

//our-horses slider
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        // spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        speed: 800,
        simulateTouch: false,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2);
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' <div class="sliders-numbers-line"></div> ' +
                    '<span class="' + totalClass + '"></span>';
            }
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
                slidesPerGroup: 1
            },
            660: {
                spaceBetween: 10,
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            768: {
                spaceBetween: 10,
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20
            },
            1110: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 30
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

//sport
const sportPricePrev = document.getElementById('sport-price-prev');
const sportPriceNext = document.getElementById('sport-price-next');
const sportPriceVariant = document.getElementById('sport-price-variant');
const oneMonthCost = document.getElementById('one-month-cost');
const sixMonthCost = document.getElementById('six-month-cost');
const twelveMonthCost = document.getElementById('twelve-month-cost');
const sportContentImgInner = document.getElementById('sport-content-img-inner');
let sportSlideIndex = 1;

sportPricePrev.addEventListener('click', changeSportSlide);
sportPriceNext.addEventListener('click', changeSportSlide);

function changeSportSlide() {
    if (sportSlideIndex == 1) {
        sportContentImgInner.style.transform = 'rotateY(180deg)';
        sportSlideIndex = 2;
        sportPriceVariant.innerText = "Детский";
        oneMonthCost.innerText = '80 руб.';
        sixMonthCost.innerText = '380 руб.';
        twelveMonthCost.innerText = '680 руб.';
    } else {
        sportContentImgInner.style.transform = 'rotateY(0)';
        sportSlideIndex = 1;
        sportPriceVariant.innerText = "Взрослый";
        oneMonthCost.innerText = '120 руб.';
        sixMonthCost.innerText = '580 руб.';
        twelveMonthCost.innerText = '820 руб.';
    }
}

//certificate
const certCost = document.getElementById('cert-cost');
const humansAmountMinus = document.getElementById('humans-amount-minus');
const humansAmountPlus = document.getElementById('humans-amount-plus');
const humansAmount = document.getElementById('humans-amount');
const hoursAmountMinus = document.getElementById('hours-amount-minus');
const hoursAmountPlus = document.getElementById('hours-amount-plus');
const hoursAmount = document.getElementById('hours-amount');
const photoYesNoPrev = document.getElementById('photo-yes-no-prev');
const photoYesNoNext = document.getElementById('photo-yes-no-next');
const photoYesNo = document.getElementById('photo-yes-no');

function calculateCertCost () {
    let oneHourCost = 45;
    let photoCost;
    if (photoYesNo.innerText === 'Да') photoCost = 40;
    else photoCost = 0;
    let currentCertCost = oneHourCost * parseInt(humansAmount.innerText) * parseInt(hoursAmount.innerText) + photoCost;
    certCost.innerText = currentCertCost.toString() + ' руб.';
}
humansAmountMinus.onclick = () => {
    let humansCurrentAmount = parseInt(humansAmount.innerText);
    if (humansCurrentAmount === 1) return;
    else {
        humansCurrentAmount-=1;
        humansAmount.innerText = humansCurrentAmount.toString();
        calculateCertCost();
    }
}
humansAmountPlus.onclick = () => {
    let humansCurrentAmount = parseInt(humansAmount.innerText);
    if (humansCurrentAmount === 8) return;
    else {
        humansCurrentAmount+=1;
        humansAmount.innerText = humansCurrentAmount.toString();
        calculateCertCost();
    }
}
hoursAmountMinus.onclick = () => {
    let hoursCurrentAmount = parseInt(hoursAmount.innerText);
    if (hoursCurrentAmount === 1) return;
    else {
        hoursCurrentAmount-=1;
        hoursAmount.innerText = hoursCurrentAmount.toString();
        calculateCertCost();
    }
}
hoursAmountPlus.onclick = () => {
    let hoursCurrentAmount = parseInt(hoursAmount.innerText);
    if (hoursCurrentAmount === 4) return;
    else {
        hoursCurrentAmount+=1;
        hoursAmount.innerText = hoursCurrentAmount.toString();
        calculateCertCost();
    }
}
photoYesNoPrev.onclick = () => {
    if (photoYesNo.innerText === 'Да') photoYesNo.innerText = 'Нет';
    else photoYesNo.innerText = 'Да';
    calculateCertCost();
}
photoYesNoNext.onclick = () => {
    if (photoYesNo.innerText === 'Да') photoYesNo.innerText = 'Нет';
    else photoYesNo.innerText = 'Да';
    calculateCertCost();
}

//our visitors slide
let ourVisitorsSlideIndex = 1;
const ourVisitorsPrev = document.getElementById('our-visitors-prev');
const ourVisitorsNext = document.getElementById('our-visitors-next');
const ourVisitorsSliderIndex = document.getElementById('our-visitors-slider-index');

ourVisitorsPrev.onclick = () => {
    plusSlides(-1);
}
ourVisitorsNext.onclick = () => {
    plusSlides(1);
}

function plusSlides(n) {
    showSlides(ourVisitorsSlideIndex += n);
}
function showSlides(n) {
    let slides = document.getElementsByClassName('our-visitors-slide');
    if (n > slides.length) ourVisitorsSlideIndex = 1;
    if (n < 1) ourVisitorsSlideIndex = slides.length;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[ourVisitorsSlideIndex-1].style.display = "block";
    ourVisitorsSliderIndex.innerText = '0' + ourVisitorsSlideIndex.toString();
}

// yandex-map
ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
            center: [54.06331615044659,27.78661793695076],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search',
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Конный клуб Horse House',
            balloonContent: 'Конный клуб Horse House<br><span class="green-text">Открыто</span>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/map_icon.png',
            // Размеры метки.
            iconImageSize: [38, 44],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),
        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: '',
            balloonContent: '',
            iconContent: ''
        },
            {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/map_icon.png',
            // Размеры метки.
            iconImageSize: [38, 44],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        }
        );
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});

//burger-menu
    const burgerMenuClose = document.getElementById('burger-menu-close');
    const burgerMenu = document.getElementById('burger-menu');
    const burger = document.getElementById('burger');
    const burgerMenuItems = document.getElementsByClassName('burger-menu-item');

    burger.addEventListener('click', openBurgerMenu);
    burgerMenuClose.addEventListener('click', closeBurgerMenu);
    for (let i=0; i < burgerMenuItems.length; i++) {
        burgerMenuItems[i].addEventListener('click', closeBurgerMenu);
    }

    function closeBurgerMenu() {
        burgerMenu.style.display = 'none';
    }
    function openBurgerMenu() {
        burgerMenu.style.display = 'block';
    }

    // make order
    const orderSuccess = document.getElementById('order-success');
    makeOrderButton.addEventListener('click', makeOrder);

    function makeOrder() {
        const inputs = document.getElementsByClassName('order-input');
        let noMistake = true;
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.borderColor = '#a2a2a2';
        }
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                inputs[i].style.borderColor = 'red';
                noMistake = false;
            }
        }
        if (noMistake) {
            const xhr = new XMLHttpRequest();
            let userInfo  = {
                name: inputs[0].value,
                tel: inputs[1].value
            };

            xhr.open('POST' , '../php/order.php');
            xhr.responseType = 'json';
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = () => {
                if (xhr.status >= 400) {
                    closeOrderPopup();
                    orderSuccess.style.display = 'flex';
                } else {
                    closeOrderPopup();
                    orderSuccess.style.display = 'flex';
                }
            }
            xhr.onerror = () => {
                closeOrderPopup();
                orderSuccess.style.display = 'flex';
            }
            xhr.send(JSON.stringify(userInfo));
        }
    }

    //close thank-you message
    const orderSuccessClose = document.getElementById('order-success-close');
    orderSuccessClose.onclick = () => {
        orderSuccess.style.display = 'none';
    }
    orderSuccess.onclick = (e) => {
        if (e.target.classList.contains('popup-fon')) {
            orderSuccess.style.display = 'none';
        }
    };


}
