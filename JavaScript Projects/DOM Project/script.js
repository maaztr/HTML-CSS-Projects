
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');

lname.onchange = updateName;

function updateName() {
	document.getElementById("demo").innerHTML = `Salams ${document.getElementById('fname').value} ${document.getElementById('lname').value}! Thank you for joining us.`;
}

var i = 0;

function addHtmlElement() {
	var btn = document.createElement("div");
	document.body.appendChild(btn);
	i = i + 1;
	btn.setAttribute('id',`ID_${i}`);
	document.getElementById(`ID_${i}`).innerHTML = "CLICK ME "+btn.id;
	//document.getElementById(`ID_${i}`).innerHTML = document.getElementsByClassName('vehicle').item
}

function removeHtmlElement(id) {
	document.getElementById(id).remove();
	i = i - 1;
}