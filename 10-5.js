//5
let hour = prompt("Enter any time");
if (hour >= 6 && hour<=12) {
    alert("Good Morning")
} else if (hour > 12 && hour <= 18){
    alert("Good afternoon")
} else if (hour > 18 && hour <= 24 || hour >=1 && hour <6) {
    alert("Good night")
} else {
    alert ("wrong time")
}