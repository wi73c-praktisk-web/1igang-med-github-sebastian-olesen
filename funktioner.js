function hello() {
    console.log("hello.....");
}
hello();

//1

function Sebastian (navn, efternavn, fødsdag) {
    console.log(navn, efternavn, fødsdag);
}
Sebastian('sebastian', "olesen", "20/08-1999");

//2

var result = 0;
function plus() {
    result = 69 + 360;
}
function minus() {
    result = 632 - 3320;
}
function gange() {
    result = 42 * 21;
}
function divideret() {
    result = 79 / 320;
}
function pi(){
    result = Math.PI;
}
function sqrt(){
    result = Math.sqrt(69);
}
plus();
console.log(result);

minus();
console.log(result);

gange();
console.log(result);

divideret();
console.log(result);

pi();
console.log(result);

sqrt();
console.log(result);


var anonym = function (Hej) {
    console.log(Hej);
}
anonym("test af anonym");

//3

function something (mintekst, hvormeget, hvormeget2) {
    if(mintekst.length > hvormeget){
        tekst = mintekst.slice(hvormeget, hvormeget2);
    }else{
        tekst = mintekst;
    }
}
something("Mit navn er sebastian", 12,22);
console.log(tekst);