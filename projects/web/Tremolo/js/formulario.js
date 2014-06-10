// Ya que este javascript solo se utiliza en la pagina del formulario
// creo un fichero aparte y asi no se cargan las funciones en cada pagina

// Funcion que modifica la url segun la puntuacion
function cambiaURL() {

	var puntos=0;
	// Nos dira si se ha validado el formulario correctamente
	var validado=true;
	
	// Comprobamos si todos los apartados estan marcados y modificamos puntos
	// ---------------------------------------------------------------------------
	
	// Que tipo de musica sueles escuchar
	if(document.getElementById("tipomusica1").selected==true) puntos++;
	else if(document.getElementById("tipomusica2").selected==true) puntos--;
	else if(document.getElementById("tipomusica2").selected==false) validado=false;

	
	// Que te gustaria en una guitarra
	if(document.getElementById("sonido1").checked==true) puntos++;
	else if(document.getElementById("sonido2").checked==true) puntos--;
	else if(document.getElementById("sonido3").checked==false) validado=false;

	// Zurdo o diestro
	if(document.getElementById("zurdo").checked==false && document.getElementById("diestro").checked==false) validado=false;
	
	// ---------------------------------------------------------------------------
	
	// Si ha sido validado
	if(validado){
		// Segun la puntuacion modificamos la url
		if(puntos<0){
			document.formulario.action = 'recomendacionJacksonIbanez.html';
		}
		else if(puntos>0){
			document.formulario.action = 'recomendacionLesPaul.html';
		}
		
		document.formulario.submit();
	}
}
