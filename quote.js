var banner1 = document.getElementById("banner1");
var banner2 = document.getElementById("banner2");
const quotes =["Quote1" , "Quote2" , "Quote3","Quote4", "Quote5", 
"Quote6" , "Quote7" , "Quote8" , "Quote9" , "Quote10"
];

window.onload = addQuotes();


function addQuotes(){
 
banner1.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
   

banner2.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];


}


