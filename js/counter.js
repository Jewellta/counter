
let nbr =0;
function loaded(){
    display();
}

function decrement(){
    nbr--;
    display();
}
function increment(){
    nbr++;
    display();
}

function display(){
    let chg= document.getElementById("display");
    chg.value= nbr;
    chg.style.fontStyle= nbr%2==0?"italic": "normal";
    chg.style.fontWeight= nbr%3==0?"bold": "normal";
    chg.style.color= nbr%2==0?"red": "black";
}

function reset(){
    nbr=0;
    set0();
    display();
}
function set0(){
    let chg=document.getElementById("display");
    chg.value=nbr;
}
