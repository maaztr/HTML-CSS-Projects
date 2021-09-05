
var i = 0;

var fname = document.getElementById('fname');
var lname = document.getElementById('lname');

lname.onchange = updateName;

function updateName() {
	document.getElementById("updateName").innerHTML = `Salams ${document.getElementById('fname').value} ${document.getElementById('lname').value}! Thank you for joining us.`;
}

//var original = document.getElementById('test123');
//document.getElementById("demo2").innerHTML = `What color of vehicle would you prefer for vehicle ID_0`;
//document.getElementById(`ID_${i}`).innerHTML = "";
var end = document.getElementById('end');
function addVehicle() {
	//var clone = original.cloneNode(true);
	//clone.setAttribute('id',`ID_${i}`);
	//original.parentNode.appendChild(clone);
	i++;
	var currentCount = i;
	var vehicleDiv = document.createElement("div");
	vehicleDiv.setAttribute('id', `ID_${i}`);
	//document.body.appendChild(vehicleDiv);
	//document.getElementById(`ID_${i}`).innerHTML = "CLICK ME " + vehicleDiv.id;
	
	vehicleDiv.setAttribute('class', `vehicle`);

	var header = document.createElement("h2");
	header.innerHTML = `What color of vehicle would you prefer for vehicle ID_${i}`;
	vehicleDiv.appendChild(header);

	var colorButtons = document.createElement("div");
	colorButtons.setAttribute('class', `colorButtons`);
	vehicleDiv.appendChild(colorButtons);

	var green = document.createElement("BUTTON"); 
	green.innerHTML="Green";
	green.onclick = fungreen

	var grey = document.createElement("BUTTON"); 
	grey.innerHTML="Grey";
	grey.onclick = fungrey;

	var yellow = document.createElement("BUTTON"); 
	yellow.innerHTML="Yellow";
	yellow.onclick = funyellow;

	var brown = document.createElement("BUTTON"); 
	brown.innerHTML="Brown";
	brown.onclick = funbrown;

	function fungreen(){
		document.getElementById(`car_${currentCount}`).style.backgroundColor = "green";
	}

	colorButtons.appendChild(green);

	function fungrey(){
		document.getElementById(`car_${currentCount}`).style.background = "grey";
	}

	colorButtons.appendChild(grey);

	function funyellow(){
		document.getElementById(`car_${currentCount}`).style.background = "yellow";
	}

	colorButtons.appendChild(yellow);

	function funbrown(){
		document.getElementById(`car_${currentCount}`).style.background = "brown";
	}

	colorButtons.appendChild(brown);

	var h2 = document.createElement("h2");
	h2.innerHTML = `What is the size of the car?`;
	vehicleDiv.appendChild(h2);

	var sizeVehicle = document.createElement("div");
	sizeVehicle.setAttribute('class', "sizeVehicle")
	vehicleDiv.appendChild(sizeVehicle)

	var p1 = document.createElement("p");
	p1.innerHTML = `Length`;
	sizeVehicle.appendChild(p1);

	var ip1 = document.createElement("input")
	ip1.type = "text";
	ip1.placeholder = "Height";
	ip1.className = "length"; 
	sizeVehicle.appendChild(ip1); 

	var p2 = document.createElement("p");
	p2.innerHTML = `Width`;
	
	sizeVehicle.appendChild(p2);

	var ip2 = document.createElement("input")
	ip2.type = "text";
	ip2.placeholder = "Width";
	ip2.className = "width"; 
	sizeVehicle.appendChild(ip2);

	ip1.onchange = updateLength;
	ip2.onchange = updateWidth;

	function updateWidth() {
		//document.getElementById("test").innerHTML = `Salams ${ip2.value}`
		document.getElementById(`car_${currentCount}`).style.width = `${ip2.value}px`;
	}
	
	function updateLength() {
		//document.getElementById("test").innerHTML = `Salams ${ip1.value}`
		document.getElementById(`car_${currentCount}`).style.height = `${ip1.value}px`;
	}
	
	var vehicleSize = document.createElement("div");
	vehicleSize.setAttribute('id', `car_${i}`);
	vehicleSize.setAttribute('class', "vehicleSize");
	vehicleDiv.appendChild(vehicleSize)

	var p3 = document.createElement("p");
	p3.innerHTML = `Car size & color car_${i}`;
	vehicleSize.appendChild(p3);

	end.appendChild(vehicleDiv);
}

function removeVehicle(id) {
	document.getElementById(id).remove();
	i--;
}