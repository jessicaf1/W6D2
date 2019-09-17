const Game = require("./game");
class HanoiView {
  constructor (game, $el) {
    this.game = game;
    this.el = $el;
    this.setupTowers(); 
  }

  setupTowers() {
    [0,1,2].forEach((i) => {
      this.el.append(`<ul class=${i}></ul>`)
    });
      const $ul = $("ul");

      for (let i = 0; i < 3;i ++) {
        $ul.append("<li></li>")
      };
      $lis = $("li")

  }

  render() {
    $ul1 = $ul[0] 
  }
}




module.exports = HanoiView;
