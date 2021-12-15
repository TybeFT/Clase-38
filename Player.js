class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;

        

    }
    //esta funcion sirve para servir leer el estado del juego de la base de datos
    getCount(){
        var playerCountRef = database.ref('playerCount');
        // Funcion sirve solo para un dato
        playerCountRef.on("value", function(data){
        playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
        playerCount: count
        })
    }

    update(name){
        var playerIndex = "Jugadores/Jugador " + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }

    // Funcion estatica (no depende de nada mas que por la clase)
    static getPlayerInfo(){
        var playerInfoRef = database.ref('Jugadores');
        // Funcion de flecha sirve para referirce a un objeto
        playerInfoRef.on("value", (data) =>{
        totalPlayers = data.val();
        })
    }
}