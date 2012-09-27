//realizado por @carlosHS92

var suspenso = 10;
var tiempo = 4000;
var participantes = new Array('Pin','Sticker');
var imagenes = new Array('img/pin.jpg','img/sticker.jpg');
var sigue = true;

function limpiar(){
	suspenso = 10;
	sigue = true;
	
	$('#products').fadeOut(function(){
		document.getElementById('products').src = 'img/productos.png';
	});
	
	$('#products').fadeIn();
	
	//document.getElementById('result').value = " ";
}

function mostrar(){
	$('#logowhite').fadeOut(function(){
		$('#logoblack').fadeIn();
		$('#loading').fadeOut(function(){
			$('#products').fadeIn();
		});
		$('body').css("background","#FFFCC4");
	});
}

function obtenerGanador(){
	$('#logoblack').fadeOut(function(){		
		$('#logowhite').fadeIn();
		$('body').css("background","#771413");
	});
	$('#products').fadeOut(function(){
		$('#loading').fadeIn();
	});
	
	setTimeout("mostrar()",tiempo);
	aleatorio();
	setTimeout("limpiar()",tiempo + 3000);
}

function aleatorio(){
	var n=Math.floor(Math.random()*participantes.length);	
	var ganador = participantes[n];
	var imagen = imagenes[n];
	document.getElementById('result').value = ganador;	
	document.getElementById('products').src = imagen;
	while(sigue){
		
		suspenso = 25 + suspenso;
		setTimeout("aleatorio()",suspenso);
		
		if(suspenso>=tiempo){sigue = false;}
	}	
}