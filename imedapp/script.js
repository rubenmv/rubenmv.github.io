	var _contentType = 'application/json;charset=utf-8',
	_priority = "high",
	_collapsedKey = "IMED",
	_condition = "'general' in topics",
	_url = "https://fcm.googleapis.com/fcm/send",
	_especialista = "Dra. Eugenia Margarita",
	_especialidad = "Traumatologia y cirugia ortopedica",
	_consulta = "16",
	_turnoActual = "",
	_refCita = "",
	_turnosSiguientes = "",
	_fechaCita = "14/03/2018 10:20",
	_caducidad = 60000,
	_authorization = 'key=' + 'AAAAKZ_ED5U:APA91bF5CEKOZqHcvpKkINtl-rNOyquzjFdBBlzz4b1IwnJuIXRbhKwmALw-r4yUfaqClqLJCqD7jkPWMQQ8p_5qYUOsPECoV5xcg9Z8s4tDbf4lPYeI1-MpTokD6bmayb1MTpdOBbuM';


	/*El paciente llega a la clinica*/
	function DarLlegada(usuario) {
		var _title = "";
		if (usuario == "2010990")
		{
			_title = "Vicent Chova Pons";
			_especialista = "Dra. Eugenia Margarita";
			_especialidad = "Traumatologia y cirugia ortopedica";
			_consulta = "16";
			_turnoActual = "10-20-20";
			_refCita = "10-20-33";
			_turnosSiguientes = "23-25-55, 10-20-33, Sin llegada, 91-55-24";
		}
		else if(usuario == "2003140"){
			_title = "Adela Donate Escribano";
			_especialidad = "Cardiolog�a";
			_especialista = "Dr. Rub�n Mart�nez Vilar";
			_consulta = "03";
			_turnoActual = "35-45-26";
			_refCita = "55-00-03";
			_turnosSiguientes = "26-87-88, 55-00-03, 31-52-28, 66-04-64";
		}
		else if(usuario == "2000395"){
			_title = "Lucas Moral Molinero";
			_especialidad = "Cardiolog�a";
			_especialista = "Dr. Rub�n Mart�nez Vilar";
			_consulta = "03";
			_turnoActual = "35-45-26";
			_refCita = "55-00-03";
			_turnosSiguientes = "26-87-88, 55-00-03, 31-52-28, 66-04-64";
		}

		var param = JSON.stringify({ 
			"priority": _priority,
			"condition": _condition,
			"collapseKey": _collapsedKey,
			"apns-collapse-id": _collapsedKey,
			"collapse_key": _collapsedKey,
			"notification" : {
				"body" : _especialidad + ". Quedan 2 turnos.",
				"title" : _title,
				"sound": "default",
				"content_available": true
			},
			"data": 
			{
				"llegada": true,
				"fecha_cita": _fechaCita,
				"caducidad": _caducidad,
				"paciente_id": usuario,
				"tipo_notificacion": "SalaDeEspera",
				"turno": _turnoActual,
				"ref_cita": _refCita,
				"especialidad": _especialidad,
				"especialista": _especialista,
				"consulta": _consulta,
				"turnos_siguientes": _turnosSiguientes
			}
		});

		$.ajax({
			type : 'POST',
			url : _url,
			headers : {
				Authorization : _authorization
			},
			contentType : _contentType,
			data : param,
			success : function(response) {
				window.alert("Peticion enviada correctamente");
				console.log(response);
			},
			error : function(xhr, status, error) {
				window.alert("Hubo problema al realizar la peticion");
				console.log(xhr.error);                   
			}
		}); 
	}

	/*Pasa un turno*/
	function SiguienteTurno(usuario) {
		var _title = "";
		if (usuario == "2010990")
		{
			_title = "Vicent Chova Pons";
			_especialista = "Dra. Eugenia Margarita";
			_especialidad = "Traumatologia y cirugia ortopedica";
			_consulta = "16";
			_turnoActual = "10-25-04";
			_refCita = "10-20-33";
			_turnosSiguientes = "10-20-33, Sin llegada, 91-55-24";
		}
		else if(usuario == "2003140"){
			_title = "Adela Donate Escribano";
			_especialidad = "Cardiolog�a";
			_especialista = "Dr. Rub�n Mart�nez Vilar";
			_consulta = "03";
			_turnoActual = "26-87-88";
			_refCita = "55-00-03";
			_turnosSiguientes = "55-00-03, 31-52-28, 66-04-64";
		}
		else if(usuario == "2000395"){
			_title = "Lucas Moral Molinero";
			_especialidad = "Cardiolog�a";
			_especialista = "Dr. Rub�n Mart�nez Vilar";
			_consulta = "03";
			_turnoActual = "26-87-88";
			_refCita = "55-00-03";
			_turnosSiguientes = "55-00-03, 31-52-28, 66-04-64";
		}

		var param = JSON.stringify({ 
			"priority": _priority,
			"condition": _condition,
			"collapseKey": _collapsedKey,
			"apns-collapse-id": _collapsedKey,
			"collapse_key": _collapsedKey,
			"notification" : {
				"body" : _especialidad + ". Quedan 1 turno.",
				"title" : _title,
				"sound": "default",
				"content_available": true
			},
			"data": 
			{
				"llegada": true,
				"fecha_cita": _fechaCita,
				"caducidad": _caducidad,
				"paciente_id": usuario,
				"tipo_notificacion": "SalaDeEspera",
				"turno": _turnoActual,
				"ref_cita": _refCita,
				"especialidad": _especialidad,
				"especialista": _especialista,
				"consulta": _consulta,
				"turnos_siguientes": _turnosSiguientes
			}
		});

		$.ajax({
			type : 'POST',
			url : _url,
			headers : {
				Authorization : _authorization
			},
			contentType : _contentType,
			data : param,
			success : function(response) {
				window.alert("Peticion enviada correctamente");
				console.log(response);
			},
			error : function(xhr, status, error) {
				window.alert("Hubo problema al realizar la peticion");
				console.log(xhr.error);                   
			}
		}); 
	}


	/*Turno del paciente*/
	function DarTurno(usuario) {
		var _title = "";

		if (usuario == "2010990")
		{
			_title = "Vicent Chova Pons";
			_especialista = "Dra. Eugenia Margarita";
			_especialidad = "Traumatologia y cirugia ortopedica";
			_consulta = "16";
			_turnoActual = "10-20-33";
			_refCita = "10-20-33";
			_turnosSiguientes = "Sin llegada, 91-55-24";
		}
		else if(usuario == "2003140")
		{
			_title = "Adela Donate Escribano";
			_especialidad = "Cardiolog�a";
			_especialista = "Dr. Rub�n Mart�nez Vilar";
			_consulta = "03";
			_turnoActual = "55-00-03";
			_refCita = "55-00-03";
			_turnosSiguientes = "31-52-28, 66-04-64";
		}
		else if(usuario == "2000395"){
			_title = "Lucas Moral Molinero";
			_especialidad = "Cardiolog�a";
			_especialista = "Dr. Rub�n Mart�nez Vilar";
			_consulta = "03";
			_turnoActual = "55-00-03";
			_refCita = "55-00-03";
			_turnosSiguientes = "31-52-28, 66-04-64";
		}

		var param = JSON.stringify({ 
			"priority": _priority,
			"condition": _condition,
			"collapseKey": _collapsedKey,
			"apns-collapse-id": _collapsedKey,
			"collapse_key": _collapsedKey,
			"notification" : {
				"body" : _especialidad + ". Su turno, puede pasar a la consulta.",
				"title" : _title,
				"sound": "default",
				"content_available": true
			},
			"data": 
			{
				"llegada": true,
				"fecha_cita": _fechaCita,
				"caducidad": _caducidad,
				"paciente_id": usuario,
				"tipo_notificacion": "SalaDeEspera",
				"turno": _turnoActual,
				"ref_cita": _refCita,
				"especialidad": _especialidad,
				"especialista": _especialista,
				"consulta": _consulta,
				"turnos_siguientes": _turnosSiguientes
			}
		});

		$.ajax({
			type : 'POST',
			url : _url,
			headers : {
				Authorization : _authorization
			},
			contentType : _contentType,
			data : param,
			success : function(response) {
				window.alert("Peticion enviada correctamente");
				console.log(response);
			},
			error : function(xhr, status, error) {
				window.alert("Hubo problema al realizar la peticion");
				console.log(xhr.error);                   
			}
		}); 
	}

	/*Salida del paciente*/
	function DarSalida(usuario) {
		var _title = "";
		if (usuario == "2010990")
		{
			_title = "Vicent Chova Pons";
			_especialista = "Dra. Eugenia Margarita";
			_especialidad = "Traumatologia y cirugia ortopedica";
			_consulta = "16";
			_turnoActual = "10-20-20";
			_refCita = "10-20-33";
			_turnosSiguientes = "23-25-55, 10-20-33, Sin llegada, 91-55-24";
		}
		else if(usuario == "2003140"){
			_title = "Adela Donate Escribano";
			_especialidad = "Cardiolog�a";
			_especialista = "Dr. Rub�n Mart�nez Vilar";
			_consulta = "03";
			_turnoActual = "35-45-26";
			_refCita = "55-00-03";
			_turnosSiguientes = "26-87-88, 55-00-03, 31-52-28, 66-04-64";
		}
		else if(usuario == "2000395"){
			_title = "Lucas Moral Molinero";
			_especialidad = "Cardiolog�a";
			_especialista = "Dr. Rub�n Mart�nez Vilar";
			_consulta = "03";
			_turnoActual = "35-45-26";
			_refCita = "55-00-03";
			_turnosSiguientes = "26-87-88, 55-00-03, 31-52-28, 66-04-64";
		}

		var param = JSON.stringify({ 
			"priority": _priority,
			"condition": _condition,
			"collapseKey": _collapsedKey,
			"apns-collapse-id": _collapsedKey,
			"collapse_key": _collapsedKey,
			"notification":
			{
				"content_available": true
			},
			"data": 
			{
				"llegada": false,
				"fecha_cita": _fechaCita,
				"caducidad": _caducidad,
				"silent": true,
				"paciente_id": usuario,
				"tipo_notificacion": "SalaDeEspera",
				"turno": _turnoActual,
				"ref_cita": _refCita,
				"especialidad": _especialidad,
				"especialista": _especialista,
				"consulta": _consulta,
				"turnos_siguientes": _turnosSiguientes
			}
		});

		$.ajax({
			type : 'POST',
			url : _url,
			headers : {
				Authorization : _authorization
			},
			contentType : _contentType,
			data : param,
			success : function(response) {
				window.alert("Peticion enviada correctamente");
				console.log(response);
			},
			error : function(xhr, status, error) {
				window.alert("Hubo problema al realizar la peticion");
				console.log(xhr.error);                   
			}
		}); 
	}


	function EnviarEncuesta(usuario, tipoEncuesta) {
		var param = JSON.stringify({ 
			"priority": _priority,
			//"to": "chWjpFy3axA:APA91bGiBlLkblqXtqibbY9cnYIj_0TkFYhefXPZ4SOZlXZl-VmZaUNipkFTMTqnpSGDdovWkQmtzAI3_vYevvLMYIbbXIZsTWxWZ5PwBzaJi6-0hSNCZOf1W6Zz6BNJhUGlZHIKU57L",
						  "condition": _condition,
						 "collapseKey": _collapsedKey,
						 "apns-collapse-id": _collapsedKey,
						 "collapse_key": _collapsedKey,
						 "notification" : {
							 	"title": "En IMED Hospitales valoramos su opini�n",
							 	"body": "�Qu� le ha parecido nuestro servicio?",
							 	"sound": "default",
							 	"content_available": true
						 },
						 "data": 
						 {
						 	"tipo_notificacion": "Encuesta",
						 	"tipo_encuesta": tipoEncuesta,
						 	"encuesta_id": "1",
						 	"paciente_id": usuario,
						 	"pregunta": "�C�mo de satisfecho est� con el servicio prestado?"
						 }
						});

		$.ajax({
			type : 'POST',
			url : _url,
			headers : {
				Authorization : _authorization
			},
			contentType : _contentType,
			data : param,
			success : function(response) {
				window.alert("Peticion enviada correctamente");
				console.log(response);
			},
			error : function(xhr, status, error) {
				window.alert("Hubo problema al realizar la peticion");
				console.log(xhr.error);                   
			}
		}); 
	}
