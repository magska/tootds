'use strict';

var game = game || {};
var Phaser = Phaser || {};
var DwarfClass = DwarfClass || {};
var PlayerClass = PlayerClass || {};
var player = player || {};
var cursors = cursors || {};

var upKey;
var downKey;
var leftKey;
var rightKey;
var playerInfo;
var classInfo;

function create(){
  // add ground
  game.add.tileSprite(0, 0, 1920, 1920, 'ground');
  // add world bounds
  game.world.setBounds(0, 0, 1920, 1920);

  // set p2 physics to game
  game.physics.startSystem(Phaser.Physics.P2JS);

  // add player object to world
  player = game.add.sprite(200, 200, 'player');

  // init player data
  var classInfo = new DwarfClass(1);
  var playerInfo = new PlayerClass(classInfo, 'Roland The Dwarf', 1);

  // add p2 physics to player
  game.physics.p2.enable(player);

  // add game controls
  cursors = game.input.keyboard.createCursorKeys();

  // Set camera on player
  game.camera.follow(player);
  game.camera.deadzone = new Phaser.Rectangle(100, 100, 600, 400);
}
