// @author Ruben Martinez Vilar

/* <summary>
 * Enemigos
 * </summary> */

/*jshint -W117 */

(function (window) {

    // Variables publicas
    Enemy.prototype.type = null;
    Enemy.prototype.color = null;

    function Enemy(c) {
        this.initialize(c);
    }
    Enemy.prototype = new createjs.Bitmap();

    // Constructor
    Enemy.prototype.Bitmap_initialize = Enemy.prototype.initialize;

    // Funcion inicializadora
    Enemy.prototype.initialize = function (c) {
        if (c == 'white') {
            this.Bitmap_initialize(ENEMY_SPR_WHITE);
        } else {
            this.Bitmap_initialize(ENEMY_SPR_BLACK);
        }

        this.type = 'enemy';
        this.color = c;

        // Punto sobre el centro del enemigo
        this.regX = enemyRadio;
        this.regY = enemyRadio;

        // Los enemigos aparecen
        this.x = Math.random() * (stage.canvas.width - this.image.width) + enemyRadio;
        this.y = Math.random() * (-200);

        // Agrego el listener para esta clase
        createjs.Ticker.addListener(this);
    };

    // Funcion del ticker/update: actualiza el stage cada 30 frames
    // Esta completa el tick del Main que va sobre el root (window)
    Enemy.prototype.tick = function () {
        // Si el objeto sale de la pantalla...
        if (this.y > stage.canvas.height ||
            this.x > stage.canvas.width + enemyRadio ||
            this.x < -enemyRadio) {
            if (gameState == 2 && score > 0) // Si no se ha terminado resta puntos
                score -= 5;
            numEnemies--;
            removeInstance(this);
        } else {
            this.y += ENEMY_SPEED;
        }

        if (gameState == 3) {
            if (this.x <= stage.canvas.width / 2) {
                this.x -= 5;
            } else {
                this.x += 5;
            }
        }

        // El enemigo comprueba la colision, ya en todos los casos
        // es este uno de los dos objetos
        checkCollision(this);
    };

    Enemy.prototype.getWidth = function () {
        return this.image.width;
    };

    Enemy.prototype.getHeight = function () {
        return this.image.height;
    };

    window.Enemy = Enemy;
}(window)); // Esto hace que se ejecute automaticamente