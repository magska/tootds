function update(){

    if (upKey.isDown)
    {
        player.y -= playerSpeed;
    }
    else if (downKey.isDown)
    {
        player.y += playerSpeed;
    }

    if (leftKey.isDown)
    {
        player.x -= playerSpeed;
    }
    else if (rightKey.isDown)
    {
        player.x += playerSpeed;
    }

}
