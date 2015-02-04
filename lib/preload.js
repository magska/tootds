'use strict';

var game = game || {};

function preload(){
  game.stage.backgroundColor = '#999999';

  game.load.image('player', 'assets/player.png');
  game.load.image('ground', 'assets/ground.png');
  game.load.image('monster', 'assets/monster.png');

}
