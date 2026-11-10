export function convertVolume(unit, value) {
    switch(unit) {
        case "mL to L":
            return value * 0.001;
        case "L to mL":
            return value * 1000;
        case "L to gal":
            return value * 0.264172;
        case "gal to L":
            return value * 3.78541;
        case "mL to gal":
            return value * 0.000264172;
        case "gal to mL":
            return value * 3785.41;
        default:
            throw new Error('Invalid volume conversion unit');
    }
}