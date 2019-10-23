// basic functionalities

$(document).ready(function() {
		client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
		client.on("connect", function(){
		    console.log("Successfully connected");
		})
		client.on("message", function (topic, payload) {
			console.log("Received { topic:"+topic+"; payload: "+payload+" }");
			switch (topic) {
				case "aspire/device":
					$('#yc').val(payload);
					break;
				case "hannah-patrick":
					$('#hp').val(payload);
					break;
				case "elective_c":
					$('#ir').val(payload);
					break;
				case "Rivastibs":
					$('#tj').val(payload);
					break;
				case "marionivy":
					$('#im').val(payload);
					break;
				case "lalaineJake":
					$('#mj').val(payload);
					break;
				case "sensor/temperature/tanilon":
					$('#ck').val(payload);
					break;
				case "bargs-jane":
					$('#rj').val(payload);
					break;
				case "mogal":
					$('#jl').val(payload);
					break;
				case "princechan":
					$('#cp').val(payload);
					break;
				case "group1-temperature":
					$('#js').val(payload);
					break;
				case "genjess":
					$('#jg').val(payload);
					break;
			}
		})
	})