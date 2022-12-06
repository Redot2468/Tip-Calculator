const perFive = document.querySelector(".per5");
const perTen = document.querySelector(".per10");
const perFifteen = document.querySelector(".per15");
const perTwentyFive = document.querySelector(".per25");
const perFifty = document.querySelector(".per50");
const totalPerPersonSlot = document.querySelector(".total");
const tipPerPersonSlot = document.querySelector(".tip");
const noResetBtn = document.querySelector(".btn__noreset");
const resetBtn = document.querySelector(".btn__reset");
const bill = document.querySelector(".bill");
const noOfPerson = document.querySelector(".no__of-people");
const btnPercentage = document.querySelectorAll(".btn__percentage");



let billAmount = "";
let numOfPeople = "";
let billForEachPerson = "";
let tipPerPerson = "";
let totalPerPerson = "";

// events
resetBtn.addEventListener("click", reset);

for (let i = 0; i <= btnPercentage.length; i++){
    btnPercentage[i].addEventListener("click", renderTip);
}

// functions
function renderTip(e){
        billForEachPerson = bill.value / noOfPerson.value;
        tipPerPerson = billForEachPerson * parseFloat(e.target.textContent) / 100;
    
        totalPerPerson = tipPerPerson + billForEachPerson;
    
        tipPerPersonSlot.textContent = `$${tipPerPerson.toFixed(2)}`;
        totalPerPersonSlot.textContent = `$${totalPerPerson.toFixed(2)}`;

        // the reset button
        noResetBtn.style.display = "none";
        resetBtn.style.display = "block";
}



function reset(){
    
        totalPerPersonSlot.textContent = "$0.00";
        tipPerPersonSlot.textContent = "$0.00";

        bill.value = "";
        noOfPerson.value = "";

        // the reset button
        noResetBtn.style.display = "block";
        resetBtn.style.display = "none";
       
}








