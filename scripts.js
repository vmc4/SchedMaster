
	var url = 'http://www.lakehousesales.com/SchedMaster/usermanager.php';
	var assetUrl = 'http://www.lakehousesales.com/SchedMaster/assetUrl.php';
	var localStorage = window.localStorage;
	localStorage.id = 1;
	localStorage.type = "c";
	localStorage.busId = 1;
	var myType = localStorage.type;
	var myId = localStorage.id;

	function buildParams(form) {
			var params = "";
	    for(var i=0; i < form.elements.length; i++) {
			var e = form.elements[i];
			if(e.type.toLowerCase() != 'button') {
				params += e.name+"="+e.value;
				if( i != (form.elements.length - 1) ) {
					params += "&";
				}
			}
		}
		return params;

		// request.open("POST", url+endpoint, true);
		// request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		// request.send(params);
	}

	function getAppts(form) {

		var form = document.getElementById('testForm');
		var endpoint = "customermanager.php";
		var params = "key=invincible&email=admin@lakehousesales.com&password=google&action=getAppts";
		var request = new XMLHttpRequest();
		request.open("POST", url, true);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.send(params);
		request.onreadystatechange = function() {
			if(request.status == 200) {
				var obj = JSON.parse(request.responseText);
				for(var prop in obj) {
					val = obj[prop];
					console.log(prop +"="+ val);
				}
			}
		}


		// alert(sendRequest(params, endpoint));
	}

	function getRelationships() {

	}


	function register(element) {

		var params = buildParams(element.form);//"action=register&first="+first+"&last="+last+"&busName="+busName+"&email="+email+"&phone="+phone+"&password="+password;
		var request = new XMLHttpRequest();
		request.open("POST", url, true);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.send(params+"action=register&key=invincible");
		request.onreadystatechange = function() {
			if(request.status == 200) {
				if(request.responseText == "1") {
					window.location = "my_schedule.html";
				}
				else {
					//retry
				}
			}
		}



	}

	function login() {
		var request = new XMLHttpRequest(); //used to retrieve result

		var endpoint = "usermanager.php";
		var email = $('input[name="email"]').val();
		var password = $('input[name="password"]').val();
		var params = "action=login&email="+email+"&password="+password;
		var response;

		sendRequest(request, endpoint, params);

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
