const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log("Form submitted");


    const height = parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('.display-output');

    const lastText = document.querySelector('#display-bmi-type');



    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `you are enter wrong height values ${height}`;
    }

    else if (weight === "" || weight < 0 || isNaN(weight)) {

        result.innerHTML = `you are enter wrong weight values ${weight}`;

    }

    else {

        const BMI = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = BMI;

        if (BMI > 24.9) {
            lastText.innerHTML = " OVER WEIGHT"
            lastText.style.color = "red";
            lastText.style.border = "2px solid red";
        }

        else if (BMI < 24.9 && BMI > 18.6) {
            lastText.innerHTML = "NORMAL"
            lastText.style.color = "green";
            lastText.style.border = "2px solid green";
        }

        else if (BMI < 18.6) {
            lastText.innerHTML = "UNDER WEIGHT "
            lastText.style.color = "blue";
            lastText.style.border = "2px solid blue";
        }
        else {
            lastText.innerHTML = "YOU ENTERED WRONG VALUES"
            lastText.style.color = "blue";
        }

    }
})
