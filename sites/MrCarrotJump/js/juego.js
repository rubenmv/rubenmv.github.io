var width = 520, 
	height = 600,
	gLoop,
	points = 0,
	state = true,
	c = document.getElementById('c'), 
	ctx = c.getContext('2d');
			
	c.width = width;
	c.height = height;


var clear = function(){
	ctx.fillStyle = '#d0e7f9';
	ctx.clearRect(0, 0, width, height);
	ctx.beginPath();
	ctx.rect(0, 0, width, height);
	ctx.closePath();
	ctx.fill();
}

var howManyCircles = 10, circles = [];

for (var i = 0; i < howManyCircles; i++) 
	circles.push([Math.random() * width, Math.random() * height, Math.random() * 100, Math.random() / 2]);

var DrawCircles = function(){
	for (var i = 0; i < howManyCircles; i++) {
		ctx.fillStyle = 'rgba(255, 255, 255, ' + circles[i][3] + ')';
		ctx.beginPath();
		ctx.arc(circles[i][0], circles[i][1], circles[i][2], 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
	}
};

var MoveCircles = function(e){
	for (var i = 0; i < howManyCircles; i++) {
		if (circles[i][1] - circles[i][2] > height) {
			circles[i][0] = Math.random() * width;
			circles[i][2] = Math.random() * 100;
			circles[i][1] = 0 - circles[i][2];
			circles[i][3] = Math.random() / 2;
		}
		else {
			circles[i][1] += e;
		}
	}
};

var player = new (function(){
	var jugador = this;
	jugador.image = new Image();

	jugador.image.src = "conejo.png"
	jugador.width = 65;
	jugador.height = 95;
	jugador.frames = 1;
	jugador.actualFrame = 0;
	jugador.X = 0;
	jugador.Y = 0;	

	jugador.isJumping = false;
	jugador.isFalling = false;
	jugador.jumpSpeed = 0;
	jugador.fallSpeed = 0;
	
    jugador.jump = function() {
		if (!jugador.isJumping && !jugador.isFalling) {
			jugador.fallSpeed = 0;
			jugador.isJumping = true;
			jugador.jumpSpeed = 17;
		}
	}
	
	jugador.checkJump = function() {
		//a lot of changes here
				
		if (jugador.Y > height*0.4) {
			jugador.setPosition(jugador.X, jugador.Y - jugador.jumpSpeed);		
		}
		else {
			if (jugador.jumpSpeed > 10) 
				points++;
			// if player is in mid of the gamescreen
			// dont move player up, move obstacles down instead
			MoveCircles(jugador.jumpSpeed * 0.5);
			
			platforms.forEach(function(platform, ind){
				platform.y += jugador.jumpSpeed;

				if (platform.y > height) {
					var type = ~~(Math.random() * 5);
					if (type == 0) 
						type = 1;
					else 
						type = 0;
					
					platforms[ind] = new Platform(Math.random() * (width - platformWidth), platform.y - height, type);
				}
			});
		}
		
		
		jugador.jumpSpeed--;
		if (jugador.jumpSpeed == 0) {
			jugador.isJumping = false;
			jugador.isFalling = true;
			jugador.fallSpeed = 1;
		}
	
	}
	
	jugador.fallStop = function(){
		jugador.isFalling = false;
		jugador.fallSpeed = 0;
		jugador.jump();	
	}
	
	jugador.checkFall = function(){
		if (jugador.Y < height - jugador.height) {
			jugador.setPosition(jugador.X, jugador.Y + jugador.fallSpeed);
			jugador.fallSpeed++;
		} else {
			if (points == 0) 
				jugador.fallStop();
			else 
				GameOver();
		}
	}
	
	jugador.moveLeft = function(){
		if (jugador.X > 0) {
			jugador.setPosition(jugador.X - 5, jugador.Y);
		}
	}
	
	jugador.moveRight = function(){
		if (jugador.X + jugador.width < width) {
			jugador.setPosition(jugador.X + 5, jugador.Y);
		}
	}

	
	jugador.setPosition = function(x, y){
		jugador.X = x;
		jugador.Y = y;
	}
	
	jugador.interval = 0;
	jugador.draw = function(){
		try {
			ctx.drawImage(jugador.image, 0, jugador.height * jugador.actualFrame, jugador.width, jugador.height, jugador.X, jugador.Y, jugador.width, jugador.height);
		} 
		catch (e) {
		};
		
		if (jugador.interval == 8 ) {
			if (jugador.actualFrame == jugador.frames) {
				jugador.actualFrame = 0;
			}
			else {
				jugador.actualFrame++;
			}
			jugador.interval = 0;
		}
		jugador.interval++;		
	}
})();


player.setPosition(~~((width-player.width)/2), height - player.height);
player.jump();

document.onmousemove = function(e){
	if (player.X + c.offsetLeft > e.pageX) {
		player.moveLeft();
	} else if (player.X + c.offsetLeft < e.pageX) {
		player.moveRight();
	}
	
}
	var nrOfPlatforms = 7, 
		platforms = [],
		platformWidth = 60,
		platformHeight = 20;
		 
	var Platform = function(x, y, type){
		var that=this;
		
		that.firstColor = '#FF8C00';
		that.secondColor = '#EEEE00';
		that.onCollide = function(){
			player.fallStop();
		};
		
		if (type === 1) {
			that.firstColor = '#AADD00';
			that.secondColor = '#698B22';
			that.onCollide = function(){
				player.fallStop();
				player.jumpSpeed = 50;
			};
		}
		
		

		that.x = ~~ x;
		that.y = y;
		that.type = type;
		
		//NEW IN PART 5
		that.isMoving = ~~(Math.random() * 2);
		that.direction= ~~(Math.random() * 2) ? -1 : 1;
			
		that.draw = function(){
			ctx.fillStyle = 'rgba(255, 255, 255, 1)';
			var gradient = ctx.createRadialGradient(that.x + (platformWidth/2), that.y + (platformHeight/2), 5, that.x + (platformWidth/2), that.y + (platformHeight/2), 45);
			gradient.addColorStop(0, that.firstColor);
			gradient.addColorStop(1, that.secondColor);
			ctx.fillStyle = gradient;
			ctx.fillRect(that.x, that.y, platformWidth, platformHeight);
		};
	
		return that;
	};
		
	var generatePlatforms = function(){
		var position = 0, type;
		for (var i = 0; i < nrOfPlatforms; i++) {
			type = ~~(Math.random()*2);
			if (type == 0) 
				type = 1;
			else 
				type = 0;
			platforms[i] = new Platform(Math.random() * (width - platformWidth), position, type);
			if (position < height - platformHeight) 
				position += ~~(height / nrOfPlatforms);
		}
	}();
	
	var checkCollision = function(){
	platforms.forEach(function(e, ind){
		if (
		(player.isFalling) && 
		(player.X < e.x + platformWidth) && 
		(player.X + player.width > e.x) && 
		(player.Y + player.height > e.y) && 
		(player.Y + player.height < e.y + platformHeight)
		) {
			e.onCollide();
		}
	})
	}

var GameLoop = function(){
	clear();
	//MoveCircles(5);
	DrawCircles();

	if (player.isJumping) player.checkJump();
	if (player.isFalling) player.checkFall();
	
	player.draw();
	
	platforms.forEach(function(platform, index){
		if (platform.isMoving) {
			if (platform.x < 0) {
				platform.direction = 1;
			} else if (platform.x > width - platformWidth) {
				platform.direction = -1;
			}
				platform.x += platform.direction * (index / 2) * ~~(points / 100);
			}
		platform.draw();
	});
	
	checkCollision();
	
	ctx.fillStyle = "Black";
	ctx.fillText("PUNTOS:" + points, 10, height-10);
	
	if (state)
		gLoop = setTimeout(GameLoop, 1000 / 50);
}

	var GameOver = function(){
		state = false;
		clearTimeout(gLoop);
		setTimeout(function(){
			clear();
			
			ctx.fillStyle = "Black";
			ctx.font = "10pt Arial";
			ctx.fillText("JUEGO TERMINADO", width / 2 - 60, height / 2 - 50);
			ctx.fillText("RESULTADO: " + points, width / 2 - 60, height / 2 - 30);
		}, 100);
		
	};
	
GameLoop();
