let age = prompt("Enter your age")

if(age < 12) {
    alert("Kids")
} else if (age >=12 && age < 18) {
    alert("Teenager")
} else if (age >= 18 && age < 65){
    alert("Adult")
} else {
    alert("Elderly")
}