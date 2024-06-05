const nameInput = document.getElementById('name')
const cardName = document.getElementById('card_name')
const numberInput = document.getElementById('number')
const cardNumber = document.getElementById('card_number')
const expMonthInput = document.getElementById('month')
const expMonth = document.getElementById('exp_month')
const expYearInput = document.getElementById('year')
const expYear = document.getElementById('exp_year')
const cvcInput = document.getElementById('cvc')
const cvcNumber = document.getElementById('cvc_number')
const form = document.getElementById('form')
const nameError = document.getElementById('name_error')
const numberError = document.getElementById('number_error')
const expError = document.getElementById('exp_error')
const cvcError = document.getElementById('cvc_error')
const container = document.getElementById('container')
const compeleted = document.querySelector(".thankyou-txt")

// Credit card number mask
var patternMask = IMask(numberInput, {
    mask: '**** **** **** ****'
});

// Write only text function
function validateText(text) {
    const pattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/
    if (text.search(pattern)) {
        return false
    } else {
        return true
    }
}

// Write only numbers function
function validateNum(number) {
    if (!/^([0-9 ])*$/.test(number)) {
        return false
    } else {
        return true
    }
}

// Write card name function
nameInput.addEventListener('keyup', () => {
    cardName.innerHTML = nameInput.value
})

// Write card number function
numberInput.addEventListener('keyup', () => {
    cardNumber.innerHTML = numberInput.value
})

// Write card expiration month function
expMonthInput.addEventListener('keyup', () => {
    expMonth.innerHTML = expMonthInput.value
})

// Write card expiration year function
expYearInput.addEventListener('keyup', () => {
    expYear.innerHTML = expYearInput.value
})

// Write card cvc number function
cvcInput.addEventListener('keyup', () => {
    cvcNumber.innerHTML = cvcInput.value
})

// Listen form submit event
form.addEventListener('submit', (event) => {
    event.preventDefault()
    // Field validations (empty, only letters, only numbers)
    if (nameInput.value === '') {
        nameError.innerHTML = "Can't be blank"
        nameInput.classList.add('error')
    } else if (validateText(nameInput.value) == false) {
        nameError.innerHTML = "Wrong format, only letters"
    } else if (numberInput.value === '') {
        nameError.innerHTML = ''
        nameInput.classList.remove('error')
        numberError.innerHTML = "Can't be blank"
        numberInput.classList.add('error')
    } else if (validateNum(numberInput.value) == false) {
        numberError.innerHTML = "Wrong format, only numbers"
    } else if (expMonthInput.value === '') {
        numberError.innerHTML = ""
        numberInput.classList.remove('error')
        expError.innerHTML = "Can't be blank"
        expMonthInput.classList.add('error')
    } else if (validateNum(expMonthInput.value) == false) {
        expError.innerHTML = "Wrong format, only numbers"
    } else if (expYearInput.value === '') {
        expMonthInput.classList.remove('error')
        expError.innerHTML = "Can't be blank"
        expYearInput.classList.add('error')
    } else if (validateNum(expYearInput.value) == false) {
        expError.innerHTML = "Wrong format, only numbers"
    } else if (cvcInput.value === '') {
        expError.innerHTML = ""
        expYearInput.classList.remove('error')
        cvcError.innerHTML = "Can't be blank"
        cvcInput.classList.add('error')
    } else if (validateNum(cvcInput.value) == false) {
        cvcError.innerHTML = "Wrong format, only numbers"
    } else {
        cvcError.innerHTML = ""
        cvcInput.classList.remove('error')
        compeleted.classList.remove("hidden")
        form.classList.add("hidden")
        
        const continueBtn = document.getElementById('ctn-btn')
        continueBtn.addEventListener('click', () => {
            window.location.href = 'index.html'
        })
    }

})