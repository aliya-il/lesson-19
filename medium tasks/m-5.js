let weight = parseInt(prompt("Enter weight of item in kg"))
let country = prompt("Enter country of delivery")

if (weight <= 1){
    alert("Cost of delivery = 10$")
} else if (weight > 1 && weight <= 5 && country=="USA"){
    alert("Cost of Delivery = 20$")
} else if(weight > 1 && weight <=5 && country != "USA"){
    alert("Cost of delivery = 30$")
} else if (weight > 5) {
    alert("Cost of delivery = 50$")
}