export function convertForce(unit, value) {
    switch(unit) {
        case "N to lbf":
            return value * 0.224809;
        case "N to kgf":
            return value * 0.101972;
        case "lbf to N":
            return value * 4.44822;
        case "lbf to kgf":
            return value * 0.453592;
        case "kgf to N":
            return value * 9.80665;
        case "kgf to lbf":
            return value * 2.20462;
        default:
            throw new Error('Invalid force conversion unit');
    }
};