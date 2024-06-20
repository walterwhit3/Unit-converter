/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("result")
convertBtn.addEventListener("click",function(){
    length(inputEl.value)
    volume(inputEl.value)
    mass(inputEl.value)
})
function length(unit) {
    feet = unit * 3.281
    meter = unit / 3.281
    let newLen = ""
    newLen = `${unit} meters = ${feet} feets | ${unit} feet = ${meter} meters`
    ulEl.innerHTML += `<li><h2>Length(Meter/Feet)</h2><p>${newLen}</p></li>`
}
function volume(unit) {
    gallons = unit * 0.264
    litres = unit / 0.264
    let newVol = ""
    newVol = `${unit} litres = ${gallons} gallons | ${unit} gallons = ${litres} litres`
    ulEl.innerHTML += `<li><h2>Volume(Litres/Gallons)</h2><p>${newVol}</p></li>`
}
function mass(unit) {
    pound = unit * 2.204
    kilo = unit / 2.204
    let newMass = ""
    newMass = `${unit} kilos = ${pound} pounds | ${unit} pounds = ${kilo} kilos`
    ulEl.innerHTML += `<li><h2>Mass(Kilograms/Pounds)</h2><p>${newMass}</p></li>`
}
