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
alert("Наименьшее число" +x)
}
else 
{
alert("Наименьшее число" +z)
}
}
else 
{
if(y<=z)
{
alert("Наименьшее число" +y)
}
else 
{
alert("Наименьшее число" +z)
}
}

let m=prompt ("Введите первое число M:","");
let n=prompt ("Введите первое число N:","");
let z1=10-m;
let f=10-n;
let b = Math.abs(z1);
let c = Math.abs(f);
if(b<=c)
{
alert("Ближайшее число к 10" + "-" +m)
}
else 
{
alert("Ближайшее число к 10" + "-" +n)
}
