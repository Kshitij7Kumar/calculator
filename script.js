console.log("javascript loaded");

let display = document.getElementById("result")
let buttons= document.querySelectorAll("button")
buttons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log("button clicked")
        let value = button.innerText;
        console.log(value)
        if(value === "C"){
            display.value=""
        }
        else if(value === "="){
            display.value=eval(display.value)
            console.log(value)
        }
        else{
            display.value += value;
        }
    })
 })