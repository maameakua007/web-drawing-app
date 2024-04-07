function Rectangle()
{
    this.icon = "assets/Photoshop-Tool-Rectangle-hero-2x.jpg.img.jpg";
    this.name = "Rectangle";
   

    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;
    

    this.draw = function()
    {
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
                rect(startMouseX,startMouseY,mouseX-startMouseX,mouseY-startMouseY);

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