// Задание 3 из "Урока 2"

var i; 

for (i = 1; i <= 100; ++i) {
	
	if (((i % 5) != 0) && ((i % 3) != 0) ) {
		document.writeln(i + "<br>");
	}
	else if (((i % 5) == 0) && ((i % 3) == 0) ) {
		document.writeln("FizzBuzz" + "<br>");
	}
	else if ((i % 3) == 0) {
		document.writeln("Fuzz" + "<br>");
	}
	else if (((i % 5) == 0)) {
		document.writeln("Buzz" + "<br>");
	}
	
}