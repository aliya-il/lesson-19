//6
let num1 = prompt("Enter a number");
let num2 = prompt("Enter a number");
let num3 = prompt("Enter a number");
if (num1 > num2 && num1 > num3) {
    alert("num1 is the biggest")
} else if (num2 > num1 && num2 > num3) {
    alert("num2 is the biggest")
} else if (num3 > num1 && num3 > num2) {
    alert("num3 is the biggest")
} else if(num1 > num2 && num2==num3) {
    alert("num1 is the biggest")
} else if(num2 > num1 && num1==num3) {
    alert("num2 is the biggest")
} else if(num3 > num2 && num2==num1) {
    alert("num3 is the biggest")
} else {
    alert("more than one equal numbers")
}
