var button = document.getElementById("addToListButton");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var darkModeBtn = document.getElementById("darkmode");

function inputlength(){
    return input.value.length;
}

function click(){
    if(inputlength()>0)
    addToList();
}

function enterpress(event){
     if(inputlength()>0 && event.keyCode==13)
     addToList();
}

function addToList(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

button.addEventListener("click",click)
input.addEventListener("keypress" ,enterpress)

darkModeBtn.addEventListener("click",function(){
    console.log("working dark mode button")
    if(document.querySelector("body").classList.value==="dark-mode-on"){

    document.querySelector("body").classList.add("dark-mode-off");
    document.querySelector("body").classList.remove("dark-mode-on");
    darkModeBtn.textContent="Turn Dark Mode ON"
    
    }
    else if(document.querySelector("body").classList.value==="dark-mode-off")
    {
        document.querySelector("body").classList.remove("dark-mode-off");
        document.querySelector("body").classList.add("dark-mode-on");
        darkModeBtn.textContent="Turn Dark Mode OFF"
    }
})

 