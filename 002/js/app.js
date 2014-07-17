var dog = 10;

document.getElementById("zero").onclick = makeZero;
document.getElementById("add5").onclick = plusFive;
document.getElementById("add10").onclick = plusTen;
document.getElementById("sub1").onclick = minusOne;
document.getElementById("multiply2").onclick = multiplyTwo;
document.getElementById("sub20").onclick = minusTwenty;

function makeZero() {
	dog = 0;
	document.getElementById("result").innerHTML = dog;
}

function plusFive() {
	dog = dog + 5;
	document.getElementById("result").innerHTML = dog;
}

function plusTen() {
	dog = dog + 10;
	document.getElementById("result").innerHTML = dog;
}

function minusOne() {
	dog = dog - 1;
	document.getElementById("result").innerHTML = dog;
}

function multiplyTwo() {
	dog = dog * 2;
	document.getElementById("result").innerHTML = dog;
}

function minusTwenty() {
	dog = dog - 20;
	document.getElementById("result").innerHTML = dog;
}