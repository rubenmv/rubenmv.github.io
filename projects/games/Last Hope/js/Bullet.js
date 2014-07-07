// @author Ruben Martinez Vilar

/* <summary>
 * Balas
 * </summary> */

/*jshint -W117 */
 
(function (window) {
    "use strict";
        
	// Variables publicas
	Bullet.prototype.type = null;
	Bullet.prototype.color = null;

	function Bullet(c) {
		this.initialize(c);
	}
	Bullet.prototype = new createjs.Bitmap();
	
	// Constructor
	Bullet.prototype.Bitmap_initialize = Bullet.prototype.initialize;
	
	// Funcion inicializadora
	Bullet.prototype.initialize = function (c) {
		if (c === 'white') {
			this.Bitmap_initialize(BULLET_SPR_WHITE);
        } else {
			this.Bitmap_initialize(BULLET_SPR_BLACK);
        }

		this.type = 'bullet';
		this.color = c;

		// Punto sobre el centro de la bala
		this.regX = bulletRadio;
		this.regY = bulletRadio;
		
		// Posicion inicial de la nave
		this.x = player.x;
		this.y = player.y - 12;

		// Agrego el listener para esta clase
		createjs.Ticker.addListener(this);
	};

	// Funcion del ticker/update: actualiza el stage cada 30 frames
	// Esta completa el tick del Main que va sobre el root (window)
	Bullet.prototype.tick = function () {
		// Cuando sale del todo de la pantalla, se elimina
		if (this.y < -bulletRadio) {
			removeInstance(this);
		} else {
            this.y -= BULLET_SPEED; // Avanza
        }
	};
	
	// Como es una shape, la width la obtenemos de radio ya definido
	Bullet.prototype.getWidth = function () {
		return bulletRadio * 2;
	};
    
    window.Bullet = Bullet;
}(window)); // Esto hace que se ejecute automaticamente y minimiza con window

