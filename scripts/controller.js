// basic functionalities

$(document).ready(function() {
		client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
		client.on("connect", function(){
		    console.log("Successfully connected");
		
			client.subscribe("aspire/device");
			client.subscribe("Hannah/Patrick/");
			client.subscribe("elective_c");
			client.subscribe("paho/temperature");
			client.subscribe("z");
			client.subscribe("lalaine/jake");
			client.subscribe("sensor/tanilonnadela");
			client.subscribe("bargs/jane");
			client.subscribe("mogal");
			client.subscribe("princechan");
			client.subscribe("group1/temperature");
			client.subscribe("genjess");
		})

		client.on("message", function (topic, payload) {
			console.log("Received { topic:"+topic+"; payload: "+payload+" }");
			switch (topic) {
				case "aspire/device":
					$('#yc').val(payload);
					break;
				case "Hannah/Patrick/":
					$('#hp').val(payload);
					break;
				case "elective_c":
					$('#ir').val(payload);
					break;
				case "paho/temperature":
					$('#tj').val(payload);
					break;
				case "z":
					$('#im').val(payload);
					break;
				case "lalaine/jake":
					$('#mj').val(payload);
					break;
				case "sensor/tanilonnadela":
					$('#ck').val(payload);
					break;
				case "bargs/jane":
					$('#rj').val(payload);
					break;
				case "mogal":
					$('#jl').val(payload);
					break;
				case "princechan":
					$('#cp').val(payload);
					break;
				case "group1/temperature":
					$('#js').val(payload);
					break;
				case "genjess":
					$('#jg').val(payload);
					break;
			}
		})
	})