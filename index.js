const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")
const convertBtn = document.getElementById("convert-btn")
const units = document.getElementById("units")

convertBtn.addEventListener("click", function(){
    let inputValue = Number(units.value)
    lengthP.textContent = `${inputValue} meters = ${(inputValue*3.281).toFixed(3)} feet | 
    ${inputValue} feet = ${(inputValue/3.281).toFixed(3)} meters`
    volumeP.textContent = `${inputValue} liters = ${(inputValue*0.264).toFixed(3)} gallons | 
    ${inputValue} gallons = ${(inputValue/0.264).toFixed(3)} liters`
    massP.textContent = `${inputValue} kilos = ${(inputValue*2.204).toFixed(3)} pounds | 
    ${inputValue} pounds = ${(inputValue/2.204).toFixed(3)} kilos`
})