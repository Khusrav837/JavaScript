'use strict';

let money, time;

money = +prompt("Ваш бюджет на месяц?","");
time = prompt("Введите дату в формате YYYY-MM-DD","");

let expenses = {
    moneyForThisMonth: +prompt("Введите обязательную статью расходов в этом месяце",""),
    howMuch: +prompt("Во сколько обойдется?","")
}

let appData = {
    appMoney: money,
    appTime: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
}

alert(expenses.moneyForThisMonth/30);