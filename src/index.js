import './style.css';

const content = document.getElementById('content'); // get html only element id='content'

const backgroundImages = document.createElement('div')
backgroundImages.classList.add('background-image');
content.appendChild(backgroundImages);

const mainContainer = document.createElement('div');
mainContainer.classList.add("main-container");
backgroundImages.appendChild(mainContainer);

const openTab = (evt, tabName) => {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

const header = (() => {
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header-container');
  mainContainer.appendChild(headerContainer);

  const bannerText = document.createElement('div');
  bannerText.classList.add('banner-text');
  headerContainer.appendChild(bannerText); // append bannerText to content

  const restaurantName = document.createElement('button');
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
  const homeText = document.createElement('div'); // create home text container
  homeText.classList.add('home-text-container'); // add its classList

  const address = document.createElement('div'); // create address and contacts div
  address.textContent = "2445 Tanglewood Road — Tupelo, Mississippi — 662-819-2310"; // text content
  address.classList.add('address-text'); // classList
  homeText.appendChild(address); // append to the home text container

  const homeButtons = document.createElement('div'); // create container for home buttons
  homeButtons.classList.add('home-buttons'); // add its classList
  homeText.appendChild(homeButtons); // then append to home text container

  const visit = document.createElement('button'); // make button visit
  visit.textContent = "Visit";
  visit.classList.add('visit-text');
  homeButtons.appendChild(visit); // append to home button
  const eat = document.createElement('button'); // make button eat
  eat.textContent = "Eat";
  eat.classList.add('eat-text');
  homeButtons.appendChild(eat); // append to home button
  const textStory = document.createElement('button'); // make button story
  textStory.textContent = "Order";
  textStory.classList.add('order-text');
  homeButtons.appendChild(textStory); // append to home button

  mainContainer.appendChild(homeText); // then appenf homeText container to the main container
})();

const displayController = (() => {

})();
