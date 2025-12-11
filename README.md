# BMI Calculator

This **BMI (Body Mass Index)** calculator is a simple web-based tool that allows users to input their **height** (in centimeters) and **weight** (in kilograms) to calculate their BMI. The BMI is calculated using the formula:

\[
\text{BMI} = \frac{\text{weight}}{\left(\frac{\text{height}}{100}\right)^2}
\]

---

## Features

- Accepts **height** in **centimeters**.
- Accepts **weight** in **kilograms**.
- Calculates **BMI** and displays it rounded to **two decimal places**.
- Validates input to ensure that height and weight are positive numbers.
- Displays error messages for invalid input.

---

## How It Works

1. The user enters their **height** (in centimeters) and **weight** (in kilograms) into the form.
2. When the form is submitted, the JavaScript function prevents the default form submission and calculates the BMI.
3. If the input values are valid, the BMI is displayed. If the input values are invalid, an error message is shown.

---

## Code Explanation

### Java script

**Java script**

```Java script
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (!height || height < 0) {
    result.innerHTML = `Please give me a valid height ${height}`;
  } else if (!weight || weight < 0) {
    result.innerHTML = `Please give me a valid height ${weight}`;
  } else {
    const bmiresult = ((height * height) / 1000).toFixed(3);
    result.innerHTML = `<span>Your BMI is ${bmiresult} </span>`;
  }
});
