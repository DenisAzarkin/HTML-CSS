function chessBoard() {
	'use strict';
	let elem = '',
        letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],

        blackfig = ['\u2656', '\u2658', '\u2657', '\u2655', '\u2654', '\u2657', '\u2658', '\u2656'],
        whitefig = ['\u265C', '\u265E', '\u265D', '\u265B', '\u265A', '\u265D', '\u265E', '\u265C'],
        whitepawn = '\u265F',
        blackpawn = '\u2659';

    elem = '<div id="boardNum"></div>';
    elem += '<div id="chessBoard"></div>';
    elem += '<div id="chessBoardLet"></div>';
    document.getElementById("code").innerHTML = elem;
    for (let i = 0; i < 64; ++i) {
        let element = {};
        element = document.getElementById('chessBoard');
        element.appendChild(document.createElement('div'))
        element.childNodes[i].setAttribute('class', parseInt((i / 8) + i) % 2 == 0 ? 'yellow' : 'brown');
    }
    for (let i = 0, j = 8; i < 8; ++i, --j) {
        let element = {};
        element = document.getElementById('chessBoard');
        element.childNodes[i].textContent = blackfig[i];
        element.childNodes[i + 8].textContent = blackpawn;
        element.childNodes[i + 48].textContent = whitepawn;
        element.childNodes[i + 56].textContent = whitefig[i];
        element = document.getElementById('chessBoardLet');
        element.appendChild(document.createElement('div')).textContent = letters[i];
        element = document.getElementById('boardNum');
        element.appendChild(document.createElement('div')).textContent = j;
    }
}