const View = require("./ttt-view")
const Game = require("./game")

const newGame = new Game();

  $(() => {
    const $ttt = $(".ttt");
    const newView = new View(newGame, $ttt); 
    newView.setupBoard($ttt);
    newView.bindEvents()
  });
