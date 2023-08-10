let number = prompt("How many guests?")
if (number == 1){
    alert("no cuts needed")
} else if(number % 2 == 0){
    alert(number/2 + " cuts needed")
} else {
    alert (number + " cuts needed")
}