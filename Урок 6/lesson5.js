// Функция clearInput () очищает поле ввода
function clearInput (a) {
return document.getElementById(a).value='';
}

// Задача 1
function gethexcolor(red, green, blue) {
	var r;
	var g;
	var b;
	
	if (red < 16) {
		r = 0x00 + red.toString(16);
	}
	else {
		r = red.toString(16);
	}
	
	if (green < 16) {
		g = 0x00 + green.toString(16);
	}
	else {
		g = green.toString(16);
	}
	
	if (blue < 16) {
		b = 0x00 + blue.toString(16);
	}
	else {
		b = blue.toString(16);
	}

	return "#" + (r + g + b).toUpperCase();
}

function showhexcolor() {
	var red = +document.getElementById("red").value;
	var green = +document.getElementById("green").value;
	var blue = +document.getElementById("blue").value;
	var t = document.getElementById("hex_color").value=(gethexcolor(red, green, blue));
	label_color.style.backgroundColor = t; // Выводит цвет в <label id="label_color">
}
// ===================================================================================
// Задача 2

function getObjnum(num) { // 245
	var a = ~~(num / 100); // 2
	var b = ~~((num-(a*100)) / 10); // 4
	var c = ~~(num -(a*100)-(b*10)); // 5
	var objnum = {sot:'', des:'', edn:''};
	if (num>999) {
		console.log("Ошибка: Число > 999");
		return objnum;
	}
	else {
		objnum.sot = a;
		objnum.des = b;
		objnum.edn = c;
		return objnum;
	}
}

function showObjfunc() {
	var num = document.getElementById("num").value;
	//document.getElementById("resultObjfunc").value=getObjnum(num);
	console.log(getObjnum(num));
}
// ===================================================================================
// Задача 3

function objectToQueryString(object) {
	var t = (object.user + " " + object.password + " " + object.id);
	return t;
}

function showObj() {
	var object = {user: 'Dmitry', password: 'pass', id: 1};
	document.getElementById("resObj").value=(objectToQueryString(object));
}