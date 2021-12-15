class Form {
    constructor() {
        this.titulo = createElement('h2');
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3');
    }

    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.titulo.hide();
    }

    display() {

        this.titulo.html('Juego De Carreras');
        this.titulo.position(displayWidth/2-50, 0);

        this.input.position(displayWidth/2-50, 100);

        this.button.position(displayWidth/2, 200);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount += 1;

            player.index = playerCount;

            player.update();

            player.updateCount(playerCount);

            this.greeting.html("Hola " + player.name);
            this.greeting.position(displayWidth/2-50, 250);
        })
    }

}