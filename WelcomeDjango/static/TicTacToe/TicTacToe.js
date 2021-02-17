var td = document.querySelectorAll("td");
var reset = document.querySelector("h1");
var gindex,gameover;

function resetAll(){
    td.forEach( function(item){
        item.textContent= ""

    })
    document.querySelector("h1").textContent= "Tic Tac Toe"
    highlight(gindex,"black","#FF94E9");
    console.log("All cleared!");
    gameover=false;
}


function game_over(result,index){
console.log("Game over invoked!");
    if(result==15){

    document.querySelector("h1").textContent= "Player-2 Won";

    }else if(result==21){
       document.querySelector("h1").textContent= "Player-1 Won";
    }else{
    document.querySelector("h1").textContent= "Game over!!!";
    }
        highlight(index,"yellow","green");
        gameover=true;
}

    function highlight(index,bgcolor,textcolor){

   switch (index) {
          case 0:
            td[0].style.backgroundColor = bgcolor;
            td[0].style.color = textcolor;
            td[1].style.backgroundColor = bgcolor;
            td[1].style.color = textcolor;
            td[2].style.backgroundColor = bgcolor;
            td[2].style.color = textcolor;
            break;
          case 1:
            td[3].style.backgroundColor = bgcolor;
            td[4].style.backgroundColor = bgcolor;
            td[5].style.backgroundColor = bgcolor;
            td[3].style.color = textcolor;
            td[4].style.color = textcolor;
            td[5].style.color = textcolor;
            break;
          case 2:
            td[6].style.backgroundColor = bgcolor;
            td[7].style.backgroundColor = bgcolor;
            td[8].style.backgroundColor = bgcolor;
            td[6].style.color = textcolor;
            td[7].style.color = textcolor;
            td[8].style.color = textcolor;
            break;
          case 3:
            td[0].style.backgroundColor = bgcolor;
            td[3].style.backgroundColor = bgcolor;
            td[6].style.backgroundColor = bgcolor;
            td[0].style.color = textcolor;
            td[3].style.color = textcolor;
            td[6].style.color = textcolor;
            break;
          case 4:
            td[1].style.backgroundColor = bgcolor;
            td[4].style.backgroundColor = bgcolor;
            td[7].style.backgroundColor = bgcolor;
            td[1].style.color = textcolor;
            td[4].style.color = textcolor;
            td[7].style.color = textcolor;
            break;
          case 5:
            td[2].style.backgroundColor = bgcolor;
            td[5].style.backgroundColor = bgcolor;
            td[8].style.backgroundColor = bgcolor;
            td[2].style.color = textcolor;
            td[5].style.color = textcolor;
            td[8].style.color = textcolor;
            break;
          case 6:
            td[0].style.backgroundColor = bgcolor;
            td[4].style.backgroundColor = bgcolor;
            td[8].style.backgroundColor = bgcolor;
            td[0].style.color = textcolor;
            td[4].style.color = textcolor;
            td[8].style.color = textcolor;
            break;
         case 7:
            td[2].style.backgroundColor = bgcolor;
            td[4].style.backgroundColor = bgcolor;
            td[6].style.backgroundColor = bgcolor;
            td[2].style.color = textcolor;
            td[4].style.color = textcolor;
            td[6].style.color = textcolor;
    }

    }

function tictac0(item){
console.log("Printed 0");
   if(item.textContent === ""){
    item.textContent = "O";
    }
   line_check();
}
function tictacx(item){
console.log("Printed X");
if(item.textContent === ""){
    item.textContent = "X";
    }
   line_check();
}

function line_check(){

  var len = td.length;
  var arr = [];
   var over=true;
  for(var i=0; i<len;i++){

    if(td[i].textContent=="O"){
        arr[i]=5;

    }else if(td[i].textContent=="X"){
         arr[i]=7;
    }else {
        arr[i]=0;
        over = false;
    }
  }
    var sum= [];

    sum[0]= arr[0]+arr[1]+arr[2];
    sum[1]=arr[3]+arr[4]+arr[5];
    sum[2]=arr[6]+arr[7]+arr[8];
    sum[3]=arr[0]+arr[3]+arr[6];
    sum[4]=arr[1]+arr[4]+arr[7];
    sum[5]=arr[2]+arr[5]+arr[8];
    sum[6]= arr[0]+arr[4]+arr[8];
    sum[7]= arr[2]+arr[4]+arr[6];


    for(var g=0; g<8;g++){

        if(sum[g]==15 || sum[g]==21){
                    gindex=g;
                 game_over(sum[g],gindex);
            return;
        }
}

        if(over){
           game_over(0,-1);
        }

}

reset.addEventListener('click', resetAll, true);

function add_event() {
 console.log("Event Added");
    var thiss = this;
    var clickCount = 0;
    clickCount++;
        if (clickCount === 1) {
            singleClickTimer = setTimeout(function() {
                clickCount = 0;
                tictacx(thiss);
            }, 400);
        } else if (clickCount === 2) {
            clearTimeout(singleClickTimer);
            clickCount = 0;
           tictac0(thiss);
        }
   }


td.forEach(function (item){
var clickCount = 0;
item.addEventListener('click', function() {
    if(gameover)
    return;
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function() {
            clickCount = 0;
           tictacx(item);
        }, 300);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        clickCount = 0;
         tictac0(item);
    }
}, false);

});