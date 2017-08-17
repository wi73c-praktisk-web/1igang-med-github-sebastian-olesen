var i = 0;

do{
    console.log(i);
    i++;
}
while (i < 5);

//2
var i = 1;

do{
    console.log(i);
    i++;
}
while (i < 26);

//3
var i = 2017

do{
    console.log(i);
    i--;
}
while (i > 1916);

//

//2 1
var arr = ["jørgen", "franz", "mikkel", "ole", "mohammed", "ferdinan", "bent", "søren"];
arr.forEach(function(navne){
    console.log(navne);
 });

 //2 2

/* var band = ["disturbed","ffpd","atreyu","in flames"];
 band.forEach(function(bands, arra)){
     console.log(bands + "har placeringen" arra);
 };
*/

 //2 3

 var tal = [31, 62, 360, 14, 25, 420, 69, 8, 59, 1337];

 tal.forEach(function(tallet, smindex) {
     if(tal[smindex] !== tal[tal.length-1]){
         if(tal[smindex] > tal[smindex+1]){
             console.log("det næste nummer er "+tal[smindex+1]+" og det er IKKE størere end det nuværende nummer som er " +tallet+"");
        }else{console.log("det næste nummer er "+tal[smindex+1]+" og det er størere end det nuværende nummer som er " +tallet+"");

        }

     }
 });
 
