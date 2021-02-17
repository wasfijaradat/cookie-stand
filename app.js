'use strict';

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
function cusRan(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);  //14 random no generated for customer number in each hour
     
    
}

// constructor function to loop all the common props for the 5 franchize cities
function SalmonCok(location, minNoCus, maxNoCus, avgCokPerCus){
    this.location=location;
    this.minNoCus=minNoCus;
    this.maxNoCus=maxNoCus;
    this.avgCokPerCus=avgCokPerCus;
    this.cusPerHour=[]; 
    this.eachHourSale=[];
    this.totalTotal = 0;
    

}


//prototype the constructor function !! to fill the cutomer per hour array 
SalmonCok.prototype.cusNo = function(){
    
    
    for (let i = 0; i < hours.length; i++) {
        this.cusPerHour.push(cusRan(this.maxNoCus, this.minNoCus)); //the random no generated pushed into the empthy array cusPerHour

}
}

// we gonna calculate the sale for each hour by multiplying each index in the customer per hour array with the avg sales no 
// then we fill all the results in the eachHourSale array written in the construcor.
SalmonCok.prototype.totSaleHour = function(){ 

    for (let index = 0; index < this.cusPerHour.length; index++) {
        this.eachHourSale.push(Math.ceil(this.cusPerHour[index] * this.avgCokPerCus));
      
}
}

SalmonCok.prototype.render = function () {
    let tr = document.createElement("tr");
    table.appendChild(tr);
  
    let td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = this.location;
  
    for (let m = 0; m < hours.length; m++) {
      td = document.createElement("td");
      tr.appendChild(td);
      td.textContent = this.eachHourSale[m];
    }
    td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = this.dailySales;
  };


  
  


// SalmonCok.prototype.totalTotal = function grossCity() {
//     for (let index = 0; index < hours.length; index++) {
//     this.totalTotal = this.totalTotal + this.eachHourSale[index];
// }
// }
//below is the rendering process which is required to be in list

// SalmonCok.prototype.updateVals = function(){

    // let wrap = document.getElementById('cont'); // we created a container "wrap"
    // let ulElement = document.createElement('ul'); // we created a ul in the container 
    // let heading = document.createElement('h1'); // we created a header to put the city name
    // heading.textContent = this.location; // we created wrote the name of the city 
    // wrap.appendChild(heading); // asking the cont "wrap" section to include the heading under it 
    // wrap.appendChild(ulElement); // asking the cont "wrap" section to include the ul element in it 

    // let total = 0;
    // for (let index = 0; index < hours.length; index++) {
        // let liElement = document.createElement('li');
        // console.log(this.eachHourSale[index])
        // liElement.textContent = `${hours[index]} : ${this.eachHourSale[index]}`;
        // ulElement.appendChild(liElement);
       


    // }

//     let liElement2 = document.createElement('li');
//     liElement2.textContent = `Total: ${total}`
//     ulElement.appendChild(liElement2);
// }



// let Seatle = new SalmonCok('Seatle', 23, 65, 6.3 );

// Seatle.cusNo();
// Seatle.totSaleHour();
// Seatle.updateVals();

// let Tokyo = new SalmonCok('Tokyo', 3, 24, 1.2);
// Tokyo.cusNo();
// Tokyo.totSaleHour();
// Tokyo.updateVals();


// let Dubai = new SalmonCok('Dubai', 11, 38, 3.7);
// Dubai.cusNo();
// Dubai.totSaleHour();
// Dubai.updateVals();


// let Paris = new SalmonCok('Paris', 20, 38, 2.3);
// Paris.cusNo();
// Paris.totSaleHour();
// Paris.updateVals();

// let Lima = new SalmonCok('Lima', 2, 16, 4.6);
// Lima.cusNo();
// Lima.totSaleHour();
// Lima.updateVals();


// SALES TABLE******************************************************************************************************

// let wrap = document.getElementById('cont');
// let table = document.createElement('table');
// TRY-2 ******************************************************************************************************

// function tableHead() {
    
//     let headerRow = document.createElement('tr');
//     let headerCell = document.createElement('th');
//     headerRow.appendChild(headerCell);
//     table.appendChild(headerRow);
//     wrap.appendChild(table);

