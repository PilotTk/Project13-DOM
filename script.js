

var button = document.getElementById("enter");
var input = document.getElementById("userinput");


function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var ul = document.getElementById("notes");
	var userinput = document.getElementById("userinput");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(userinput.value));
	var deletebutton = document.createElement("button");
	deletebutton.innerHTML = "X";
	deletebutton.setAttribute("id", userinput.value + "1" );

	li.appendChild(deletebutton);
	li.setAttribute("id", userinput.value );
	ul.appendChild(li);
	input.value= "";
}

document.getElementById("notes").addEventListener("click",function(e) {
    console.log(e.target.nodeName)
	if(e.target && e.target.nodeName == "BUTTON") {

		var find = e.target.id.toString();
		find = find.slice(0, -1); 
		console.log(document.getElementById(find));
		removeElement(find);


	}
	if(e.target.nodeName == "LI") {
		e.target.classList.toggle("done");	
	}
});





function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement()
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strikethroughItem() {
	strikethrough();
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
// ul.addEventListener("click", strikethroughItem);

