var upKey;
var downKey;
var leftKey;
var rightKey;

function create(){
  ground = game.add.sprite(0, 0, 'ground');
  player = game.add.sprite(game.world.height/2, game.world.width/2, 'player');


  //  add arcade physics to player
  game.physics.arcade.enable(player);


  // user collide with world bounds
  player.body.collideWorldBounds = true;


  // player controls
  upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
}
