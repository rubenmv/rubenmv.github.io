	var _contentType = 'application/json;charset=ISO-8859-15',
			_priority = "high",
			_collapsedKey = "IMED",
			_condition = "'general' in topics",
			_url = "https://fcm.googleapis.com/fcm/send",
			_especialista = "Dra. Eugenia Margarita",
			_especialidad = "Alergología",
			_authorization = 'key=' + 'AAAAKZ_ED5U:APA91bF5CEKOZqHcvpKkINtl-rNOyquzjFdBBlzz4b1IwnJuIXRbhKwmALw-r4yUfaqClqLJCqD7jkPWMQQ8p_5qYUOsPECoV5xcg9Z8s4tDbf4lPYeI1-MpTokD6bmayb1MTpdOBbuM';


/*El paciente llega a la clinica*/
	function DarLlegada(usuario) {
		var _title = "";
		if (usuario = "2010990")
		{
			_title = "Vicent Chova Pons";
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
							"turno": "10-20-20",
							"ref_cita": "10-20-33",
							"especialidad": _especialidad,
							"especialista": _especialista,
							"consulta": "16",
							"turnos_siguientes": "23-25-55, 10-20-33, Sin llegada, 91-55-24"
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
		if (usuario = "2010990")
		{
			_title = "Vicent Chova Pons";
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
							"turno": "10-25-04",
							"ref_cita": "10-20-33",
							"especialidad": _especialidad,
							"especialista": _especialista,
							"consulta": "16",
							"turnos_siguientes": "10-20-33, Sin llegada, 91-55-24"
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
		if (usuario = "2010990")
		{
			_title = "Vicent Chova Pons";
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
							"body": "Sala de espera. Quedan 3 turnos.",
							"sound": "default"
						},
						"data": 
						{
							"paciente_id": usuario,
							"tipo_notificacion": "SalaDeEspera",
							"turno": "10-20-33",
							"ref_cita": "10-20-33",
							"especialidad": _especialidad,
							"especialista": _especialista,
							"consulta": "16",
							"turnos_siguientes": "Sin llegada, 91-55-24"
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
