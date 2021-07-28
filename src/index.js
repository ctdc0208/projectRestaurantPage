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
  var i, tabcontent, tablinks, restaurantName, menu, order, visitHome, eatHome ,orderHome;

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
  restaurantName = document.getElementsByClassName("restaurant-name");
  for (i = 0; i < restaurantName.length; i++) {
    restaurantName[i].className = restaurantName[i].className.replace(" active", "");
  }
  menu = document.getElementsByClassName('spacing');
  for (i = 0; i < menu.length; i++) {
    menu[i].className = menu[i].className.replace(" active", "");
  }
  visitHome = document.getElementsByClassName('visit-text');
  for (i = 0; i < visitHome.length; i++) {
    visitHome[i].className = visitHome[i].className.replace(" active", "");
  }
  eatHome = document.getElementsByClassName('eat-text');
  for (i = 0; i < eatHome.length; i++) {
    eatHome[i].className = eatHome[i].className.replace(" active", "");
  }
  orderHome = document.getElementsByClassName('order-text');
  for (i = 0; i < orderHome.length; i++) {
    orderHome[i].className = orderHome[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
};

const headerBackgroundChange = () => {
  const changeHeaderBG = document.getElementById('myHeader');
  changeHeaderBG.classList.remove('header');
  changeHeaderBG.classList.add('header-change-background');
}
const headerBackgroundChangeRemover = () => {
  const changeHeaderBG = document.getElementById('myHeader');
  changeHeaderBG.classList.remove('header-change-background');
  changeHeaderBG.classList.add('header');
}

const header = (() => {
  const myHeader = document.createElement('div');
  myHeader.classList.add('header');
  myHeader.setAttribute('id', 'myHeader');
  mainContainer.appendChild(myHeader);

  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header-container');
  myHeader.appendChild(headerContainer);

  const headerTab = document.createElement('div');
  headerTab.classList.add('tab-home');
  headerContainer.appendChild(headerTab);

  const bannerText = document.createElement('div');
  bannerText.classList.add('banner-text');
  headerTab.appendChild(bannerText); // append bannerText to content

  const restaurantName = document.createElement('button');
  restaurantName.textContent = "Restaurant";
  restaurantName.classList.add('restaurant-name');
  restaurantName.addEventListener('click', function(){openTab(event, 'Home')});
  restaurantName.setAttribute("id", "defaultOpen");
  restaurantName.addEventListener("click", headerBackgroundChangeRemover);
  bannerText.appendChild(restaurantName); // make restaurantName

  const headerEnd = document.createElement('div'); // first make headerEnd
  headerEnd.classList.add('header-end');
  const menu = document.createElement('button');
  menu.textContent = "Menu";
  menu.classList.add('spacing');
  menu.addEventListener('click', function(){openTab(event, 'Menu')});
  menu.addEventListener("click", headerBackgroundChange);
  headerEnd.appendChild(menu);
  const order = document.createElement('button');
  order.textContent = "Order Now";
  order.classList.add('spacing');
  order.addEventListener('click', function(){openTab(event, 'Order')});
  order.addEventListener("click", headerBackgroundChange);
  headerEnd.appendChild(order); // append order to headerEnd
  const reservation = document.createElement('button');
  reservation.textContent = "Reservation";
  reservation.classList.add('spacing');
  reservation.addEventListener('click', function(){openTab(event, 'Reservation')});
  reservation.addEventListener("click", headerBackgroundChange);
  headerEnd.appendChild(reservation); // append reservation to headerEnd
  bannerText.appendChild(headerEnd); // then append headerEnd to bannerText
})();

const home = (() => {
  const homeTabContent = document.createElement('div');
  homeTabContent.setAttribute("id", "Home");
  homeTabContent.classList.add('tabcontent');

  const homeTextContainer = document.createElement('div'); // create home text container
  homeTextContainer.classList.add('home-text-container'); // add its classList
  homeTabContent.appendChild(homeTextContainer)

  const address = document.createElement('div'); // create address and contacts div
  address.textContent = "2445 Tanglewood Road — Tupelo, Mississippi — 662-819-2310"; // text content
  address.classList.add('address-text'); // classList
  homeTextContainer.appendChild(address); // append to the home text container

  const homeTab = document.createElement('div');
  homeTab.classList.add('tab');
  homeTextContainer.appendChild(homeTab);

  const homeButtons = document.createElement('div'); // create container for home buttons
  homeButtons.classList.add('home-buttons'); // add its classList
  homeTab.appendChild(homeButtons); // then append to home text container

  const visit = document.createElement('button'); // make button visit
  visit.textContent = "Visit";
  visit.classList.add('visit-text');
  visit.addEventListener('click', function(){openTab(event, 'Reservation')});
  visit.addEventListener("click", headerBackgroundChange);
  homeButtons.appendChild(visit); // append to home button
  const eat = document.createElement('button'); // make button eat
  eat.textContent = "Eat";
  eat.classList.add('eat-text');
  eat.addEventListener('click', function(){openTab(event, 'Menu')});
  eat.addEventListener("click", headerBackgroundChange);
  homeButtons.appendChild(eat); // append to home button
  const orderHome = document.createElement('button'); // make button story
  orderHome.textContent = "Order";
  orderHome.classList.add('order-text');
  orderHome.addEventListener('click', function(){openTab(event, 'Order')});
  orderHome.addEventListener("click", headerBackgroundChange);
  homeButtons.appendChild(orderHome); // append to home button

  mainContainer.appendChild(homeTabContent); // then append homeText container to the main container
})();

const menu = (() => {
  const menuTabContent = document.createElement('div');
  menuTabContent.setAttribute("id", "Menu");
  menuTabContent.classList.add('tabcontent');

  const menuTextContainer = document.createElement('div');
  menuTextContainer.classList.add('menu-text-container');
  menuTabContent.appendChild(menuTextContainer);

  const menuDish = document.createElement('div');
  menuDish.classList.add('menu-dish-text');
  menuDish.textContent = "MENU DISH";
  menuTextContainer.appendChild(menuDish);

  mainContainer.appendChild(menuTabContent);
})();

const orderNow = (() => {
  const orderNowTabContent = document.createElement('div');
  orderNowTabContent.setAttribute("id", "Order");
  orderNowTabContent.classList.add('tabcontent');

  const orderNowTextContainer = document.createElement('div');
  orderNowTextContainer.classList.add('order-now-text-container');
  orderNowTabContent.appendChild(orderNowTextContainer);

  const orderNowText = document.createElement('div');
  orderNowText.classList.add('order-now-text');
  orderNowText.textContent = "ORDER NOW";
  orderNowTextContainer.appendChild(orderNowText);

  mainContainer.appendChild(orderNowTabContent);
})();

const reservationTabContent = (() => {
  const reservationTabContent = document.createElement('div');
  reservationTabContent.setAttribute("id", "Reservation");
  reservationTabContent.classList.add('tabcontent');

  const reservationTextContainer = document.createElement('div');
  reservationTextContainer.classList.add('reservation-text-container');
  reservationTabContent.appendChild(reservationTextContainer);

  const reservationText = document.createElement('div');
  reservationText.classList.add('reservation-text');
  reservationText.textContent = "reservation";
  reservationTextContainer.appendChild(reservationText);

  mainContainer.appendChild(reservationTabContent);
})();

const displayController = (() => {

})();

const stickyHeader = (() =>{
  window.onscroll = function() {stickyFunction()};

    // Get the header
  var header = document.getElementById("myHeader");

    // Get the offset position of the navbar
  var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function stickyFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
       header.classList.remove("sticky");
      }
    }
})();

document.getElementById("defaultOpen").click();
