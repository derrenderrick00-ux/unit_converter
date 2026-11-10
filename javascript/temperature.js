export function convertTemperature(unit, value) {
    switch (unit) {
        case 'C to F':
            return (value) => (value * 9/5) + 32;
        case 'F to C':
            return (value) => (value - 32) * 5/9;
        case 'C to K':
            return (value) => value + 273.15;
        case 'K to C':
            return (value) => value - 273.15;
        case 'F to K':
            return (value) => (value - 32) * 5/9 + 273.15;
        case 'K to F':
            return (value) => (value - 273.15) * 9/5 + 32;
        default:
            throw new Error('Invalid temperature conversion unit');
    }
};