class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3');
    }

    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display() {
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/2 + 200, 0);

        this.input.position(displayWidth/2 - 10, displayHeight/2 - 110);

        this.button.position(displayWidth/2 - 10, displayHeight/2 - 85);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(200, 250);

        });
    }
}