"use sctrict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(percent)) {
        return `Параметр Процентная ставка содержит неправильное значение "${window.percent.value}"`;
    }

    if (isNaN(contribution)) {
        return `Параметр Начальный взнос содержит неправильное значение "${window.contribution.value}"`;
    }

    if (isNaN(amount)) {
        return `Параметр Общая стоимость содержит неправильное значение "${window.amount.value}"`;
    }

    if (isNaN(date)) {
        return "Задайте дату";
    }

    let credit = amount - contribution; 
    let currentDate = new Date(); 
    let months = (date.getFullYear() - currentDate.getFullYear()) * 12 + (date.getMonth() - currentDate.getMonth()); 

    if (months == 0) {
        return "Задайте дату больше 1 месяца";
    }

let percentCalc = (percent / 100) / 12; // 1/12 pecent
let monthPay = credit * (percentCalc + percentCalc / (Math.pow((1 + percentCalc), months) - 1));
let totalAmount = (monthPay * months).toFixed(2);

console.log(totalAmount);
return Number(totalAmount);
	}
	function getGreeting(name) {
		if (!name) {
			 name = "Аноним";
		}
  
		return `Привет, мир! Меня зовут ${name}.`;
  }
 
