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
