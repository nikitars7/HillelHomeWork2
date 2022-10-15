

const num1 = prompt("Введите первое число:", "");
const num2 = prompt("Введите второе число:", "");

let summ = +num1 + +num2;

if (summ == '') {
   alert('The Summ is nothing =))')

}
else if (isNaN(summ)) {

   alert('U can`t summ letters and words or use two or more numbers in 1 form')

}
else {
   alert(`Сумма двух чисел = ${summ}
   Тип : ${typeof summ}`);
}