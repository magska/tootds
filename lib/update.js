function update(){
  player.body.setZeroVelocity();

  if (cursors.up.isDown)
    {
        player.body.moveUp(300)
    }
    else if (cursors.down.isDown)
    {
        player.body.moveDown(300);
    }

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -300;
    }
    else if (cursors.right.isDown)
    {
        player.body.moveRight(300);
    }
}

function render(){
  var zone = game.camera.deadzone;

  // game.context.fillStyle = 'rgba(255,0,0,0.6)';
  // game.context.fillRect(zone.x, zone.y, zone.width, zone.height);

  game.debug.cameraInfo(game.camera, 32, 32);
  game.debug.spriteCoords(player, 32, 500);

}
