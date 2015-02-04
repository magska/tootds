var upKey;
var downKey;
var leftKey;
var rightKey;

function create(){

  player = game.add.sprite(game.world.height/2, game.world.width/2, 'player');

  upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
}
