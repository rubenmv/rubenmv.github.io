// @author Ruben Martinez Vilar

/*
 * FUNCIONES
 */

/*jshint -W117 */

// Funcion que elimina un objeto y su listener
var removeInstance = function (obj) {
    'use strict';
    createjs.Ticker.removeListener(obj);
    stage.removeChild(obj);
};

// Funcion que mide la distancia entre dos objetos, desde el centro
var getDistance = function (obj1, obj2) {
    "use strict";
    // Distancia x e y desde los centros: regx y regy ya estan centrados
    var difx = (obj1.x) - (obj2.x),
        dify = (obj1.y) - (obj2.y);

    // Eliminamos el signo
    difx = Math.abs(difx);
    dify = Math.abs(dify);

    // La distancia total a partir de los dos vectores x e y:
    // sqrt(x^2 + y^2)
    return Math.sqrt((difx * difx) + (dify * dify));
};

// Funcion que comprueba si existe colision, metodo simple (circular)
var checkCollision = function (obj) {
    "use strict";
    var d, i,
        curBullet,
        radioSuma = enemyRadio + bulletRadio; // Primero comprobamos las balas

    // BULLETS
    // Recorremos el array de balas
    for (i = bullets.length - 1; i >= 0; i -= 1) {
        curBullet = bullets[i];
        // Distancia entre los dos centros
        d = getDistance(obj, curBullet);

        // Si la distancia es menor que la suma de los radios, colision
        if (d < radioSuma) {
            // Si son de distinto color
            if (curBullet.color !== obj.color) {
                createjs.SoundJS.play('enemyExplosion', createjs.SoundJS.INTERRUPT_NONE, 0, 0, 0, 0.8, 0);
                score += 10;
                numEnemies -= 1;
                removeInstance(obj);
            }

            removeInstance(curBullet);
            bullets.splice(i, 1);
        }
    }

    // PLAYER
    radioSuma = enemyRadio + playerRadio;
    d = getDistance(obj, player);

    // Si la distancia es menor que la suma de los radios, colision
    if (d < radioSuma) {
        numEnemies -= 1;
        removeInstance(obj);

        createjs.SoundJS.play('playerExplosion', createjs.SoundJS.INTERRUPT_NONE, 0, 0, 0, 0.8, 0);
        removeInstance(player);

        gameState = 3; // Game Over
        waitTimer = FPS; // 1 segundo
    }
};

// KEYDOWN
var handleKeyDown = function (event) {
    "use strict";
    if (gameState === 2) {
        if (event.keyCode === KEYCODE_LEFT) {
            goLeft = true;
            goRight = false;
        }
        if (event.keyCode === KEYCODE_RIGHT) {
            goLeft = false;
            goRight = true;
        }

        if (event.keyCode === KEYCODE_Z) {
            player.changeColor();
        }
    }

    if (event.keyCode === KEYCODE_X && waitTimer === 0) {
        // Si esta en juego, dispara cada SHOOT_INTERVAL frames
        if (gameState === 2) {
            if (player.color === 'white') {
                createjs.SoundJS.play('shootWhite', createjs.SoundJS.INTERRUPT_NONE, 0, 0, 0, 0.8, 0);
                bullet = new Bullet('white');
            } else {
                createjs.SoundJS.play('shootBlack', createjs.SoundJS.INTERRUPT_NONE, 0, 0, 0, 0.8, 0);
                bullet = new Bullet('black');
            }

            stage.addChild(bullet);
            bullets.push(bullet);
            waitTimer = SHOOT_INTERVAL;
        } else if (gameState === 3) { // Reinicio juego
            initGame();
        } else if (gameState === 0) { // Titulo a juego
            gameState = 1;
        }
    }
};

// KEYUP
var handleKeyUp = function (event) {
    "use strict";
    if (event.keyCode === KEYCODE_LEFT || event.keyCode === KEYCODE_RIGHT) {
        goLeft = false;
        goRight = false;
    }
};

// Funcion del ticker/update: actualiza el stage cada 30 frames
var tick = function () {
    "use strict";
    if (gameState === 2) { // Juego en marcha
        // Determinamos el numero de enemigos
        if (score < 100) {
            enemy_spawn = 15;
        } else if (score < 200) {
            enemy_spawn = 20;
        } else if (score < 500) {
            enemy_spawn = 30;
        } else if (score < 1000) {
            enemy_spawn = 40;
        }


        if (numEnemies < enemy_spawn || Math.random() > ENEMY_SPAWN_CHANCE) {
            // 50% chance
            if (Math.random() > 0.5) {
                enemy = new Enemy('white');
            } else {
                enemy = new Enemy('black');
            }

            // Agregamos el enemigo al array y al stage
            numEnemies++;
            stage.addChild(enemy);
        }

        if (waitTimer > 0) {
            waitTimer--;
        }

        // Actualizamos puntuacion
        scoreText.text = 'Puntos: ' + score;
    } else if (gameState === 3) {
        if (waitTimer > 0) { // El timer se pone a x segundos cuando el player muere
            waitTimer--;
        } else if (goText === null) { // Solo se ejecuta una vez
            gameOver();
        }
    } else if (gameState === 1) { // Inicializa juego
        initStage();
    } else if (gameState === -1) { // Cargando juego
        if (preload.loaded) initGame();
        else loadingText.text = "Loading " + Math.ceil(preload.progress * 100) + "%";
    }

    // Actualiza el stage
    stage.update();
};

