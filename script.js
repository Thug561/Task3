'use strict';

let money = prompt("Ваш бюджет на месяц?", 'Введите обязательную статью расходов в этом месяце');
let time = prompt("Введите дату в формате YYYY-MM-DD", 'Во сколько обойдется?');
console.log(money);
console.log(time);

Object.appData = {
    money: [],
    time: 30,
    expenses: {
        "30000 грн": "30 День"
    },
    optionalExpenses: {},
    income: [],
    savings: false,
};

alert(money / time);