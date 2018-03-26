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


	// Mensajes genericos
	function EnviarGeneral(tipo) {

		var param = { 
			"priority": _priority,
			//"to": "e1z0N5-K55I:APA91bFDwx74HxFwoAImW_UIuhuQuQ81Ct4I7HfPsFA_v5bWzzZ1mnaVPBbR7RdMMjks40f-B6Y2A5RUTR0bFZaJTh96WIxXEiiluVLoeJskIM_IDas0HR4oUBZ-9wFDiooNCNu4u4So",
			"condition": _condition,
			"collapseKey": _collapsedKey,
			"apns-collapse-id": _collapsedKey,
			"collapse_key": _collapsedKey,
			"notificacion":
			{
				"body" : "Su retraso de cita se ha confirmado",
				"title" : "Angiología y cirugía vascular - IMED Elche",
				"sound": "default",
				"content_available": true
			},
			"data": 
			{
				"body" : "Su retraso de cita se ha confirmado",
				"title" : "Angiología y cirugía vascular - IMED Elche",
				"tipo_notificacion": "General"
			}
		};

		if(tipo == 2) // Notificacion + redireccion
		{
			param["data"]["pagina"] = "10";
			param["data"]["pagina_forzada"] = "10";
		}
		else if(tipo == 3) // Notificacion + alerta
		{
			param["data"]["alerta"] = "Se ha confirmado el retraso de 10 minutos para su cita de Angiología y cirugía vascular en IMED Elche a las 18:30";
		}
		else if(tipo == 4) // Notificacion + redireccion + alerta
		{
			param["data"]["pagina"] = "CitasMisCitas";
			param["data"]["alerta"] = "Se ha confirmado el retraso de 10 minutos para su cita de Angiología y cirugía vascular en IMED Elche a las 18:30";
		}

		var paramJson = JSON.stringify(param);

		$.ajax({
			type : 'POST',
			url : _url,
			headers : {
				Authorization : _authorization
			},
			contentType : _contentType,
			data : paramJson,
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
			_especialidad = "Cardiología";
			_especialista = "Dr. Rubén Martínez Vilar";
			_consulta = "03";
			_turnoActual = "35-45-26";
			_refCita = "55-00-03";
			_turnosSiguientes = "26-87-88, 55-00-03, 31-52-28, 66-04-64";
		}
		else if(usuario == "2000395"){
			_title = "Lucas Moral Molinero";
			_especialidad = "Cardiología";
			_especialista = "Dr. Rubén Martínez Vilar";
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
			_especialidad = "Cardiología";
			_especialista = "Dr. Rubén Martínez Vilar";
			_consulta = "03";
			_turnoActual = "26-87-88";
			_refCita = "55-00-03";
			_turnosSiguientes = "55-00-03, 31-52-28, 66-04-64";
		}
		else if(usuario == "2000395"){
			_title = "Lucas Moral Molinero";
			_especialidad = "Cardiología";
			_especialista = "Dr. Rubén Martínez Vilar";
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
			_especialidad = "Cardiología";
			_especialista = "Dr. Rubén Martínez Vilar";
			_consulta = "03";
			_turnoActual = "55-00-03";
			_refCita = "55-00-03";
			_turnosSiguientes = "31-52-28, 66-04-64";
		}
		else if(usuario == "2000395"){
			_title = "Lucas Moral Molinero";
			_especialidad = "Cardiología";
			_especialista = "Dr. Rubén Martínez Vilar";
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
			_especialidad = "Cardiología";
			_especialista = "Dr. Rubén Martínez Vilar";
			_consulta = "03";
			_turnoActual = "35-45-26";
			_refCita = "55-00-03";
			_turnosSiguientes = "26-87-88, 55-00-03, 31-52-28, 66-04-64";
		}
		else if(usuario == "2000395"){
			_title = "Lucas Moral Molinero";
			_especialidad = "Cardiología";
			_especialista = "Dr. Rubén Martínez Vilar";
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

		// Por defecto rellenamos el tipo encuesta 1 (2 respuestas cerradas)
		var param = { 
			"priority": _priority,
			//"to": "d3kUTucndCk:APA91bF_kNDUE4SXof-L9Hgg1p93MYDzCc5oQE2u7wAPc72UQIXJ5Ag2QgjMnV1QPkNgsCFeqiaUa3yGDtVrM7sXczZ8knRZO68WEVgoi8vgIe-at2g58vWdDjVcSMEAixMyNGuofd8S",
			"condition": _condition,
			"collapseKey": _collapsedKey,
			"apns-collapse-id": _collapsedKey,
			"collapse_key": _collapsedKey,
			"notification":
			{
				"title": "En IMED Hospitales valoramos su opinión",
				"body": "¿Qué le ha parecido nuestro servicio?",
				"sound": "default",
				"content_available": true
			},
			"data": 
			{
				"title": "En IMED Hospitales valoramos su opinión",
				"body": "¿Qué le ha parecido nuestro servicio?",
				"tipo_notificacion": "Encuesta",
				"tipo_encuesta": tipoEncuesta,
				"encuesta_id": 7,
				"paciente_id": usuario,
				"pregunta": "¿Volvería a utilizar los servicios de IMED Hospitales?",
				"respuestas": ["Si, sin duda", "No, ni pensarlo"],
				"iconos": [""]
			}
		};

		// Tipo encuesta 2, 5 respuestas cerradas
		if (tipoEncuesta == 2)
		{
			param["data"]["respuesta_enlace"] = 0;
			param["data"]["enlace"] = "https://search.google.com/local/writereview?placeid=ChIJPSmGvlsEYg0R3Qw1Iir0pBw";
			param["data"]["encuesta_id"] = 9;
			param["data"]["pregunta"] = "¿Cómo de satisfecho está con el servicio prestado?";
			param["data"]["respuestas"] = ["Muy satisfecho", "Satisfecho", "Neutral", "Insatisfecho", "Muy Insatisfecho"];
			param["data"]["iconos"] = [""];
			
		}
		// Encuesta de respuesta libre
		else if(tipoEncuesta == 3)
		{
			param["data"]["enlace"] = "https://search.google.com/local/writereview?placeid=ChIJPSmGvlsEYg0R3Qw1Iir0pBw";
			param["data"]["encuesta_id"] = 10;
			param["data"]["pregunta"] = "Por favor describa su experiencia con el servicio prestado. Escriba su respuesta en el siguiente recuadro (max. 300 carateres):";
		}

		var paramJson = JSON.stringify(param);

		console.log(paramJson);

		$.ajax({
			type : 'POST',
			url : _url,
			headers : {
				Authorization : _authorization
			},
			contentType : _contentType,
			data : paramJson,
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
