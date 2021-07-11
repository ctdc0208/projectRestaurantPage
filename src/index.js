import './style.css';

const content = document.getElementById('content'); // get html only element id='content'

const header = (() => {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');
  content.appendChild(headerDiv); // append headerDiv to content

  const headerStart = document.createElement('div');
  headerStart.textContent = "Menu";
  headerStart.classList.add('header-start');
  headerDiv.appendChild(headerStart); // make headerStart

  const restaurantName = document.createElement('div');
  restaurantName.textContent = "Restaurant";
  restaurantName.classList.add('restaurant-name');
  headerDiv.appendChild(restaurantName); // make restaurantName

  const headerEnd = document.createElement('div'); // first make headerEnd
  headerEnd.classList.add('header-end');
  const order = document.createElement('div');
  order.textContent = "Order Now";
  order.classList.add('spacing');
  headerEnd.appendChild(order); // append order to headerEnd
  const reservation = document.createElement('div');
  reservation.textContent = "Reservation";
  headerEnd.appendChild(reservation); // append reservation to headerEnd
  headerDiv.appendChild(headerEnd); // then append headerEnd to headerDiv
})();

const home = (() => {
  const homeImage = document.createElement('div');
  homeImage.classList.add('background');
  content.appendChild(homeImage);

  const homeText = document.createElement('div');
  homeText.classList.add('text-container');
  const textStory = document.createElement('div');
  textStory.textContent = "Some Story";
  textStory.classList.add('text-story');
  homeText.appendChild(textStory);
  content.appendChild(homeText);
})();
