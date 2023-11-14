const convertedValueElem = document.querySelector("#result");
const degreeInput = document.querySelector("#degree");
const fromTempTypeSelect = document.querySelector("#from-temp-type");
const toTempTypeSelect = document.querySelector("#to-temp-type");
const convertBtn = document.querySelector("#convert-btn");
const resetBtn = document.querySelector("#reset-btn");
const gifImage = document.querySelector("#gif-image");

window.addEventListener("load", () => {
  degreeInput.value = "";
  convertedValueElem.innerHTML = "";
  gifImage.style.display = "none";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateInput(degreeInput.value)) {
    convertTemperature();
  } else {
    alert("Please enter a valid numeric degree value.");
  }
});

resetBtn.addEventListener("click", () => {
  degreeInput.value = "";
  convertedValueElem.innerHTML = "";
  gifImage.style.display = "none";
});

function validateInput(inputValue) {
  return !isNaN(parseFloat(inputValue)) && isFinite(inputValue);
}

function convertTemperature() {
  let inputValue = parseFloat(degreeInput.value);

  if (fromTempTypeSelect.value === toTempTypeSelect.value) {
    convertedValueElem.innerHTML = `${inputValue.toFixed(2)} &deg;${fromTempTypeSelect.value.toUpperCase()}`;
  } else if (fromTempTypeSelect.value === "celsius" && toTempTypeSelect.value === "fahrenheit") {
    const CelsiusToFahrenheit = (inputValue * 9 / 5) + 32;
    convertedValueElem.innerHTML = `${CelsiusToFahrenheit.toFixed(2)} &deg;F`;
  } else if (fromTempTypeSelect.value === "celsius" && toTempTypeSelect.value === "kelvin") {
    const CelsiusToKelvin = inputValue + 273.15;
    convertedValueElem.innerHTML = `${CelsiusToKelvin.toFixed(2)} K`;
  } else if (fromTempTypeSelect.value === "fahrenheit" && toTempTypeSelect.value === "celsius") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    convertedValueElem.innerHTML = `${FahrenheitToCelsius.toFixed(2)} &deg;C`;
  } else if (fromTempTypeSelect.value === "fahrenheit" && toTempTypeSelect.value === "kelvin") {
    const FahrenheitToKelvin = ((inputValue - 32) * (5 / 9)) + 273.15;
    convertedValueElem.innerHTML = `${FahrenheitToKelvin.toFixed(2)} K`;
  } else if (fromTempTypeSelect.value === "kelvin" && toTempTypeSelect.value === "celsius") {
    const KelvinToCelsius = inputValue - 273.15;
    convertedValueElem.innerHTML = `${KelvinToCelsius.toFixed(2)} &deg;C`;
  } else if (fromTempTypeSelect.value === "kelvin" && toTempTypeSelect.value === "fahrenheit") {
    const KelvinToFahrenheit = ((inputValue - 273.15) * 9 / 5) + 32;
    convertedValueElem.innerHTML = `${KelvinToFahrenheit.toFixed(2)} &deg;F`;
  }

  gifImage.style.display = "block";
}
