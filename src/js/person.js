function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height;
    this.calculate_bmi = function() {
        calculator = new BMICalculator();
        calculator.metric_bmi(this)
    }
    Person.prototype.calculate_imperial_bmi = function() {
        calculator = new BMICalculator();
        calculator.imperial_bmi(this);
    };
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Person;
}

