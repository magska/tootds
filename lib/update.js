function update(){

    if (upKey.isDown)
    {
        player.y--;
    }
    else if (downKey.isDown)
    {
        player.y++;
    }

    if (leftKey.isDown)
    {
        player.x--;
    }
    else if (rightKey.isDown)
    {
        player.x++;
    }

}
