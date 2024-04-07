function Marker ()
{
    this.icon = "assets/marker.jpg";
    this.name = "marker";

    // similar to the pencil(drawing line from previous mouse location to current)
    var previousMouseX = -1;
    var previousMouseY = -1;

    this.draw = function()
    {
        // if the mouse is pressed to draw 
        if(mouseIsPressed)
        {
            if(previousMouseX == -1)
            {
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
            else
            {
                strokeWeight(5);
                line(previousMouseX,previousMouseY,mouseX,mouseY);
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
        }
        else
        {
            previousMouseX = -1;
            previousMouseY = -1;
        }
    }
}