function updateConversionOptions() {
    var conversionType = document.getElementById("conversionType").value;
    var lengthOptions = document.getElementById("lengthOptions");
    var massOptions = document.getElementById("massOptions");
    var volumeOptions = document.getElementById("volumeOptions");
    var temperatureOptions = document.getElementById("temperatureOptions");

    switch (conversionType) {
        case "length":
            lengthOptions.style.display = "block";
            massOptions.style.display = "none";
            volumeOptions.style.display = "none";
            temperatureOptions.style.display = "none";
            break;
        case "mass":
            lengthOptions.style.display = "none";
            massOptions.style.display = "block";
            volumeOptions.style.display = "none";
            temperatureOptions.style.display = "none";
            break;
        case "volume":
            lengthOptions.style.display = "none";
            massOptions.style.display = "none";
            volumeOptions.style.display = "block";
            temperatureOptions.style.display = "none";
            break;
        case "temperature":
            lengthOptions.style.display = "none";
            massOptions.style.display = "none";
            volumeOptions.style.display = "none";
            temperatureOptions.style.display = "block";
            break;
    }
}

function convert() {
    var conversionType = document.getElementById("conversionType").value;
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var resultElement = document.getElementById("result");
    var result = 0;
    var massTo; // Declare massTo outside the switch statement

    switch (conversionType) {
        case "length":
            var lengthFrom = document.getElementById("lengthFrom").value;
            var lengthTo = document.getElementById("lengthTo").value;
            result = convertLength(inputValue, lengthFrom, lengthTo);
            break;
        case "mass":
            var massFrom = document.getElementById("massFrom").value;
            massTo = document.getElementById("massTo").value; // Assign massTo inside the switch case
            result = convertMass(inputValue, massFrom, massTo);
            break;
        case "volume":
            var volumeFrom = document.getElementById("volumeFrom").value;
            var volumeTo = document.getElementById("volumeTo").value;
            result = convertVolume(inputValue, volumeFrom, volumeTo);
            break;
        case "temperature":
            var temperatureFrom = document.getElementById("temperatureFrom").value;
            var temperatureTo = document.getElementById("temperatureTo").value;
            result = convertTemperature(inputValue, temperatureFrom, temperatureTo);
            break;
    }

    var lengthTo = document.getElementById("lengthTo").value; // Get lengthTo value if needed
    var volumeTo = document.getElementById("volumeTo").value; // Get volumeTo value if needed
    var temperatureTo = document.getElementById("temperatureTo").value; // Get temperatureTo value if needed

    outres = ` ${result.toFixed(3)} ${conversionType === "length" ? lengthTo : conversionType === "mass" ? massTo : conversionType === "volume" ? volumeTo : temperatureTo}`;
    document.getElementById("ooo").value = outres;
}



function convertLength(value, fromUnit, toUnit) {
    const conversions = {
        meter: 1,
        feet: 3.28084,
        mile: 0.000621371,
        km: 0.001,
        centimeter: 100,
        millimeter: 1000,
        yard: 1.09361,
        inch: 39.3701,
    };
    return (value / conversions[fromUnit]) * conversions[toUnit];
}

function convertMass(value, fromUnit, toUnit) {
    const conversions = {
        kg: 1,
        pound: 2.20462,
        tonne: 0.001,
        gram: 1000,
        ounce: 35.27396,
    };
    return (value / conversions[fromUnit]) * conversions[toUnit];
}

function convertVolume(value, fromUnit, toUnit) {
    const conversions = {
        litre: 1,
        milliliter: 1000, // 1 litre = 1000 milliliters
        oz: 33.814,
    };

    if (fromUnit === "litre" && toUnit === "milliliter") {
        return value * 1000;
    } else if (fromUnit === "milliliter" && toUnit === "litre") {
        return value / 1000;
    } else {
        return (value / conversions[fromUnit]) * conversions[toUnit];
    }
}

function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === "celsius") {
        switch (toUnit) {
            case "fahrenheit":
                return (value * 9/5) + 32;
            case "kelvin":
                return value + 273.15;
            default:
                return value;
        }
    } else if (fromUnit === "fahrenheit") {
        switch (toUnit) {
            case "celsius":
                return (value - 32) * 5/9;
            case "kelvin":
                return (value - 32) * 5/9 + 273.15;
            default:
                return value;
        }
    } else if (fromUnit === "kelvin") {
        switch (toUnit) {
            case "celsius":
                return value - 273.15;
            case "fahrenheit":
                return (value - 273.15) * 9/5 + 32;
            default:
                return value;
        }
    } else {
        return value;
    }
}

