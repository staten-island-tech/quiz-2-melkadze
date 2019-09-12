//step one
const massRob = 78;
const massDejon = 92;
const heightRob = 1.69;
const heightDejon = 1.95;

//step two
const bmiRob = (massRob / ((heightRob) * (heightRob)));
const bmiDejon = (massDejon / ((heightDejon) * (heightDejon)));

//step three
let robHigherBMI;
if (bmiRob > bmiDejon) {
    robHigherBMI = true;
}

//step four
console.log(`Does Rob, who is ${massRob}kg and ${heightRob}m with a BMI of ${bmiRob}, have a higher BMI than that of Dejon, with ${massDejon}kg and ${heightDejon}m with a BMI of ${bmiDejon}? The answer is ${robHigherBMI}!`);