const closestMultiple10 = num => {
    if (num % 10 >= 5) {
        return num + (10 - num % 10)
    } else {
        return num - (num % 10)
    }
};