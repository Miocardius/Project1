function changeContent() {
    document.getElementsByClassName("qwerty")[0].innerHTML = "<h1>abrakadabra</h1>";
}

function listen() {
    document.addEventListener("click", function (){
        console.log("click");
        changeContent()
    })
}

listen()