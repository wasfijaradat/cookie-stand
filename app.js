'use strict';
let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


let table = document.getElementById('sales');

let total_stores = [];

//constructor for the cookie stores
function Cookie_store (name ,customer_min , customer_max , average_cookies) {
  this.name = name ,
  this.customer_min = customer_min;
  this.customer_max = customer_max;
  this.average_cookies = average_cookies;
  this.cookie_sales_per_hour = [];
  this.cookie_sales_per_day = 0;
  total_stores.push(this);
}
//creates the numbers of cookies sold for every hour
Cookie_store.prototype.create_cookie_sales_per_hour = function () {
  for (let i = 0 ; i < hours.length ; i++) {
    let sales = customer_per_hour (this.customer_min , this.customer_max ) * Math.floor(this.average_cookies);
    this.cookie_sales_per_hour.push(sales);
  }

};
//creates the total of cookies sold in a day
Cookie_store.prototype.daily_total = function () {
  for (let i = 0; i < this.cookie_sales_per_hour.length ; i++) {
    this.cookie_sales_per_day= this.cookie_sales_per_day + this.cookie_sales_per_hour[i];
  }
};


let seattle = new Cookie_store ('Seattle',23,65,6.3);
let tokyo = new Cookie_store ('Tokyo',3,24,1.2);
let dubai = new Cookie_store ('Dubai',11,38,3.7);
let paris = new Cookie_store ('Paris',20,38,2.3);
let lima = new Cookie_store ('Lima',2,16,4.6);


// creates header
function header () {
  let row = document.createElement('tr');
  let locations = document.createElement('th');
  locations.textContent = ('Locations');
  row.appendChild(locations);
  //creates hours headers
  for ( let i = 0 ; i < hours.length ; i++) {
    let time = document.createElement('th');
    time.textContent = hours[i];
    row.appendChild(time);
  }
  let total = document.createElement('th');
  total.textContent = ('Daily Totals');
  row.appendChild(total);

  table.appendChild(row);

}
header();

// creates the sales body
function render (store) {
  let row = document.createElement('tr');
  let name = document.createElement('th');
  name.textContent = store.name;
  row.appendChild(name);
  // creates row for the cookie sales
  for ( let i = 0; i < hours.length ; i++) {
    let sale = document.createElement('th');
    sale.textContent = store.cookie_sales_per_hour[i];
    row.appendChild(sale);
    console.log(sale);
  }
  //creates the total
  let total = document.createElement('th');
  total.textContent = store.cookie_sales_per_day;
  row.appendChild(total);

  table.appendChild(row);
}

//generates random customer
function customer_per_hour (min , max ) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


for (let i = 0; i < total_stores.length; i++) {
  total_stores[i].create_cookie_sales_per_hour();
  total_stores[i].daily_total();
  render(total_stores[i]);

}

// creates new instances for cookiestand
function works (event) {
  event.preventDefault();
  let name = event.target.name.value;
  let min = parseInt(event.target.min.value);
  let max = parseInt(event.target.max.value);
  let avg = parseInt(event.target.average.value);
  let newstore = new Cookie_store(name,min,max,avg);

  newstore.create_cookie_sales_per_hour();
  newstore.daily_total();

  
  let el = document.getElementById('sales');
  // el.removeChild(el.childNodes[el.childNodes.length] );
  el.removeChild(el.childNodes[el.childElementCount] );
  render(newstore);
  footer();
  form.reset();
}

let form = document.getElementById('form');
form.addEventListener('submit', works);

let tm = [];

function footer () {
  /// creates the total name
  let row = document.createElement('tr');
  row.id = 'total-row';

  let final = document.createElement('th');
  final.textContent = ('TOTAL');
  row.appendChild(final);

  // //creates the total sale of cookies for every hour
  for (let j = 0; j < hours.length ; j++) {
    let sum = 0;
    for (let i = 0; i < total_stores.length; i++) {
      sum = sum + total_stores[i].cookie_sales_per_hour[j];
    }

    let total = document.createElement('th');
    total.textContent = sum;
    row.appendChild(total);
  }
  ///creates the daily totals.
  let add = 0;
  for (let i = 0; i < total_stores.length; i++) {
    add = add+ total_stores[i].cookie_sales_per_day;
  }
  let all = document.createElement('th');
  all.textContent = add;
  row.appendChild(all);

  table.appendChild(row);

}
footer();