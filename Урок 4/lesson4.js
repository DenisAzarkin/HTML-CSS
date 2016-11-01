// Функция clearInput () очищает поле ввода
function clearInput (a) {
return document.getElementById(a).value='';
}

// Задача 1
function min(a, b) {
	return Math.min(a, b);
}
// Функция showMin() выводит результат в <textarea id="sowtt"></textarea>
function showMin() {
	var numA = +document.getElementById("numA").value;
	var numB = +document.getElementById("numB").value;
	document.getElementById("resultMin").value=(min(numA, numB));
}
//========================================================================
// Задача 2
function countChar(a, b) {

	var str = a; // ищем в этой строке
	var target = b; // цель поиска
	var position = 0;
	var n = 0;
	
	while (true) {
		var foundPos = str.indexOf(target, position);
		
		if (foundPos == -1) break;
		n = n+1;
		position = foundPos + 1;
	}
	
	return (n);		
}

function showChar() {
	var strChar = document.getElementById("strChar").value;
	var foundChar = document.getElementById("foundChar").value;
	document.getElementById("resultChar").value=(countChar(strChar, foundChar));
}












//========================================================================
// Задача 3

function isEven(a) {
	if (a<(-1)) {
		return "Ошибка! Нельзя ввести < -1";
	}
	else {
		var b=a;
		while (b!=-2){
			if (b==0 || b<-1){
				return false;
				break;
			}
			else if (b==-1) {
				return true;
				break;
			}
			else {
				b=b-2;
			}
		}
	}	
		
}


function showTFNum() {
	var TFNum = document.getElementById("TFNum").value;
	document.getElementById("resultTFNum").value=isEven(TFNum);
}










