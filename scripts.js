
	var url = 'http://www.lakehousesales.com/SchedMaster/';
	var localStorage = window.localStorage;
	localStorage.id = 1;
	localStorage.type = "c";
	localStorage.busId = 1;
	var myType = localStorage.type;
	var myId = localStorage.id;

	function getAppts() {

		var endpoint = "customermanager.php";
		var params = "key=invincible&userTable=Users&email=to@password=0&action=getAppts";
		alert(sendReqest(endpoint, params));
	}

	function register(type) {

		var endpoint = "usermanager.php";

		if(type == "cust") {
			var first = $('input[name="first"]').val();
			var last = $('input[name="last"]').val();
			var email = $('input[name="email"]').val();
			var phone = $('input[name="phone"]').val();
			var password = $('input[name="password"]').val();

			var params = "action=register&first="+first+"&last="+last+"&email="+email+"&phone="+phone+"&password="+password;
			console.log(params)
		}
		else if(type == "bus") {
			var busName = $('input[name="busName"]').val();
			var email = $('input[name="email"]').val();
			var phone = $('input[name="phone"]').val();
			var type = $('input[name="type"]').val();
			var password = $('input[name="password"]').val();

			var params = "action=register&busName="+busName+"&email="+email+"&phone="+phone+"$type="+type+"&password="+password;
			console.log(params);
		}


		sendRequest(endpoint, params);
	}

	function login() {
		var request = new XMLHttpRequest(); //used to retrieve result

		var endpoint = "usermanager.php";
		var email = $('input[name="email"]').val();
		var password = $('input[name="password"]').val();
		var params = "action=login&email="+email+"&password="+password;
		var response;

		sendRequest(request, endpoint, params);
		request.onreadystatechange = function() {
			if (request.readyState == 4 && request.status == 200) {
				response = request.responseText;
				alert(response);
				if(response.split("^")[1] > 0) {
	  				alert('logged in');
	  				if(response.split("^")[0] == "c") {
	  					localStorage.type = "c";
	  					localStorage.id = response.split("^")[1];
	  					window.location.replace('cust-main.html');
	  				}
	  				else if(response.split("^")[0] == "b") {
	  					localStorage.type = "b";
	  					localStorage.id = response.split("^")[1];
	  					window.location.replace('bus-main.html');
	  				}
	  				$('#bus-main').click();
	  		  	}
	  		  	else {
	  		  		alert("Invalid Username or Password");
	  		  	}
			}
	  	};


	}



	function getBusById(i) {

		var request = new XMLHttpRequest(); //used to retrieve result
		var endpoint = "businessmanager.php";
		var action = "getBus";


		var busId;
		if(i == null) {
			busId = (localStorage.busId != null) ? localStorage.busId : localeStorage.myId;
			//get busInfo by id, use it to populate select elemeent

		}
		else {
			busId = i;
		}



	}

	function createAppt() {

	}

	function confirmAppt() {
		var date = $('#apptDate').val();
		var time = $('#apptTime').val();

		$('#confDate').val(date);
		$('#confTime').val(time);

		window.location = $('#confLink').attr('href');
	}

	function bookAppt() {
		var myInfo = "id="+localStorage.id+"&type="+localStorage.type+"&";
		//append either business or customer no.
		if(localStorage.type == "c") {
			myInfo += "busNo="+localStorage.busNo+"&";
		}
		else if(localStorage.type == "b") {
			myInfo += "custNo="+localStorage.custNo+"&";
		}

		var request = new XMLHttpRequest();
		var endpoint = "apptmanager.php";
		var form = document.getElementById('apptInfo');

		sendRequest(myInfo, request, form, endpoint);
	}

	function deleteAppt() {

	}

	function deleteBus() {

	}

	function addBus() {

	}

	function sendRequest(myInfo, request, form, endpoint) {
	    //why did you make this function lol
	    var params = myInfo;
	    for(var i=0; i < form.elements.length; i++){
			var e = form.elements[i];
			if(e.type.toLowerCase() != 'button') {
				params += e.name+"="+e.value;
				if( i != (form.elements.length - 1) ) {
					params += "&";
				}
			}
		}
		alert(params);

		request.open("POST", url+endpoint, true);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.send(params);
	}
