
let nbr =0;

set0();

function loaded(){          //old way of forming functions
    display();
}

//const decrement1=() =>{} //new way of forming functions( best practice)

const decrement=() => {
    nbr--;
    display();
}
const increment=() => {
    nbr++;
    display();
}

const display=() => {
    let ctrl= document.getElementById("display");
    ctrl.value= nbr;
    ctrl.style.fontStyle= nbr%2==0?"italic": "normal";
    ctrl.style.fontWeight= nbr%3==0?"bold": "normal";
    ctrl.style.color= nbr%2==0?"red": "black";
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
