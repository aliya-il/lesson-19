let a = parseInt(prompt("enter length of trinagle"));
let b = parseInt(prompt("enter length of trinagle"));
let c = parseInt(prompt("enter length of trinagle"));

if (a+b <= c || a + c <= b || b + c <= a){
    alert("Trinagle does not exist")
} else {
    alert("Triangle exists")
}