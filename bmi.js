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
