	var _contentType = 'application/json;charset=ISO-8859-15',
			_priority = "high",
			_collapsedKey = "IMED",
			_condition = "'general' in topics",
			_url = "https://fcm.googleapis.com/fcm/send",
			_especialista = "Dra. Eugenia Margarita",
			_especialidad = "Alergología",
			_consulta = "16",
			_turnoActual = "",
			_refCita = "",
			_turnosSiguiente = "",
			_authorization = 'key=' + 'AAAAKZ_ED5U:APA91bF5CEKOZqHcvpKkINtl-rNOyquzjFdBBlzz4b1IwnJuIXRbhKwmALw-r4yUfaqClqLJCqD7jkPWMQQ8p_5qYUOsPECoV5xcg9Z8s4tDbf4lPYeI1-MpTokD6bmayb1MTpdOBbuM';


/*El paciente llega a la clinica*/
	function DarLlegada(usuario) {
		var _title = "";
		if (usuario == "2010990")
		{
			_title = "Vicent Chova Pons";
			_especialista = "Dra. Eugenia Margarita";
			_especialidad = "Alergología";
			_consulta = "16";
			_turnoActual = "10-20-20";
			_refCita = "10-20-33";
			_turnosSiguientes = "23-25-55, 10-20-33, Sin llegada, 91-55-24";
		}
		else if(usuario == "2009875"){
			_title = "Gema Mañas Marcos";
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
							"title": _title,
							"body": "Sala de espera. Quedan 2 turnos.",
							"sound": "default"
						},
						"data": 
						{
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
			_especialidad = "Alergología";
			_consulta = "16";
			_turnoActual = "10-25-04";
			_refCita = "10-20-33";
			_turnosSiguientes = "10-20-33, Sin llegada, 91-55-24";
		}
		else if(usuario == "2009875"){
			_title = "Gema Mañas Marcos";
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
						"notification":
						{
							"title": _title,
							"body": "Sala de espera. Quedan 1 turno.",
							"sound": "default"
						},
						"data": 
						{
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
			_especialidad = "Alergología";
			_consulta = "16";
			_turnoActual = "10-20-33";
			_refCita = "10-20-33";
			_turnosSiguientes = "Sin llegada, 91-55-24";
		}
		else if(usuario == "2009875")
		{
			_title = "Gema Mañas Marcos";
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
						"notification":
						{
							"title": _title,
							"body": "Sala de espera. Es su turno, por favor entre a la consulta.",
							"sound": "default"
						},
						"data": 
						{
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


			function EnviarEncuesta(usuario) {
			var param = JSON.stringify({ 
						  "priority": _priority,
						  "condition": _condition,
							"data": 
							{
								"silent": true,
								"title": "IMED - ¿Qué le ha parecido nuestro servicio?",
								"body": "En IMED Hospitales valoramos su opinión",
								"tipo_notificacion": "Encuesta",
								"tipo_encuesta": 2,
								"encuesta_id": "1",
								"paciente_id": usuario,
								"pregunta": "¿Cómo de satisfecho está con el servicio prestado?"
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
