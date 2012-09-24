//realizado por @carlosHS92

var suspenso = 10;
var sigue = true;
var tiempo = 4000;

function limpiar(){
	suspenso = 10;
	sigue = true;
	document.getElementById('result').value = " ";
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
	aleatorio();
	setTimeout("mostrar()",tiempo);
}

function aleatorio(){
	
	var participantes = new Array('premio1','premio2','premio3','premio4');
	var n=Math.floor(Math.random()*participantes.length);	
	ganador = participantes[n];
	document.getElementById('result').value = ganador;	
	while(sigue){
		
		suspenso = 25 + suspenso;
		setTimeout("aleatorio()",suspenso);
		
		if(suspenso>=tiempo){sigue = false;}
	}	
}