"use strict";

// Selecting DOM elements

const powerBtn = document.querySelector(".btn-power")
const clearBtn = document.querySelector(".btn-clear")
const backBtn = document.querySelector(".btn-back")
const percentBtn = document.querySelector(".btn-percent")
const plusBtn = document.querySelector(".btn-plus")
const minusBtn = document.querySelector(".btn-minus")
const divideBtn = document.querySelector(".btn-divide")
const multiplyBtn = document.querySelector(".btn-multilpy")
const equalBtn = document.querySelector(".btn-equal")
const zeroBtn = document.querySelector(".btn-0")
const oneBtn = document.querySelector(".btn-1")
const twoBtn = document.querySelector(".btn-2")
const threeBtn = document.querySelector(".btn-3")
const fourBtn = document.querySelector(".btn-4")
const fiveBtn = document.querySelector(".btn-5")
const sixBtn = document.querySelector(".btn-6")
const sevenBtn = document.querySelector(".btn-7")
const eightBtn = document.querySelector(".btn-8")
const nineBtn = document.querySelector(".btn-9")
const dotBtn = document.querySelector(".btn-dot")
let displayArea = document.querySelector(".output")


let inputValue = "";
let resultValue = "";
let operator = ""
// displayArea.textContent = inputValue

function Operate(num1, operator, num2) {
    if (operator === "+") {
        resultValue = num1 + num2
    } else if (operator === "-") {
        resultValue = num1 - num2
    } else if (operator === "*") {
        resultValue = num1 * num2
    } else if (operator === "/") {
        resultValue = num1 / num2
    } else if (operator === "%") {
        resultValue = num1 / 100
    } else resultValue = num1 + num2
    console.log(resultValue);
    displayArea.textContent = resultValue
    return resultValue
}

let events = ["click", "keydown"]

nineBtn.addEventListener('click', (e) => {
    inputValue += '9'
    displayArea.textContent = inputValue
    console.log(inputValue, typeof inputValue);
})

oneBtn.addEventListener('click', (e) => {
    inputValue += "1"
    displayArea.textContent = inputValue
    console.log(inputValue, typeof inputValue);
})

twoBtn.addEventListener('click', (e) => {
    inputValue += "2"
    displayArea.textContent = inputValue
    console.log(inputValue, typeof inputValue);
})

plusBtn.addEventListener('click', (e) => {
    const num1 = Number(resultValue)
    const num2 = Number(inputValue)
    inputValue = ""
    Operate(num1, "+", num2)
    console.log(num1, num2);
})


minusBtn.addEventListener('click', (e) => {
    const num1 = Number(resultValue)
    const num2 = Number(inputValue)
    inputValue = ""
    Operate(num1, "-", num2)
    console.log(num1, num2);
})
