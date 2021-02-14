'use strict';

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
function cusRan(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let Seatle = {

    maxNoCus: 65,
    minNoCus: 23,
    avgCokPerCus: 6.3,
    cusPerHour: [],
    eachHourSale: [],

    cusNo: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cusPerHour.push(cusRan(this.maxNoCus, this.minNoCus));
        }
        //final: function

    },

    totSaleHour: function () {
        for (let index = 0; index < this.cusPerHour.length; index++) {
             this.eachHourSale.push(Math.ceil(this.cusPerHour[index] * this.avgCokPerCus));

        }
    },
    updateVals: function () {

        let wrap = document.getElementById('Cont');
        let ulElement = document.createElement('ul');
        let heading = document.createElement('h1');
        heading.textContent = 'Seatle';
        wrap.appendChild(heading);
        wrap.appendChild(ulElement);

        let total = 0;
        for (let index = 0; index < hours.length; index++) {
            let liElement = document.createElement('li');
            console.log(this.eachHourSale[index])
            liElement.textContent = `${hours[index]} : ${this.eachHourSale[index]}`;
            ulElement.appendChild(liElement);
            total = total + this.eachHourSale[index];


        }

        let liElement2 = document.createElement('li');
        liElement2.textContent = `Total: ${total}`
        ulElement.appendChild(liElement2);




    }
}


Seatle.cusNo();
Seatle.totSaleHour();
Seatle.updateVals();
console.log(Seatle);





// let contains = document.getElementById('Cont');
// let ulElement  = document.createElement('ul');

// contains.appendChild('ulElement');

// ulElement.textContent=`${hours[i]} : ${seatle.totSaleHour}`;



let Tokyo = {

    maxNoCus: 24,
    minNoCus: 3,
    avgCokPerCus: 1.2,
    cusPerHour: [],
    eachHourSale: [],

    cusNo: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cusPerHour.push(cusRan(this.maxNoCus, this.minNoCus));
        }
        //final: function

    },

    totSaleHour: function () {
        for (let index = 0; index < this.cusPerHour.length; index++) {
             this.eachHourSale.push(Math.ceil(this.cusPerHour[index] * this.avgCokPerCus));

        }
    },
    updateVals: function () {

        let wrap = document.getElementById('Cont');
        let ulElement = document.createElement('ul');
        let heading = document.createElement('h1');
        heading.textContent = 'Tokyo';
        wrap.appendChild(heading);
        wrap.appendChild(ulElement);

        let total = 0;
        for (let index = 0; index < hours.length; index++) {
            let liElement = document.createElement('li');
            console.log(this.eachHourSale[index])
            liElement.textContent = `${hours[index]} : ${this.eachHourSale[index]}`;
            ulElement.appendChild(liElement);
            total = total + this.eachHourSale[index];


        }

        let liElement2 = document.createElement('li');
        liElement2.textContent = `Total: ${total}`
        ulElement.appendChild(liElement2);




    }
}


Tokyo.cusNo();
Tokyo.totSaleHour();
Tokyo.updateVals();
console.log(Tokyo);




let Dubai = {

    maxNoCus: 38,
    minNoCus: 11,
    avgCokPerCus: 3.7,
    cusPerHour: [],
    eachHourSale: [],

    cusNo: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cusPerHour.push(cusRan(this.maxNoCus, this.minNoCus));
        }
        //final: function

    },

    totSaleHour: function () {
        for (let index = 0; index < this.cusPerHour.length; index++) {
             this.eachHourSale.push(Math.ceil(this.cusPerHour[index] * this.avgCokPerCus));

        }
    },
    updateVals: function () {

        let wrap = document.getElementById('Cont');
        let ulElement = document.createElement('ul');
        let heading = document.createElement('h1');
        heading.textContent = 'Dubai';
        wrap.appendChild(heading);
        wrap.appendChild(ulElement);

        let total = 0;
        for (let index = 0; index < hours.length; index++) {
            let liElement = document.createElement('li');
            console.log(this.eachHourSale[index])
            liElement.textContent = `${hours[index]} : ${this.eachHourSale[index]}`;
            ulElement.appendChild(liElement);
            total = total + this.eachHourSale[index];


        }

        let liElement2 = document.createElement('li');
        liElement2.textContent = `Total: ${total}`
        ulElement.appendChild(liElement2);




    }
}


Dubai.cusNo();
Dubai.totSaleHour();
Dubai.updateVals();
console.log(Dubai);



let Paris = {

    maxNoCus: 38,
    minNoCus: 20,
    avgCokPerCus: 2.3,
    cusPerHour: [],
    eachHourSale: [],

    cusNo: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cusPerHour.push(cusRan(this.maxNoCus, this.minNoCus));
        }
        //final: function

    },

    totSaleHour: function () {
        for (let index = 0; index < this.cusPerHour.length; index++) {
             this.eachHourSale.push(Math.ceil(this.cusPerHour[index] * this.avgCokPerCus));

        }
    },
    updateVals: function () {

        let wrap = document.getElementById('Cont');
        let ulElement = document.createElement('ul');
        let heading = document.createElement('h1');
        heading.textContent = 'Paris';
        wrap.appendChild(heading);
        wrap.appendChild(ulElement);

        let total = 0;
        for (let index = 0; index < hours.length; index++) {
            let liElement = document.createElement('li');
            console.log(this.eachHourSale[index])
            liElement.textContent = `${hours[index]} : ${this.eachHourSale[index]}`;
            ulElement.appendChild(liElement);
            total = total + this.eachHourSale[index];


        }

        let liElement2 = document.createElement('li');
        liElement2.textContent = `Total: ${total}`
        ulElement.appendChild(liElement2);




    }
}


Paris.cusNo();
Paris.totSaleHour();
Paris.updateVals();
console.log(Paris);





let Lima = {

    maxNoCus: 16,
    minNoCus: 2,
    avgCokPerCus: 4.6,
    cusPerHour: [],
    eachHourSale: [],

    cusNo: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cusPerHour.push(cusRan(this.maxNoCus, this.minNoCus));
        }
        //final: function

    },

    totSaleHour: function () {
        for (let index = 0; index < this.cusPerHour.length; index++) {
             this.eachHourSale.push(Math.ceil(this.cusPerHour[index] * this.avgCokPerCus));

        }
    },
    updateVals: function () {

        let wrap = document.getElementById('Cont');
        let ulElement = document.createElement('ul');
        let heading = document.createElement('h1');
        heading.textContent = 'Lima';
        wrap.appendChild(heading);
        wrap.appendChild(ulElement);

        let total = 0;
        for (let index = 0; index < hours.length; index++) {
            let liElement = document.createElement('li');
            console.log(this.eachHourSale[index])
            liElement.textContent = `${hours[index]} : ${this.eachHourSale[index]}`;
            ulElement.appendChild(liElement);
            total = total + this.eachHourSale[index];


        }

        let liElement2 = document.createElement('li');
        liElement2.textContent = `Total: ${total}`
        ulElement.appendChild(liElement2);




    }
}


Lima.cusNo();
Lima.totSaleHour();
Lima.updateVals();
console.log(Lima);