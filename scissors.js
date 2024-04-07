function Cut()
{
    this.icon = "assets/scissors.jpg";
    this.name = "cut";

   

    var previousX = -1;
    var previousY = -1;


    this.draw = function()
    {


        if(mouseIsPressed)
        { 
            if(select_mode == 0)
            {
                if(previousX == -1)
                {
                    previousX = mouseX;
                    previousY = mouseY;
                }
                else
                {
                    noFill();
                    line(previousX,previousY,mouseX,mouseY);
                    previousX = mouseX;
                    previousY = mouseY;
                }
            }
            else if(select_mode == 1)
            {
                updatePixels();
    
                noStroke();
                fill(255,0,0,100);
                rect(selected_area.x,selected_area.y,selected_area.w,selected_area.h);
            }

        }
        else 
        {
            previousX = -1;
            previousY = -1;
        }
       
    }

    this.clicked = function() {
        if (toolbox.selectedTool == this) 
        {
            cut_button.show();
        } else 
        {
            cut_button.hide();
        }
    }
    
}