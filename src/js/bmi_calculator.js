function BMICalculator(){
    BMICalculator.prototype.metric_bmi = function(obj) {
        let weight = obj.weight;
        let height = obj.height;
        if (weight > 0 && height > 0) {
          var finalBmi = weight / (height / 100 * height / 100);
          obj.bmiValue =  parseFloat(finalBmi.toFixed(2));
          setBMIMessage(obj);
        }
      };

      BMICalculator.prototype.imperial_bmi = function(obj) {
        let weight = obj.weight;
        let height = obj.height;
        if (weight > 0 && height > 0) {
          let finalBmi = weight / (height * height) * 703;
              obj.bmiValue = parseFloat(finalBmi.toFixed(2));
              setBMIMessage(obj);
        }
      };

      function setBMIMessage (obj){
        if (obj.bmiValue < 18.5) {
          obj.bmiMessage = "Underweight"
        }
        if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
          obj.bmiMessage = "Healthy"
        }
        if (obj.bmiValue > 25 && obj.bmiValue < 30) {
          obj.bmiMessage = "Overweight"
        }
        if (obj.bmiValue > 30) {
          obj.bmiMessage = "Obese"
        }
      } 

};



if (typeof module !== 'undefined' && module.exports) {
    module.exports = BMICalculator;
}