function submitbtn(){

    let name=document.getElementById("name").value;
    let email=document.getElementById("Email").value;
    let number=document.getElementById("number").value;
    let DOB=document.getElementById("DOB").value;
    let image=document.getElementById("image").value;

    if(name.length==0||image.length==0 ||DOB.length==0|| email.length==0 || number.length==0){
        alert("Please fill the form")
    }
    else
    {
        let thirdlayer=document.getElementById("thirdlayer")
        let result=document.createElement("div")
        result.className="result"
        thirdlayer.appendChild(result)

        let image=document.createElement("img")
        image.className="img"
        image.src="profile.jpg";
        result.appendChild(image);

        let nameP=document.createElement("p")
        nameP.innerHTML="name : " + " "+name;
        result.appendChild(nameP);

        let DOBP=document.createElement("p")
        DOBP.innerHTML="DOB : "+" "+DOB;
        result.appendChild(DOBP)

        let emailP=document.createElement("p");
        emailP.innerHTML="Email : "+ " "+email;
        result.appendChild(emailP);

        let numberP=document.createElement("p")
        numberP.innerHTML="Phone Number : "+" "+number;
        result .appendChild(numberP)

        let delbtn=document.createElement("button");
        delbtn.className="del";   
        var del=document.createTextNode("Delete")
        delbtn.appendChild(del)
        result.appendChild(delbtn)
        var del=document.getElementsByClassName("del")
        for (var i=0;i<del.length;i++){
        del[i].onclick=function(){
        var close=this.parentElement;
        close.style.display="none";

            
            
        }
    }
}}
