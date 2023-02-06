function createButton()
{
     var btn = document.createElement('BUTTON');
     var lbl = document.createTextNode("CLICK ME");        
     btn.appendChild(lbl);   
     btn.onclick = function()
     {
          window.print()
     }
     document.body.appendChild(btn);    
}

createButton();
