//Задача № 1
let arr1 = [5, 7, 9];
let arr2 = [1, 2, 3, 7];
function compareArrays(arr1, arr2) {
    if(arr1.length === arr2.length){ 
    return true};
    for (let i = 0; i < arr1.length; i++) { 
    if (arr1[i] === arr2[i]){ 
        return true;
    } 
} 
return false;
}
console.log(compareArrays (arr1, arr2));

//Задача 2
let a = 1, b = 9, c = 4; 
function range(start, finish, movy) {
	let arr = [];
	if(movy === undefined) {
        movy = 1;
	}
	for(let j = start; j < finish; j = j + movy) {
		arr.push(j);
	} 
	return arr;
}   

console.log(range(a, b, c));

//Задача № 3

let Student = {
	name: "Иван",
	surname: "Иванов",
	age: "25",
	interests: ["Оружие", "Политика ", "Путешествия "],
	place: "Задрищенское ПТУ"
};

function contentOutput({name, surname, age, interests, place}) {
	alert("Имя: " + name + "\n" + "Фамилия: " + surname + "\n" + 
	"Возраст: " + age + "\n" + "Интересы: " + interests + "\n" + 
	"Место учебы: " + place);
}

contentOutput(Student);


function printObject(obj) {
  let out = "";
  for (let p in obj) {
    out = out + p + ": " + obj[p] + "\n";
  }
  alert(out);
}

printObject(Student);
