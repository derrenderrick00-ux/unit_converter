export function convertWeight(unit, value) {
    switch(unit) {
        case "g to Kg":
            return value / 1000;
        case "g to t":
            return value / 1000000;
        case "Kg to g":
            return value * 1000;
        case "Kg to t":
            return value / 1000;
        case "t to Kg":
            return value * 1000;
        case "t to g":
            return value * 1000000;
        case "lb to Kg":
            return value * 0.453592;
        case "lb to g":
            return value * 453.592;
        case 'lb to t':
            return value * 0.000453592;
        case "Kg to lb":
            return value / 0.453592;
        case "g to lb":
            return value / 453.592;
        case "t to lb":
            return value / 0.000453592;
        default:
            return 0;
    }
}