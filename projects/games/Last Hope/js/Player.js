// @author Ruben Martinez Vilar

/// <summary>
/// Player's ship
/// </summary>

/*jshint -W117 */

(function (window) {
    "use strict";
    // Variables publicas
    var type = null,
        color = null;

    function Player() {
        this.initialize(PLAYER_SPR);
    }
    Player.prototype = new createjs.BitmapAnimation();

    // Constructor
    Player.prototype.BitmapAnimation_initialize = Player.prototype.initialize;

    // Funcion inicializadora
    Player.prototype.initialize = function (PLAYER_SPR) {
        this.BitmapAnimation_initialize(PLAYER_SPR);

        this.type = 'player';
        this.color = 'white';

        this.gotoAndPlay(this.color);

        // Variables publicas
        this.xspeed = 0;
        this.yspeed = 0;

        // Variables punlicas, se acceden por funciones getWidth/Height
        this.width = this.spriteSheet.getFrame(0).rect.width;
        this.height = this.spriteSheet.getFrame(0).rect.height;

        // Posicion inicial de la nave
        // Recuerdo que regx y regy estan en el centro de la nave
        this.x = stage.canvas.width / 2;
        this.y = stage.canvas.height - 50;


        // Agrego el listener para esta clase
        createjs.Ticker.addListener(this);
    };

    // Funcion del ticker/update: actualiza el stage cada 30 frames
    // Esta completa el tick del Main que va sobre el root (window)
    Player.prototype.tick = function () {
        // Si no esta a max velocidad, continua acelerando
        if (Math.abs(this.xspeed) < MAX_SPEED) {
            if (goLeft) {
                this.xspeed -= ACCEL;
            }
            if (goRight) {
                this.xspeed += ACCEL;
            }
        }

        // Si la velocidad es muy baja, se pone a cero
        if (Math.abs(this.xspeed) < 0.5) {
            this.xspeed = 0;
        }
        // Que no aplique friccion si ya esta parado
        else {
            this.xspeed *= FRIC;
        }

        // Aplicamos la posicion final, teniendo cuenta los limites
        if (this.x < this.width / 2) {
            this.x = this.width / 2;
            this.xspeed = 0;
        } else if (this.x > stage.canvas.width - this.width / 2) {
            this.x = stage.canvas.width - this.width / 2;
            this.xspeed = 0;
        } else {
            this.x += this.xspeed;
        }
    };

    Player.prototype.changeColor = function () {
        if (this.color == 'white') {
            this.color = 'black';
            this.gotoAndPlay(this.color);
        } else {
            this.color = 'white';
            this.gotoAndPlay(this.color);
        }
    };

    Player.prototype.getWidth = function () {
        return this.width;
    };

    Player.prototype.getHeight = function () {
        return this.height;
    };

    window.Player = Player;
}(window)); // Esto hace que se ejecute automaticamente y minimiza con window