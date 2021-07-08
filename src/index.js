import _ from 'lodash';

 function component() {
   const element = document.createElement('div');


  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());

const content = document.getElementById('content'); // get html only element id='content'

const header = (() => {
  const headerDiv = document.createElement('div');
  content.appendChild(headerDiv); // append headerDiv to content

  const headerStart = document.createElement('div');
  headerStart.textContent = "Menu";
  headerDiv.appendChild(headerStart); // make headerStart

  const restaurantName = document.createElement('div');
  restaurantName.textContent = "Restaurant";
  headerDiv.appendChild(restaurantName); // make restaurantName

  const headerEnd = document.createElement('div'); // first make headerEnd
  const order = document.createElement('div');
  order.textContent = "Order Now";
  headerEnd.appendChild(order); // append order to headerEnd
  const reservation = document.createElement('div');
  reservation.textContent = "Reservation";
  headerEnd.appendChild(reservation); // append reservation to headerEnd
  headerDiv.appendChild(headerEnd); // then append headerEnd to headerDiv
})();
