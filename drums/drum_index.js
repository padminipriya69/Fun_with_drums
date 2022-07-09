 
var noofbtns=document.querySelectorAll(".drum").length;
for(var i=0; i<noofbtns;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",event);
}

function event(){
    var btnsound=this.innerHTML;
    play(btnsound);
    animation(btnsound);
}

document.addEventListener("keydown",
function(eve){
    play(eve.key);
    animation(eve.key);
});

function play(e){

    switch (e) {
        case "c":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "j":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(btnsound)
    }
}

function animation(cur_key){
    var activebtn=document.querySelector("."+cur_key);
    activebtn.classList.add("press");

    setTimeout( function (){
        activebtn.classList.remove("press");
    },200)



}