var input = document.getElementById("add")
    button = document.getElementById("enter")
    ul   =   document.getElementById("listid");
    
    function inputValue(){
        return input.value.length;
     
         }

    function createEment(){

        
       if(inputValue() > 0){
            var li = document.createElement("li");
            li.innerHTML="<a href='#' ><span class='del'>x</span></a>";
            li.className="done";
            li.style.textDecoration="none";
            li.appendChild(document.createTextNode(input.value));
            ul.appendChild(li);
            input.value ="";
       }
    }
    function markdone(e){
        
        if(e.target.className ==="del"){

            if(confirm("do u want to delete")){
            e.target.parentElement.parentElement.remove();
            }
        }
    }
                  
        
   
  
        button.addEventListener("click", createEment);

        ul.addEventListener("click", markdone);
        ul.addEventListener("click", function(e){
        
            if(e.target.className ==="done"){

                alert("do you want to mark as done");
                e.target.style.textDecoration="line-through";
            }        
            });