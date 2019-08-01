console.log("Hello World");
var name= "bob";
console.log(name);
name= 15;
console.log(name);

for(var i =0; i<5; i++){
  console.log(i)
}
if(name < 18){
  console.log("name is less than 18")
}else{


//<li onmouseover="scaleUp(this,'30px')" onmouseout="scaleUp(this,'25px')"> Scale up </li>
//var text = document.getElementsById
//text.onmouseover = function(obj,text){
  //this.style.fontSize = size;
}


var images = document.getElementsByTagName("img");
for (j in images){
  var image = images[j];
  let origheight = image.height;
  let origwidth= image.width;

  image.onmouseover=function(){
    console.log(this)
    this.height= 300;
    this.width= 300;
  };

  image.onmouseout=function(){
    this.height= origheight;
    this.width= origwidth;
  };

};

let imageScrs = ["img/vinyl.jpg",
                  "img/cd.jpg",
                  "img/recordcollection.jpg"];

let button = document.getElementById("slide");
let imageHolder = document.getElementById("cd");
 var i = 0;

button.onclick = function(ev){
  imageHolder.src = imageScrs[i];
  i ++;
  if (i==3){
    i = 0;
  }

}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function mySongs(){
  document.getElementById("Playlist").classList.toggle("show");
}

function myList(){
  document.getElementById("Rock").classList.toggle("show");
}
function mySoul(){
  document.getElementById("RnB").classList.toggle("show");
}

function myBroadway(){
  document.getElementById("musical").classList.toggle("show");
}

function myPoetry(){
  document.getElementById("slam").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
