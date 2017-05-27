var text = document.getElementById("text");
var img= document.getElementById("img");
var evento= document.getElementById("evento");
var multimedia= document.getElementById("multimedia");

// function para crear cards (contructor y luego switch para cada caso)
// function Card(message,){
//   this.message = message;
//   this.card = function(){
//     var container= document.getElementById("publica");
//
//   };
// }

// function label() {
  var input = document.getElementById("input-1");

  function call(){
    var labelEdit=document.getElementById("label-1");
    // labelEdit.classList.add("activo");
    labelEdit.setAttribute("class", "democlass"); 
    // alert("hola");
  }

input.addEventListener("focus",call);
