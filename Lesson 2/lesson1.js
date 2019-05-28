let month = prompt("Введите номер месяца от 1 до 12");

switch (month) {
    case "1":
    case "2":
    case "12":
        console.log("Зима");
        break;
    case "3":
    case "4":
    case "5":
        console.log("весна");
        break;
    case "6":
    case "7":
    case "8":
        console.log("лето");
        break;
    case "9":
    case "10":
    case "11":
    case "autumn":
        console.log("осень");
        break;
    default:
        console.log("Введите номер месяца");
}


let a = prompt("Введите наименование единицы измерения, где  1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр");
let c;
let b = prompt("Введите длину отрезка");

switch (a) {
    case "1": c = 0.1;
        break;
    case "2": c = 1000;
        break;
    case "3": c = 1;
        break;
    case "4": c=0.001;
        break;
    case "5": c=0.01;
    default: console.log("Научись читать, идиот!");
}
result=b*c;
console.log("Длина отрезка составляет" + result + "м.")

var number = 55;
if(number < 0 && String(number).length == 3 && String(number).charAt(0) == "-"){
    console.log("Число " + number + " - " + "отрицательное двухзначное число");
}else if(number < 0 && String(number).length == 4 && String(number).charAt(0) == "-"){
    console.log("Число " + number + " - " + "отрицательное трехзначное число");
}else if(number < 0 && String(number).length == 2 && String(number).charAt(0) == "-"){
    console.log("Число " + number + " - " + "отрицательное однозначное число");
}else if(number > 0 && String(number).length == 1){
    console.log("Число " + number + " - " + "положительное однозначное число");
}else if(number == 0 ){
    console.log("Число " + number + " - " + "нулевое");
}else if(number > 0 && String(number).length == 2){
    console.log("Число " + number + " - " + "положительное двухзначное число");
}else if(number > 0 && String(number).length == 3){
    console.log("Число " + number + " - " + "положительное трехзначное число");
}
else {
    console.log("Число " + number + " - " + "не удовлетворяет условию задачи");
}

var text_3 = "Three";
var text_5 = "Five";
var text_35 = "ThreeFive";

for(var i = 1; i < 101; i++) {
    if(( i/3 ) % 1 === 0 && (i/5) % 1 != 0){
        console.log(text_3);
    }else if((i/5) % 1 === 0 && (i/3) % 1 != 0){
        console.log(text_5);
    }else if((i/3) % 1 === 0 && (i/5) % 1 === 0){
        console.log(text_35);
    }else{
        console.log(i);
    }
}

let a1 = prompt("Введите год");
result = ((a1 % 4 === 0 && a1 % 100 > 0) || a1 % 400 === 0) ? 
console.log("Введённый год является високосным") : 
console.log("Введённый год является обычным");

let plates = prompt("Введите количество тарелок");
let cleaner = prompt('Введите количество моющего вещества');
let result1 = 0.5;
for (let i = 0; i < plates; i++){
    if(cleaner > 0){
        console.log("Осталось моющего средства - " + cleaner)
    } else if(cleaner < 0 ){
        console.log("Oсталось грязных тарелок - " + (plates - i + 1))
        break;
    }
        cleaner = cleaner - 0.5
}
if(cleaner > 0){
    console.log("Все тарелки чистые, осталось моющего вещества - " + (cleaner))
}