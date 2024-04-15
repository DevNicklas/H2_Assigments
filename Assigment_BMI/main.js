// Calculate BMI and show it when submitting, height and weight
document.getElementById("bmiForm").addEventListener("submit", function() {
    event.preventDefault();

    const height = Number(document.getElementById("height").value);
    const weight = Number(document.getElementById("weight").value);
    const result = document.getElementById("resultText");

    if(height && weight > 0) {
        let bmi = calcBMI(height, weight);
        let bmiInfo = getBMIInfo(bmi);

        result.innerHTML = `Din BMI er ${bmi} (${bmiInfo.title})`;
        result.style.color = bmiInfo.color;
    } else {
        result.innerHTML = "Du skal skrive højde og vægt som tal, og over 0";
        result.style.color = 'maroon';
    }
});

// Calculate BMI
function calcBMI(height, weight) {
    return (weight / (height/100)**2).toFixed(2);
}

let bmiCategories = [
    { bmiMinLimit: 40, title: 'Overvægtig Klasse 3', color: 'red'},
    { bmiMinLimit: 35, title: 'Overvægtig Klasse 2', color: 'orange'},
    { bmiMinLimit: 30, title: 'Overvægtig Klasse 1', color: 'gold'},
    { bmiMinLimit: 24, title: 'Overvægtig', color: 'green'},
    { bmiMinLimit: 18.5, title: 'Normalvægtig', color: 'teal'},
    { bmiMinLimit: 0, title: 'Undervægtig', color: 'skyblue'},
];

// Get title and color which matches the BMI
function getBMIInfo(bmi) {
    for(let i = 0; i < bmiCategories.length; i++) {
        if(bmi > bmiCategories[i].bmiMinLimit) {
            return bmiCategories[i];
        }
    }
}