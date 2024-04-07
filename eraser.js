function Eraser()
{
    this.icon = "assets/eraser.jpeg";
    this.name = "eraser";

    var eraser_x = -1;
    var eraser_y = -1;

    this.color = color(255,255,255);

    this.draw = function()
    {
        if(mouseIsPressed)
        {
            if(eraser_x == -1)
            {
                eraser_x = mouseX;
                eraser_y = mouseY;
            }
            else
            {
                push();

                // stroke only for eraser
                stroke(this.color);
                strokeWeight(10);
                line(eraser_x,eraser_y,mouseX,mouseY);

                pop();

            }
        }
        else
        {
            eraser_x = -1;
            eraser_y = -1;
        }
    }

    
}