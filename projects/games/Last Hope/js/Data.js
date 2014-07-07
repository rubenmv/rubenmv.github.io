// @author Ruben Martinez Vilar

/// <summary>
/// Constantes y variables globales
/// </summary>

// turn off 'is not defined' rule
/*jshint -W117 */

// ASSETS
var ENEMY_SPR_WHITE = 'assets/graphics/enemy_white.png',
	ENEMY_SPR_BLACK = 'assets/graphics/enemy_black.png',
	BULLET_SPR_WHITE = 'assets/graphics/bullet_white.png',
	BULLET_SPR_BLACK = 'assets/graphics/bullet_black.png';

// Player spritesheet
var PLAYER_SPR = new createjs.SpriteSheet({
	images: ['./assets/graphics/player.png'],
    frames: {
        width: 32,
		height: 32,
        count: 2,
		// El punto sobre el que se mueve, rota, etc.
        regX: 16,
        regY: 16
    },
    animations: {
        white: [0, 0],
		black: [1, 1]
	}
});

var manifest = [
	{id: 'stageMusic', src: 'assets/sound/GiveUsTime.ogg'},
	{id: 'titleMusic', src: 'assets/sound/LastHope.ogg'},
	{id: 'enemyExplosion', src: 'assets/sound/enemy_explosion.ogg'},
	{id: 'playerExplosion', src: 'assets/sound/player_explosion.ogg'},
	{id: 'shootWhite', src: 'assets/sound/shootWhite.ogg'},
	{id: 'shootBlack', src: 'assets/sound/shootBlack.ogg'}
];

// Constantes
var FPS = 30,
	BULLET_SPEED = 10,
	ENEMY_SPEED = 3,
	ENEMY_BULLET = 5,
	ENEMY_SPAWN_CHANCE = 0.98,
	MAX_SPEED = 8,
	SHOOT_INTERVAL = 8, // Ticks/frames to wait
	ACCEL = 1,
	FRIC = 0.9;

/*
 * VARIABLES
 */

 
// Objetos
// Aunque no es necesario declararlos pero asi hay mayor claridad
var stage	= null,
	player	= null,
	bullet	= null,
	enemy	= null;
var preload	= null;
 
var score = 0,
	waitTimer = 0, // Temporizador de varios usos
	enemy_spawn = 0,
	gameState = -1;
	// -1 = Cargando contenido,
	// 0 = pantalla titulo,
	// 1 = inicializa juego,
	// 2 = juego en marcha,
	// 3 = game over

// Texto
var	loadingText = null,
	creditsText = null,
	scoreText	= null,
	goText		= null,
	titleText1	= null,
	titleText2	= null,
	finalScore	= null,
	restartText	= null,
	instructionsText = null;
	
// Arrays
var numEnemies = 0;
var bullets = [];

// Radios, para las colisiones
var enemyRadio = 14;
var playerRadio = 14;
var bulletRadio = 0.5;

// Teclado
var KEYCODE_LEFT = 37;
var	KEYCODE_RIGHT = 39;
var	KEYCODE_X = 88;
var	KEYCODE_Z = 90;
var	goRight = false;
var goLeft = false;

