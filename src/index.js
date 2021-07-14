import './style.css';

const content = document.getElementById('content'); // get html only element id='content'

const backgroundImages = document.createElement('div')
backgroundImages.classList.add('background-image');
content.appendChild(backgroundImages);

const mainContainer = document.createElement('div');
mainContainer.classList.add("main-container");
backgroundImages.appendChild(mainContainer);


const header = (() => {
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header-container');
  mainContainer.appendChild(headerContainer);

  const bannerText = document.createElement('div');
  bannerText.classList.add('banner-text');
  headerContainer.appendChild(bannerText); // append bannerText to content

  const restaurantName = document.createElement('div');
  restaurantName.textContent = "Restaurant";
  restaurantName.classList.add('restaurant-name');
  bannerText.appendChild(restaurantName); // make restaurantName

  const headerEnd = document.createElement('div'); // first make headerEnd
  headerEnd.classList.add('header-end');
  const menu = document.createElement('button');
  menu.textContent = "Menu";
  menu.classList.add('spacing');
  headerEnd.appendChild(menu);
  const order = document.createElement('button');
  order.textContent = "Order Now";
  order.classList.add('spacing');
  headerEnd.appendChild(order); // append order to headerEnd
  const reservation = document.createElement('button');
  reservation.textContent = "Reservation";
  headerEnd.appendChild(reservation); // append reservation to headerEnd
  bannerText.appendChild(headerEnd); // then append headerEnd to bannerText
})();

const home = (() => {
  const homeText = document.createElement('div');
  homeText.classList.add('home-text-container');

  const address = document.createElement('div');
  address.textContent = "2445 Tanglewood Road — Tupelo, Mississippi — 662-819-2310";
  address.classList.add('address-text');
  homeText.appendChild(address);

  const homeButtons = document.createElement('div');
  homeButtons.classList.add('home-buttons');
  homeText.appendChild(homeButtons);

  const eat = document.createElement('button');
  eat.textContent = "Eat";
  eat.classList.add('eat-text');
  homeButtons.appendChild(eat);
  const visit = document.createElement('button');
  visit.textContent = "Visit";
  visit.classList.add('visit-text');
  homeButtons.appendChild(visit);

  const textStory = document.createElement('button');
  textStory.textContent = "Order";
  textStory.classList.add('order-text');
  homeButtons.appendChild(textStory);

  mainContainer.appendChild(homeText);
})();
