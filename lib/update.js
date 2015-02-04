'use strict';

var playerInfo = playerInfo || {};
var player = player || {};
var cursors = cursors || {};
var game = game || {};

function update(){
  player.body.setZeroVelocity();

  if (cursors.up.isDown)
    {
        player.body.moveUp(playerInfo.getMovementSpeed());
    }
    else if (cursors.down.isDown)
    {
        player.body.moveDown(playerInfo.getMovementSpeed());
    }

    if (cursors.left.isDown)
    {
        player.body.moveLeft(playerInfo.getMovementSpeed());
    }
    else if (cursors.right.isDown)
    {
        player.body.moveRight(playerInfo.getMovementSpeed());
    }
}

function render(){
  var zone = game.camera.deadzone;

  // game.context.fillStyle = 'rgba(255,0,0,0.6)';
  // game.context.fillRect(zone.x, zone.y, zone.width, zone.height);

  game.debug.cameraInfo(game.camera, 32, 32);
  game.debug.spriteCoords(player, 32, 500);

}
