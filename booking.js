/********* create variables *********/
let costPerDay = 35;
let daysSelected = 0;
let dayButtons = document.querySelectorAll('.day-button');
let clearButton = document.querySelector('.clear-button');
let halfDayButton = document.querySelector('.half-day-button');
let fullDayButton = document.querySelector('.full-day-button');
let calculatedCostElement = document.querySelector('.calculated-cost');

/********* colour change days of week *********/
dayButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('clicked')) {
            this.classList.add('clicked');
            daysSelected++;
        }
        calculateCost();
    });
});

/********* clear days *********/
clearButton.addEventListener('click', function() {
    dayButtons.forEach(button => {
        button.classList.remove('clicked');
    });
    daysSelected = 0;
    calculateCost();
});

/********* change rate *********/
halfDayButton.addEventListener('click', function() {
    costPerDay = 20;
    this.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    calculateCost();
});

fullDayButton.addEventListener('click', function() {
    costPerDay = 35;
    this.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    calculateCost();
});

/********* calculate *********/
function calculateCost() {
    let totalCost = costPerDay * daysSelected;
    calculatedCostElement.innerHTML = `$${totalCost}`;
}

