'use strict';
let number;
do{
    number = +prompt("Ввести номер: ","")
}while(number==null || number=="" || isNaN(number));

console.log(number);

let chooseIncome;

do{
    chooseIncome = prompt("Ввести в дополнительных доходах только строку: ","")
}while(chooseIncome==null || chooseIncome=="");

let arr = chooseIncome.split(" ");

console.log(arr);

arr.forEach(function(val,index){
    console.log( (index+1) + ") Способы доп. заработка: " + val);
});

let appData = {
    appMoney: 0,
    appTime: 0,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
}

for(let key in appData){
    console.log("Наша программа включает в себя данные: " + key);
}