//     for(let i=0; i<hours.length; i++){
// let 

//     }


// tableHead();



// TRY-1 ******************************************************************************************************

// function headROW(){
//     let trHead = document.createElement('tr');
//     table.appendChild(trHead);
   
//     let thHead = document.createElement('th');
//     trHead.appendChild(thHead);
   
//     wrap.appendChild(table);


   
//     for(let i=0; i<hours.length; i++){
//        let th = document.createElement('th');
//         trHead.appendChild(th);
//         th.textContent = hours[i];
//     }
   
//     let th = document.createElement('th');
//     trHead.appendChild(th); 
//     th.textContent='Daily Location Total'
// }



// headROW();

// SalmonCok.prototype.rowRender=function () {
//     let tr = document.createElement('tr');
//     let td = document.createElement('td');
//     td.textContent = this.location
//     tr.appendChild(td);
//     table.appendChild(tr); 


//     for (let index = 0; index < hours.length; index++) {
//         let  td = document.createElement('td');
//         td.textContent = this.totSaleHour[i];
//         tr.appendChild(td);

//         this.dayTotal += this.totSaleHour[i];
        
//     }
   
   
// }


    


// function footRow(){
// let trFoot = document.createElement('tr');
// let thFoot = document.createElement('th');
// trFoot.appendChild(thFoot);


// }
// Seatle.cusNo()
// Seatle.totSaleHour()
// Seatle.rowRender()
// Seatle.footRow()


// global function for header row

let content = document.getElementById("cont");
let table = document.createElement("table");
content.appendChild(table);
function header() {
  let tr = document.createElement("tr");
  table.appendChild(tr);
  let td = document.createElement("td");
  tr.appendChild(td);
  td.textContent = "      ";

  for (let m = 0; m < hours.length; m++) {
    let th = document.createElement("th");
    th.textContent = hours[m];
    tr.appendChild(th);
  }
  let td1 = document.createElement("td");
  tr.appendChild(td1);
  td1.textContent = "Daily Location Total";
}
header();


// global function for footer row

function renderFooterRow(table) {
  let tr = document.createElement("tr");

  table.appendChild(tr);

  let td = document.createElement("td");

  tr.appendChild(td);

  td.textContent = "Totals";

  let megaTotal = 0;

  for (let hour = 0; hour < hours.length; hour++) {
    td = document.createElement("td");

    tr.appendChild(td);

    let sum = 0;

    for (let shopIndex = 0; shopIndex < shops.length; shopIndex++) {
      let shop = shops[shopIndex];

      sum += shop.eachHourSale[hour];
    }

    td.textContent = sum;

    megaTotal += sum;
  }

  td = document.createElement("td");

  tr.appendChild(td);

  td.textContent = megaTotal;
}





// render for the table ===================================================================================

SalmonCok.prototype.updateVals = function () {
    let tr = document.createElement("tr");
    table.appendChild(tr);
  
    let td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = this.location;
  
    for (let m = 0; m < hours.length; m++) {
      td = document.createElement("td");
      tr.appendChild(td);
      td.textContent = this.eachHourSale[m];
    }
    td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = this.totalTotal;
  };
  
  let Seatle = new SalmonCok('Seatle', 23, 65, 6.3 );

Seatle.cusNo();
Seatle.totSaleHour();
Seatle.updateVals();
// Seatle.totalTotal();


let Tokyo = new SalmonCok('Tokyo', 3, 24, 1.2);
Tokyo.cusNo();
Tokyo.totSaleHour();
Tokyo.updateVals();
// Tokyo.totalTotal();


let Dubai = new SalmonCok('Dubai', 11, 38, 3.7);
Dubai.cusNo();
Dubai.totSaleHour();
Dubai.updateVals();
// Dubai.totalTotal();

let Paris = new SalmonCok('Paris', 20, 38, 2.3);
Paris.cusNo();
Paris.totSaleHour();
Paris.updateVals();
// Paris.totalTotal();


let Lima = new SalmonCok('Lima', 2, 16, 4.6);
Lima.cusNo();
Lima.totSaleHour();
Lima.updateVals();
// Lima.totalTotal();


let shops = [Seatle, Tokyo, Dubai, Paris, Lima];

renderFooterRow(table);
