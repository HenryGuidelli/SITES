function createButton()
{
     var btn = document.createElement('BUTTON');
     var lbl = document.createTextNode("CLICK ME");        
     btn.appendChild(lbl);   
     btn.onclick = function()
     {
        var num = 0
        num++
        alert(num)
     }
     document.body.appendChild(btn);    
}

createButton();
