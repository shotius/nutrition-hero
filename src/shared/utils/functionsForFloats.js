export const safeOperation = (a, b, operator ) => {
    switch(operator) {
        case "*":
            return Math.floor(a * b * 100)/100
        case '/':
            return Math.floor(a / b * 100)/100
        case '+':
            return Math.floor((a + b) * 100)/100
        case "-":
            return Math.floor((a -b ) * 100)/100
        default:
            return null
    }
}

export const safeCompare = (a, b, precision) => {
    if (a >= (b - precision) && a <= (b + precision)) {
        return true
    } else {
        return false
    }
}