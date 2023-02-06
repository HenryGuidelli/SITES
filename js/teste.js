function createButton()
{
     var btn = document.createElement('BUTTON');
     var lbl = document.createTextNode("CLICK ME");        
     btn.appendChild(lbl);   
     btn.onclick = function()
     {
        alert("oi do botão")
     }
     document.body.appendChild(btn);    
}

createButton();
