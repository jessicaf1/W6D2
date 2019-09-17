const Game = require("./game.js") 

class View {
  constructor(game, $el) {
    this.game = game; 
  }

  bindEvents() {
    $("li").on("click",(e) => {
      let $square = $(e.target); 
      this.makeMove($square);
    })
  }

  makeMove($square) {
    const pos = $square.data("position");
    $square.text(`${this.game.currentPlayer}`)
       if (this.game.currentPlayer === "x") {
         $square.addClass("x");
       } else {
         $square.addClass("o");
       }
       if(!this.game.board.isEmptyPos(pos)){
         alert("no good!!! very bad!")
       }
    this.game.playMove(pos);
    $square.toggleClass("unselected selected")

      if (this.game.winner()){
        alert("you won!!!!! so good!!!")
      }
 
  }

  setupBoard($el) {
    $el.append("<ul></ul>");
    const $ul = $("ul");
    $ul.addClass("board")
    for (let i =0; i < 3; i++){
      for (let j = 0; j < 3; j++){
        $ul.append(`<li data-position=[${i},${j}] class="unselected"></li>`)
      }
    }
  }
}



module.exports = View;
