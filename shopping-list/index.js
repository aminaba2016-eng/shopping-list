function incrementValue(){
	let price1 = document.getElementById('1');
	price1.value++;
	calcul();
	totalprice();}

function incrementNumber(){
	let price1 = document.getElementById('num1');
	price1.value++;	
	calculate();
	totalprice();}

function incrementValuee(){
	let price1 = document.getElementById('incre');
	price1.value++; 
	calculat();
	totalprice()
	}

function colorChange(){
    document.getElementById("lik").style.color = "red";}

function changeColor(){
	document.getElementById("like").style.color = "red";}

function myFunction(){
	document.getElementById("likee").style.color = "red";}
                
function decrementNumber(){
	let price = document.getElementById('num');
	price.value--;
	calculate();
	totalprice();
 	
}
function numberdecrement(){
	let price = document.getElementById('1');
	price.value--;
	calcul();
	totalprice();

}

function decrementValue(){
	let price = document.getElementById('incre');
	price.value--;
	calculat();
	totalprice();
}


function removeblockk() {
	var a = document.getElementById("demo");
  	var b = document.getElementById("nested");
  	a.removeChild(b);
  	
}
 
function deleteFunction() {
  var c = document.getElementById("demo");
  var d = document.getElementById("nested1");
  c.removeChild(d);
}
function myFunctiondele(){
  var k = document.getElementById("demo");
  var l = document.getElementById("nested2");
  k.removeChild(l);

}
function calcul(){
	var pr = document.getElementById("1").value;
	document.getElementById("prix1").innerHTML = pr*1379;

}
function calculate(){
	var pr = document.getElementById("num1").value;
	document.getElementById("prix2").innerHTML = pr*176.80;

}

function calculat(){
	var pr = document.getElementById("incre").value;
	document.getElementById("prix3").innerHTML = pr*249;

}
function totalprice(){
	var s = parseInt(document.getElementById("prix1").innerHTML);
	var s1 = parseInt(document.getElementById("prix2").innerHTML);
	var s2 = parseInt(document.getElementById("prix3").innerHTML);
	var sum =s+s1+s2;
	document.getElementById("finalPrice").value=sum;
}