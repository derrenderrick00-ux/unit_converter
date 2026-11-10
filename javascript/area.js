export function convertArea(unit, value) {
    switch(unit) {
        case "m² to ft²":
            return value * 10.7639;
        case "m² to yd²":
            return value * 1.19599;
        case "ft² to m²":
            return value * 0.092903;
        case "ft² to yd²":
            return value * 0.111111;
        case "yd² to m²":
            return value * 0.836127;
        case "yd² to ft²":
            return value * 9;
        default:
            throw new Error("Invalid area unit");
    }
}