// INICIA EL JUEGO
var initGame = function () {
    "use strict";

    // Inicializamos variables
    score = 0;
    waitTimer = 0;
    gameState = 0;
    bullet = null;
    goText = null;
    bullets = [];
    stage.removeAllChildren();
    createjs.Ticker.removeAllListeners();

    // Textos de pantalla de titulo
    titleText1 = new createjs.Text('Last Hope', 'bold 60px Iceberg', '#FFF');
    titleText1.x = stage.canvas.width / 2;
    titleText1.y = stage.canvas.height / 2 - 100;
    titleText1.textAlign = 'center';

    titleText2 = new createjs.Text('Blanco mata a Negro\n\nNegro mata a Blanco\n\nPero a ti te matan todos\n\nPulsa x para iniciar', 'bold 18px Iceberg', '#FFF');
    titleText2.x = stage.canvas.width / 2;
    titleText2.y = stage.canvas.height / 2 + 50;
    titleText2.textAlign = 'center';

    stage.addChild(titleText1);
    stage.addChild(titleText2);

    // Title Music
    createjs.SoundJS.play('titleMusic', createjs.SoundJS.INTERRUPT_NONE, 0, 0, -1, 0.8, 0);

    // createjs.Ticker FPS
    createjs.Ticker.setFPS(FPS);

    // Suscribir a la clase createjs.Ticker, esto llama al metodo tick
    // en un intervalo de tiempo establecido
    createjs.Ticker.addListener(this);

    // Key event listeners de javascript
    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('keyup', handleKeyUp, true);
};

// INICIA EL STAGE, LO PREPARA
var initState = function () {
    // Title Music
    createjs.SoundJS.stop('titleMusic');

    // Eliminamos los titulos
    stage.removeAllChildren();

    // Agregamos al jugador, pasandole el sprite
    player = new Player();
    stage.addChild(player);

    // Puntuacion
    scoreText = new createjs.Text('Puntos: ' + score, 'bold 16px Iceberg', '#FFF');
    scoreText.x = 15;
    scoreText.y = 15;
    stage.addChild(scoreText);

    // Instrucciones
    instructionsText = new createjs.Text('x = disparar, z = cambiar estado', 'bold 14px Iceberg', '#FFF');
    instructionsText.x = 15;
    instructionsText.y = stage.canvas.height - 20;
    stage.addChild(instructionsText);

    // Game Music
    createjs.SoundJS.play('stageMusic', createjs.SoundJS.INTERRUPT_NONE, 0, 0, -1, 0.8, 0);

    gameState = 2; // Juego en marcha

    // stage actualiza el canvas
    stage.update();
};

// JUEGO TERMINADO
var gameOver = function () {
    createjs.SoundJS.stop('stageMusic');

    stage.removeChild(scoreText);
    stage.removeChild(instructionsText);

    // Texto de game over
    goText = new createjs.Text('GAME OVER', 'bold 40px Iceberg', '#FFF');
    goText.x = stage.canvas.width / 2;
    goText.y = stage.canvas.height / 2 - 100;
    goText.textAlign = 'center';

    // Puntos finales
    finalScore = new createjs.Text('Puntos:\n\n' + score, 'bold 30px Iceberg', '#FFF');
    finalScore.x = stage.canvas.width / 2;
    finalScore.y = stage.canvas.height / 2;
    finalScore.textAlign = 'center';

    // Texto de reinicio
    restartText = new createjs.Text('Pulsa x para reiniciar', 'bold 20px Iceberg', '#FFF');
    restartText.x = stage.canvas.width / 2;
    restartText.y = stage.canvas.height - 100;
    restartText.textAlign = 'center';

    // Pero no lo insertamos al stage
    stage.addChild(goText);
    stage.addChild(finalScore);
    stage.addChild(restartText);
};

// JUEGO TERMINADO
var loadGame = function () {
    createjs.Ticker.addListener(this);
    gameState = -1;

    loadingText = new createjs.Text("Loading 0%", 'bold 28px Iceberg', '#FFF');
    loadingText.x = stage.canvas.width / 2;
    loadingText.y = 200;
    loadingText.textAlign = 'center';

    creditsText = new createjs.Text("By Ruben Martinez Vilar\n\nMade with CreateJS", 'bold 24px Iceberg', '#FFF');
    creditsText.x = stage.canvas.width / 2;
    creditsText.y = 500;
    creditsText.textAlign = 'center';

    stage.addChild(loadingText);

    // Preload para el sonido
    preload = new createjs.PreloadJS();
    preload.installPlugin(createjs.SoundJS);
    preload.loadManifest(manifest);
};

/*
 * MAIN
 */

var init = function () {
    // Comprobamos que el navegador soporta canvas
    // La doble exclamacion convierte al equivalente booleano
    if (!(!!document.createElement('canvas').getContext)) {
        var wrapper = document.getElementById('canvasWrapper');
        wrapper.innerHTML = 'Your browser does not appear to support ' +
            'the HTML5 Canvas element';
        return;
    }

    // Obtenemos el elemento canvas
    var canvas = document.getElementById('stageCanvas');

    // Pasamos el canvas al Stage de EaselJS
    // stage se convierte en el root para el resto de elementos
    stage = new createjs.Stage(canvas);

    loadGame();
};