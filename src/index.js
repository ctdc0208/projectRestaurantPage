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
  homeText.classList.add('text-container');
  const textStory = document.createElement('div');
  textStory.textContent = "Some Story";
  textStory.classList.add('text-story');
  homeText.appendChild(textStory);
  mainContainer.appendChild(homeText);
})();
