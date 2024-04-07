function SecondPaint()
{
    this.icon = "assets/widerspread.jpg";
    this.name = "widespread paintbrush"
    this.points = 1;
    this.spread = 200;

    this.draw = function()
    {
        // mouse movements that control painting
        if(mouseIsPressed)
        {
            for(var i = 0; i < this.points; i++)
            {
                strokeWeight(50);
                line(pmouseX,pmouseY,mouseX,mouseY);
            }
        }
    }
}