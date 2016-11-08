// Функция clearInput () очищает поле ввода
function clearInput (a) {
return document.getElementById(a).value='';
}

// ================================================================
// Задача 1

function  arrayToList(one, two, three, forth, posnum) {    // 1, 2, 3, 4, posnum Получаем значения
	var Arr = [one, two, three];     // 1, 2, 3 Создаём массив массив Arr и записываем в него полученные значения
	var list = {value: Arr[0], rest: {value: Arr[1], rest: {value: Arr[2], rest: null}}};    // Создаём объект
	console.log(list);              // Object { value: 1, rest: Object } Выводим объект 
	listToArray(list, forth, posnum);       // Вызываем функцию listToArray()
	return;                        // Завершаем функцию
}

function listToArray(list, forth, posnum) {
	var Array = [];              // Создаём пустой массив, куда будем записывать value из list
	var i = -1;                  // Создаём i для счётчика, т.к. массив начинается с нуля, счётчик тоже начнём с нуля: ++i 
	
	toArray(list);               // Вызываем функцию toArray()
	
	function toArray(list) {
		if (list.rest) {          // Вызывыем функцию до тех пор, пока не достигнем глубины вложенного списка
			toArray(list.rest);    // Вызов rest внутри rest
		}
		Array[++i] = list.value;  // Шаг равен номеру элемента массива. Первый 0, т.к. i=(-1)
	}
	
	Array.reverse();             // Меняем элементы массива в обратном порядке
	console.log(Array);          // Array[1, 2, 3] Выводим массив
	prepend(list, forth, posnum);        // Вызов функции prepend(list, forth)
	return;                      // Завершаем фунцию
}

function prepend(list, forth, posnum) {
	var newlist = {value:forth, rest:list}; // Создаём новый список и подставляем доп значение в начало существующего list
	console.log(newlist);        // Выводим newlist
	nth(newlist, posnum);                // Вызов функции nth(newlist)
	return;                      // Завершаем фунцию
}

function nth(newlist, posnum) {
	var Array = [];              // Создаём пустой массив, куда будем записывать value из newlist
	var i = -1;                  // Создаём i для счётчика, т.к. массив начинается с нуля, счётчик тоже начнём с нуля: ++i 
	
	toArr(newlist);               // Вызываем функцию toArr()
	
	function toArr(newlist) {
		if (newlist.rest) {        // Вызывыем функцию до тех пор, пока не достигнем глубины вложенного списка
			toArr(newlist.rest);    // Вызов rest внутри rest
		}
		Array[++i] = newlist.value;  // Шаг равен номеру элемента массива. Первый 0, т.к. i=(-1)
	}
	
	Array.reverse();              // Меняем элементы массива в обратном порядке
	console.log(Array);           // Array[4, 1, 2, 3] Выводим массив
	
	if (Array.length < 5) {
		console.log(Array[posnum]);
	}
	else {
		return (Underfined);        // Завершаем фунцию, если введённая позиция в списке больше длины списка
	}
	return;                       // Завершаем фунцию
}

function showres() { // Кнопка
	var one = +document.getElementById("one").value;
	var two = +document.getElementById("two").value;
	var three = +document.getElementById("three").value;
	var forth = +document.getElementById("forth").value;    // Дополнительное значение
	var posnum = +document.getElementById("posnum").value;    // Позиция в списке
	arrayToList(one, two, three, forth, posnum);
	return;                                                 // Завершаем фунцию
}

// ================================================================
// Задача 2

function createArray(num1, num2, num3) { // 1, 2, 3 Создаём массив из введённых чисел
	var Arr = [num1, num2, num3];         // Arr = [1, 2, 3]
	console.log(Arr);                     // Выводим массив в консоль
	reverseArray(Arr);                    // Вызываем функцию и передаём с массивом в качестве аргумента
	return;
}

function reverseArray(rArray) {
    var Arr = [];                        // Создаём пустой массив
    for(var i = rArray.length-1; i >= 0; i--) {
        Arr.push(rArray[i]);
    }
    console.log(Arr);                    // Arr = [3, 2, 1]
    console.log(typeof(Arr));            // object
    reverseArrayInPlace(Arr);            // Вызываем функцию reverseArrayInPlace(Arr) с аргументом Arr = [3, 2, 1]
    return Arr;
}

function reverseArrayInPlace(rArray) {
    var Arr = [];                        // Создаём пустой массив
    for(var i = rArray.length-1; i >= 0; i--) {
        Arr.push(rArray[i]);
    }
    console.log(Arr);                    // Arr = [1, 2, 3]
    console.log(typeof(Arr));            // object
    return Arr;
}

function showrev() { // Кнопка
	var num1 = +document.getElementById("num1").value;
	var num2 = +document.getElementById("num2").value;
	var num3 = +document.getElementById("num3").value;
	createArray(num1, num2, num3);
	return;                      // Завершаем фунцию
}