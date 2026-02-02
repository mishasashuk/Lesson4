const order = "Order#1456; date=2026-01-26 09:07:05; amount=15.3";

// преобразовать строку в формат:
// Заказ № 1456 от 26/01/2026 09:07 на сумму 16 рублей

const startOrder = order.indexOf("#") + 1;
const endOrder = order.indexOf(";");
const numberOrder = order.slice(startOrder, endOrder);

const markerdate = "date=";
const startDate = order.indexOf(markerdate) + markerdate.length;
const endDate = order.indexOf(";", startDate);
const numberDate = order.slice(startDate, endDate);

const date = new Date(numberDate);

const day = date.getDate().toString().padStart(2, "0");
const month = date.getMonth().toString().padStart(2, "0");
const year = date.getFullYear().toString();
const hours = date.getHours().toString().padStart(2, "0");
const minutes = date.getMinutes().toString().padStart(2, "0");

const markeramount = "amount=";
const startAmount = order.indexOf(markeramount) + markeramount.length;
const price = order.slice(startAmount);

const amount = Math.ceil(parseFloat(price));

const result = `Заказ № ${numberOrder} от ${day}/${month}/${year} ${hours}:${minutes} на сумму ${amount} рублей`;

console.log(result);
