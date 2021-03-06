// Realiza la inicializaci�n en el arranque.
window.addEventListener("load", function () {

	// Obtener el elemento canvas.
	var myCanvas = document.querySelector('canvas');
	if (!myCanvas || !myCanvas.getContext) {
		return;
	}

	// Obtener el contexto canvas 2d
	ctx = myCanvas.getContext('2d');

	// Iniciar el juego.
	playBackgroundMusic();
	width  = myCanvas.width;
	height = myCanvas.height;
	defenderXPosition = width - 43;
	loadAllImages();

	// Manejar los eventos de rat�n (mover la imagen de defensor-tanque).
	document.addEventListener("mousemove", moveDefender, false);
	document.addEventListener("mousedown", fireBullet, false);
	document.addEventListener("keydown", keyDown, false);
}, false);


// Reproducir m�sica de fondo continuamente!
function playBackgroundMusic() {
	
	var audio = document.createElement('audio');
	audio.addEventListener("canplay", function () { audio.play(); }, false);
	audio.loop = true;
	audio.volume = 0.5;
	audio.src = "Audio/BackgroundMusic.mp3"; 
}


// Cargar todas las im�genes del juego.
function loadAllImages() { 

	sky = ctx.createLinearGradient(0, width, 0, height);
	sky.addColorStop(0, SKY_COLOR);
	sky.addColorStop(1, '#FFFFFF');

	countImagesLoading++;
	mountains = new Image();
	mountains.src = 'Images/mountains.png';
	mountains.addEventListener("load", function () { countImagesLoading--; }, false);

	countImagesLoading++;
	cityscape = new Image();
	cityscape.src = 'Images/cityscape.png';
	cityscape.addEventListener("load", function () { countImagesLoading--; }, false);

	countImagesLoading++;
	ground = new Image();
	ground.src = 'Images/ground.png';
	ground.addEventListener("load", function () { countImagesLoading--; }, false);

	countImagesLoading++;
	defender = new Image();
	defender.src = 'Images/defender.png';
	defender.addEventListener("load", function () { countImagesLoading--; }, false);

	countImagesLoading++;
	cloud1 = new Image();
	cloud1.src = 'Images/cloud1.png';
	cloud1.addEventListener("load", function () { countImagesLoading--; }, false);

	countImagesLoading++;
	cloud2 = new Image();
	cloud2.src = 'Images/cloud2.png';
	cloud2.addEventListener("load", function () { countImagesLoading--; }, false);

	countImagesLoading++;
	cloud3 = new Image();
	cloud3.src = 'Images/cloud3.png';
	cloud3.addEventListener("load", function () { countImagesLoading--; }, false);

	countImagesLoading++;
	sun = new Image();
	sun.src = 'Images/sun.png';
	sun.addEventListener("load", function () { countImagesLoading--; }, false);

	countImagesLoading++;
	bullet = new Image();
	bullet.src = 'Images/bullet.png';
	bullet.addEventListener("load", function () { countImagesLoading--; }, false);

	countImagesLoading++;
	wheel = new Image();
	wheel.src = 'Images/wheel.png';
	wheel.addEventListener("load", function () { countImagesLoading--; }, false);

	countImagesLoading++;
	spaceship = new Image();
	spaceship.src = 'Images/spaceship.png';
	spaceship.addEventListener("load", function () { countImagesLoading--; }, false);

	countImagesLoading++;
	explosion = new Image();
	explosion.src = 'Images/explosion.png';
	explosion.addEventListener("load", function () { countImagesLoading--; }, false);

	setTimeout(checkIfAllImagesLoaded, 100);
}


// Comprueba si todas las im�genes se han cargado, si as� se inicia el juego.
function checkIfAllImagesLoaded() {
	
	// Si todas las im�genes se han cargado por ahora, establecer re-dibujar cada 50 ms y una nueva nave espacial cada 1000ms.
	if (countImagesLoading == 0) {
		setInterval(draw, 50);
		setInterval(createSpaceship, 1000);
	}
	else {
		setTimeout(checkIfAllImagesLoaded, 100);
	}
}
