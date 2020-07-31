class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.reset = createButton('Reset');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.player1Label = createElement('h4');
    this.player1Label.hide();

    this.player2Label = createElement('h4');
    this.player2Label.hide();

    this.player3Label = createElement('h4');
    this.player3Label.hide();

    this.player4Label = createElement('h4');
    this.player4Label.hide();
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();

    this.player1Label.show();
    this.player2Label.show();
    this.player3Label.show();
    this.player4Label.show();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.player1Label.html("Player 1 :" + player.distance);
    this.player1Label.position((displayWidth/2) + 500, 50);

    this.player2Label.html("Player 2 :" + player.distance);
    this.player2Label.position((displayWidth/2) + 500, 70);

    this.player3Label.html("Player 3 :" + player.distance);
    this.player3Label.position((displayWidth/2) + 500, 90);

    this.player4Label.html("Player 4 :" + player.distance);
    this.player4Label.position((displayWidth/2) + 500, 110);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.reset.position(displayWidth - 200,50);

    this.reset.mousePressed(() =>{
      game.update(0);
      player.updateCount(0);
    })

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
  }
}
