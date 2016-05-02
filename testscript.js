
var url = 'http://www.lakehousesales.com/SchedMaster/usermanager.php';

function getAppts() {

	var form = document.getElementById('testForm');
	var endpoint = "customermanager.php";
	var params = "key=invincible&email=to&password=0&action=getAppts";
	var request = new XMLHttpRequest();
	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send(params);
	request.onreadystatechange = function() {
		if(request.status == 200) {
			var response = request.responseText;
			if(response.length > 0) {

				var obj = jQuery.parseJSON(request.responseText);

				var h = "";
				for(var i in obj) {
					console.log(i);
					h.concat(
					"<tr id=" + obj[i].id + " onclick='viewAppt()'> \
						<td>"+ convertTime(obj[i].startTime) +"</td> \
						<td>"+ obj[i].endTime +"</td> \
						<td>"+ obj[i].category +"</td> \
						<td>"+ obj[i].comment +"</td> \
					</tr>");

				}
				alert(html);
				document.getElementById("appts").innerHtml = html;
				// for(var prop in obj) {
				// 	val = obj[prop];
				// 	console.log(prop +"="+ val);
				// }
			}
		}
	}

}

function mosqTest() {
	var mosqs = {};
	var count = 0;
	for(var i=0; i < 9; i++) {
		// var mosq = {birth: i};
		// mosqs.push(mosq);
		$(mosqs).extend({
    		birth: i
		});
		for(key in mosqs) {
			if( (i - key[i]) > 1) {
				count += 1;
				console.log(count);
			}
		}
	}
}

function convertTime(unix) {
	var date = new Date(unix*1000);
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	// Seconds part from the timestamp
	var seconds = "0" + date.getSeconds();
	var suffix = hours > 11 ? "pm" : "am";
	// Will display time in 10:30:23 format
	var formattedTime = hours + ':' + minutes.substr(-2) + suffix;
}


function test() {
		var myInfo = "key=invincible&email=to@password=0&action=getApts";
		var endpoint = "usermanager.php";
		var form = document.getElementById("testForm");
		var request = new XMLHttpRequest();
		form.submit();
	}

function sendRequest(myInfo, request, form, endpoint) {
	    //why did you make this function lol
        var url="lakehousesales.com/SchedMaster/usermanager.php";
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

		request.open("POST", url+endpoint, true);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.send(params);
}
