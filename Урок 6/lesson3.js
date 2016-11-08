var i;

for (i = 1; i <= 100; ++i) {
	
	(((i % 5) != 0) && ((i % 3) != 0 ))	?
	document.writeln(i + "<br>") :
	(((i % 5) == 0) && ((i % 3) == 0)) ?
	document.writeln("FizzBuzz" + "<br>"):
	((i % 3) == 0) ?
	document.writeln("Fuzz" + "<br>"):
	((i % 5) == 0) ?
	document.writeln("Buzz" + "<br>"): false;
		
}