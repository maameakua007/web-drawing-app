function CurveToTool()
{
    this.icon = "assets/360_F_323667240_1wDLHiC4AXO9WmxoOPf0iOhBaEn5nEne.jpg"
    this.name = "CurveTo";

    var startMouseX = -1;
    var startMouseY = -1;
    var control1_X, control1_Y, control2_X, control2_Y;
    var drawing = false;

    this.draw = function()
    {
        // drawing curve
        if(mouseIsPressed)
        {
            if(startMouseX == -1)
            {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;

                //loading pixel array 
                loadPixels();
            }
            else
            {
                // control points 
                control1_X = startMouseX + 50;
                control1_Y = startMouseY + 50;
                control2_X = mouseX - 50;
                control2_Y = mouseY - 50;

                // saving added pixels 
                updatePixels();
                strokeWeight(2);
                noFill();
                curve(startMouseX,startMouseY, //start 
                      control1_X,control1_Y, // control 1
                      control2_X,control2_Y, // control 2
                      mouseX,mouseY // end
                );

            }

        }
        else if(drawing)
        {
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    
    }
}