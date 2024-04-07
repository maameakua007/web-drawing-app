function Ellipses()
{
    // name and icon 
    this.icon = "assets/circle_noun_001_02738.jpg";
    this.name = "Ellipse";

    // calling the variables for the shape
    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;

    this.draw = function()
    {
        // if mouse is pressed
        if(mouseIsPressed)
        {
            if(startMouseX == -1)
            {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                loadPixels();
            }
            else
            {
                updatePixels();
                noFill();
                strokeWeight(2);
                var x = mouseX - startMouseX;
                var y = mouseY - startMouseY;

                ellipse(startMouseX + x/2, startMouseY + y/2, abs(x),abs(y));
            }
        
        }
        else if(drawing)
        {
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }

        //this.cursor = 'crosshair';
        //displayColorPalette();
    }
}