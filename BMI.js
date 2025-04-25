const result = document.querySelector('.display-output');
const form = document.querySelector('form');
const bmiNote = document.querySelector('#display-bmi-type');

form.addEventListener('submit', function (e) {
    e.preventDefault

    const height = parseInt(document.querySelector('#height-val').value)

    const weight = parseInt(document.querySelector('#weight-val').value)

    const result = document.querySelector('.display - output')

    if (height === "" || height < 0 || this.isNan(height)) {
        result.innerHTML = `you are enter wrong height values ${height}`;
    }

    else if (weight === "" || weight < 0 || this.isNan(weight)) {

        result.innerHTML = `you are enter wrong weight values ${weight}`;

    }

    else {

        const BMI = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>${BMI} </span>`

    }

    if (BMI < 18.6) {
        bmiNote.innerHTML = "Under Weight"
    }
    else if (BMI > 24.9) {
        bmiNote.innerHTML = "Over Weight"
    }
    else if (BMI > 18.6 && BMI < 24.9) {
        bmiNote.innerHTML = "Normal"
    }

})
