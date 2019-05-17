let length = 15; 
let width_of_garden = 25; 
let space = 10*100; 
let employed_area =length*width_of_garden; 
let part_of_space =space/employed_area;
let free_area=space-(parseInt (part_of_space)*employed_area); 

console.log(free_area);

var x;
var y;
var z;
x=prompt("Введите первое число X:","")
y=prompt("Введите второе число Y:","")
z=prompt("Введите третье число Z:","")
if(x<=y)
{
if(x<=z)
{
alert("Наименьшее число Х")
}
else 
{
alert("Наименьшее число Z")
}
}
else 
{
if(y<=z)
{
alert("Наименьшее число Y")
}
else 
{
alert("Наименьшее число Z")
}
}


///////
