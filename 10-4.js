//4
let variable = prompt("Enter any variable and I will define which type it.")
if (typeof variable === 'string'){
    alert("Your variable is string")
} else if (typeof variable === 'number'){
    alert("Your variable is number")
} else {
    alert("Your variable is not string nor number")
}