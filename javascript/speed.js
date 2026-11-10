export function convertSpeed(unit, value) {
    switch(unit) {
        case "m/s to km/h":
            return value * 3.6;
        case "m/s to mph":
            return value * 2.23694;
        case "km/h to m/s":
            return value / 3.6;
        case "km/h to mph":
            return value / 1.60934;
        case "mph to m/s":
            return value / 2.23694;
        case "mph to km/h":
            return value * 1.60934;
        default:
            throw new Error('Invalid speed conversion unit');
    }
};