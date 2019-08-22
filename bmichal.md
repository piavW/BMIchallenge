<h1>Notes from week 4 of the ITP-course, the BMI-challenge!</h1>
.to_f makes things a float


- <b>Unit testing</b> - pass or fail of short snippets of code to check behaviour.
- <b> Acceptance testing </b>- making sure the program meets business requirements and if it's delivery ready. exempel or user scenario. 
- <b>User acceptance testing </b>(UAT/betatesting/applicationtesting/end user testing) testing in the real world.

<h2> NPM commands </h2>
- The command <i>npm run specs </i> will run your unit tests.
- <i> npm run features </i> will start a local webserver, launch Chrome and run your acceptance tests.
- If you execute <i> npm test </i> in your terminal, both your acceptance tests and unit tests will be run.

Comments about BMI: 
// 161 cm / 100 = 1.61 m
// Metric method:
//1. Multiply your height by itself.
// 2. Divide your weight in kilograms by the value calculated in step 1.
// 3. The resulting number is your BMI. Compare this BMI value with the weight status table below.
mheight = (161/100);
kgweight = (60);

val1 = mheight*mheight;
bmival = kgweight/val1;


// Imperial method:
// 1. Multiply your weight in pounds by 703.
// 2. Multiply your height in inches by itself
// 3. Divide the figure from step 1 by the figure in step 2. The resulting number is your BMI.
//No americans!

// BMI Weight Status: Below 18.5, || Underweight || || 18.5 - 24.9 || Healthy || || 25 - 29.9 || Overweight || || Over 30.0 || Obese ||
