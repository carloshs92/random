//realizado por @carlosHS92

var suspenso = 10;
var tiempo = 4000;
var participantes = new Array('Pin','Sticker');
var imagenes = new Array('img/pin.jpg','img/sticker.jpg');
var sigue = true;

function trick(){ //truco
	$('#regalo').css("border","none");
}

function mostrar(){
	$('#logowhite').fadeOut(function(){
		$('#logoblack').fadeIn();
		$('#loading').fadeOut(function(){
			$('#regalo').fadeIn();
		});		
	});
}

function obtenerGanador(){
	$('#logoblack').fadeOut(function(){		
		$('#logowhite').fadeIn();		
	});
	$('#regalo').fadeOut(function(){
		$('#loading').fadeIn();
		setTimeout("mostrar()",tiempo);
		aleatorio();
		setTimeout("limpiar()",tiempo + 3000);
	});
	
	
}

function aleatorio(){
	var n=Math.floor(Math.random()*participantes.length);	
	var ganador = participantes[n];
	var imagen = imagenes[n];
	document.getElementById('result').value = ganador;	
	document.getElementById('regalo').src = imagen;
	$('#regalo').css("border","3px solid #808080");
	while(sigue){
		
		suspenso = 25 + suspenso;
		setTimeout("aleatorio()",suspenso);
		
		if(suspenso>=tiempo){sigue = false;}
	}	
}
