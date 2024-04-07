function Paint()
{
    // icon,name and points
    this.icon = "assets/paintbrush.jpg";
    this.name = "paintbrush"
    this.points = 1;
    this.spread = 5;

    this.draw = function()
    {
        // mouse movements that control painting
        if(mouseIsPressed)
        {
            for(var i = 0; i < this.points; i++)
            {
                strokeWeight(10);
                line(pmouseX,pmouseY,mouseX,mouseY);
            }
        }
    }
}