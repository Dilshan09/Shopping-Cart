function loadData(data){
	if(data=="btn1"){
		document.getElementById("phoneImg").src = "images/iphone6.jpg";
		document.getElementById("para").innerHTML = "The iPhone 6 and iPhone 6 Plus are smartphones that were designed and marketed by Apple Inc. They are the eighth generation of the iPhone, succeeding the iPhone 5S, and were announced on September 9, 2014, and released on September 19, 2014 " ;

	}
	else if(data=="btn2"){
		document.getElementById("phoneImg").src = "images/iphone7.jpg";
		document.getElementById("para").innerHTML = "The iPhone 7 and iPhone 7 Plus are smartphones designed, developed, and marketed by Apple Inc. They are the tenth generation of the iPhone. They were announced on September 7, 2016, at the Bill Graham Civic Auditorium in San Francisco by Apple CEO Tim Cook, and were released on September 16, 2016, succeeding the iPhone 6S and iPhone 6S Plus as the flagship devices in the iPhone series";

	}
	
	else if(data=="btn3"){
		document.getElementById("phoneImg").src = "images/iphonexs.jpg";
       	document.getElementById("para").innerHTML = "The XS Max was the first plus-sized iPhone to have the newer reduced bezel form factor, as the iPhone X did not have a larger variant. Production of the iPhone XS (and XS Max) ceased on September 10, 2019, after the iPhone 11 and 11 Pro announcement.";

	}
}
function priceForLoop(){
	var phone =["iphone 6 = RS 8000/=","iphone 7 = RS 15000/=","iphone Xs = RS 25000/="];
	document.getElementById("phoneImg").src = "images/list.jpg";
	var message = "List of prices (using for loop)<br><br>";
	
	var len = phone.length;
	for(var i = 0; i<len; i++)
	{
		message += phone[i]+"<br>";
	}
	document.getElementById("para").innerHTML = message;
}
function productForInLoop(){
    var phone =[];
	phone["iPhone 6"]="RS 8000/=";
	phone["iPhone 7"]="RS 15000/=";
	phone["iPhone Xs"]="RS 25000/=";

    document.getElementById("phoneImg").src = "images/list.jpg";
	var message = "List of prices (using for loop)<br><br>";
	
	for (var  items in phone){
	     message += items + ":" + phone[items] + "<br>";
	
	}
	document.getElementById("para").innerHTML = message;

}
function priceHigher(){
	var phone =[];
	
	phone["iPhone 6"]=8000;
	phone["iPhone 7"]=15000;
	phone["iPhone Xs"]=25000;
	phone["Phone 2"]=5000;
	phone["Phone 3"]=21000;
    
	document.getElementById("phoneImg").src = "images/list.jpg";
	var message = "List of prices higher than 10000<br><br>";
    
	for (var  items in phone){
         if(phone[items]>10000){
			 	     message += items + ":" + phone[items] + "<br>";
		 }
	}	
    	document.getElementById("para").innerHTML = message;
	
}
function priceLower(){
	var phone =[];
	
	phone["iPhone 6"]=8000;
	phone["iPhone 7"]=15000;
	phone["iPhone Xs"]=25000;
	phone["Phone 2"]=5000;
	phone["Phone 3"]=21000;
    
	document.getElementById("phoneImg").src = "images/list.jpg";
	var message = "List of prices lower than 10000<br><br>";
    
	for (var  items in phone){
         if(phone[items]<10000){
			 	     message += items + ":" + phone[items] + "<br>";
		 }
	}	
    	document.getElementById("para").innerHTML = message;
	
}

function checkPassword(){
	var v1 = document.getElementById("pwd1").value;
	var v2 = document.getElementById("pwd2").value;

    if(v1 != v2){
		alert("Password mismatch");
	}else{
		alert("Success");

	}
		
}
function AcceptTerms(){
	var chk = document.getElementById("chkTerms");
	var sub = document.getElementById("subReg");
	
	if(chk.checked){
		sub.disabled = false;
	}else{
		sub.disabled = true;

	}
}		