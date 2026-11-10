export function convertLength(userInput, value) {
    switch (userInput) {
        // Centimeter conversions
        case "cm to ft":
            return (value) => value * 0.0328084;
        case "cm to in":
            return (value) => value / 2.54;
        case "cm to km":
            return (value) => value / 100000;
        case "cm to m":
            return (value) => value / 100;
        case "cm to mi":
            return (value) => value * 0.0000062137;
        case "cm to mm":
            return (value) => value * 10;
        case "cm to yd":
            return (value) => value * 0.0109361;

        // Foot conversions
        case "ft to cm":
            return (value) => value / 0.0328084;
        case "ft to in":
            return (value) => value * 12;
        case "ft to km":
            return (value) => value / 3280.84;
        case "ft to m":
            return (value) => value * 0.3048;
        case "ft to mi":
            return (value) => value / 5280;
        case "ft to mm":
            return (value) => value * 304.8;
        case "ft to yd":
            return (value) => value / 3;

        // Inch conversions
        case "in to cm":
            return (value) => value * 2.54;
        case "in to ft":
            return (value) => value / 12;
        case "in to km":
            return (value) => value * 0.0000254;
        case "in to m":
            return (value) => value * 0.0254;
        case "in to mi":
            return (value) => value / 63360;
        case "in to mm":
            return (value) => value / 0.0393701;
        case "in to yd":
            return (value) => value * 0.0277778;

        // Kilometer conversions
        case "km to cm":
            return (value) => value * 100000;
        case "km to ft":
            return (value) => value * 3280.84;
        case "km to in":
            return (value) => value / 0.0000254;
        case "km to m":
            return (value) => value * 1000;
        case "km to mi":
            return (value) => value / 1.60934;
        case "km to mm":
            return (value) => value * 1000000;
        case "km to yd":
            return (value) => value * 1093.61;

        // Meter conversions
        case "m to cm":
            return (value) => value * 100;
        case "m to ft":
            return (value) => value / 0.3048;
        case "m to in":
            return (value) => value / 0.0254;
        case "m to km":
            return (value) => value / 1000;
        case "m to mi":
            return (value) => value * 0.000621371;
        case "m to mm":
            return (value) => value * 1000;
        case "m to yd":
            return (value) => value * 1.09361;

        // Mile conversions
        case "mi to cm":
            return (value) => value / 0.0000062137;
        case "mi to ft":
            return (value) => value * 5280;
        case "mi to in":
            return (value) => value * 63360;
        case "mi to km":
            return (value) => value * 1.60934;
        case "mi to m":
            return (value) => value / 0.000621371;
        case "mi to mm":
            return (value) => value * 1609344;
        case "mi to yd":
            return (value) => value * 1760;

        // Millimeter conversions
        case "mm to cm":
            return (value) => value / 10;
        case "mm to ft":
            return (value) => value / 304.8;
        case "mm to in":
            return (value) => value * 0.0393701;
        case "mm to km":
            return (value) => value / 1000000;
        case "mm to m":
            return (value) => value / 1000;
        case "mm to mi":
            return (value) => value / 1609344;
        case "mm to yd":
            return (value) => value / 914.4;

        // Yard conversions
        case "yd to cm":
            return (value) => value / 0.0109361;
        case "yd to ft":
            return (value) => value * 3;
        case "yd to in":
            return (value) => value / 0.0277778;
        case "yd to km":
            return (value) => value / 1093.61;
        case "yd to m":
            return (value) => value / 1.09361;
        case "yd to mi":
            return (value) => value / 1760;
        case "yd to mm":
            return (value) => value * 914.4;

        default:
            throw new Error("Invalid conversion type");
    }
}