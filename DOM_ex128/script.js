var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var tagli = document.getElementsByTagName("li");
var title = document.querySelector("h1");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	
	ul.appendChild(li);
	// ul.appendChild.innerHTML =  "<button>Remove</button>";
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function itemDone (item) {
	
	item.target.classList.toggle("done");
	
}

function switchTitle(){
	title.classList.toggle("coolTitle");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", itemDone);

title.addEventListener("click", switchTitle);



var i;
for (i = 0; i<li.length; i++){
console.log('The item with index '+ i +' is: ' + li[i].innerText);
}