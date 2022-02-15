    function addfunction(){ 
       if(document.querySelector("#input").value.length==0)
         {
            alert("Enter the text")
         }
         else
         {
            var container=document.createElement("div");
            container.className="con"
            document.getElementById("item").appendChild(container);
            var add =document.createElement("p")
            add.innerHTML=document.getElementById("input").value
            container.appendChild(add)
          }
      
    //Strike button

            var strikeBtn = document.createElement("button")
            strikeBtn.innerHTML="&#10003"
            strikeBtn.className = "strike";
            container.appendChild(strikeBtn);
            var strike = document.getElementsByClassName("strike")
            for(var j=0;j<strike.length;j++){
            strike[j].onclick = function(){
            var crossDiv =this.parentElement;
            var strikediv=crossDiv.children[0];
            strikediv.style.textDecoration = "line-through";
        }
      }
      //deleting Button
        var deletebtn=document.createElement("button");
        deletebtn.className="del";   
        var del=document.createTextNode("X")
        deletebtn.appendChild(del)
        container.appendChild(deletebtn)
        var del=document.getElementsByClassName("del")
        for (var i=0;i<del.length;i++){
        del[i].onclick=function(){
        var close=this.parentElement;
        close.style.display="none";
        }
       }
}