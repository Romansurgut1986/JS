//Задача № 1
let A = [ 12, 4, 3, 10, 1, 20 ];
let B = [-3, -7, -100, -33];
let C = A.concat(B);
console.log(C);
let D = B.concat(A);
console.log(D);

//Задача № 2

var z = [1, null, 0, null, 1, null, null, null, null];
for (var i = 0; i < z.length; i++); {
    switch (z[i]) {
        case 1: z[i] = X;
            break;
        case 0: z[i] = O;
            break;
        case null: z[i] = "";
            break;
    }

}
let str = "<table width='50px' border='solid green 2px' >"+ 
			"<tbody>"+
				"<tr align='center' height='20px' width='20px'>"+
					"<td>"+z[0]+"</td>"+
					"<td>"+z[1]+"</td>"+
					"<td>"+z[2]+"</td>"+
				"</tr>"+
				"<tr align='center' height='20px' width='20px'>"+
					"<td>"+z[3]+"</td>"+
					"<td>"+z[4]+"</td>"+
					"<td>"+z[5]+"</td>"+
				"</tr>"+
				"<tr align='center' height='20px' width='20px'>"+
					"<td>"+z[6]+"</td>"+
					"<td>"+z[7]+"</td>"+
					"<td>"+z[8]+"</td>"+
				"</tr>"+
			"</tbody>"+
		"</table>";
document.write(str);

//Задача № 3
var F = [12,4,3,10,1,20];
F.sort(function (a, b) {
    return a - b;
});
console.log(F);
F.shift();
F.pop();
console.log("Итоговый массив" + " " + F.toString());