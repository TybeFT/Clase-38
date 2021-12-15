class Game{
    constructor(){
        this.titulo = createElement('h1');
    }

    //esta funcion sirve para servir leer el estado del juego de la base de datos
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    async start(){
        if(gameState === 0){
            player = new Player();

            var playerCountRef = await database.ref('playerCount').once("value");

            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form();
            
            form.display();
        }

        car1 = createSprite(100,500,50,50);
        car2 = createSprite(300,500,50,50);
        cars = [car1,car2];
    }

    play(){
        form.hide();
        // textSize(35);
        // text("El juego va a comenzar!",120,100);

        this.titulo.html("El juego ya comenzó");
        this.titulo.position(displayWidth/2-50,0);

        Player.getPlayerInfo();
        if (totalPlayers !== undefined) {
            // var position = 130;
            var index = 0;
            var x = 0;
            var y;
            for (var plr in totalPlayers) {
                
                //position += 20
                // textSize(15);
                // text(totalPlayers[plr].name + ": " + totalPlayers[plr].distance,120, position);
                index = index + 1;
                x = x + 200;
                y = displayHeight - totalPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;

                if (index == player.index) {
                    camera.position.x = displayWidth/2;
                    camera.position.y = y;
                    cars[index-1].shapeColor = "red";
                }
            }
        }

        if(keyDown("UP_ARROW")){
            player.distance += 50;
            player.update();
        }
        drawSprites();
    }
}