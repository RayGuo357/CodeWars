function parseInt(string) {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const teen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    const tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    const big = ["hundred", "thousand", "million"]

    let result = 0, prev = 0

    string = string.split(" ")
    for (let i = 0; i < string.length; i++) {
        let curr = string[i].split("-")
        if (curr !== "and") {
            for (let j = 0; j < curr.length; j++) {
                if (num.includes(curr[j])) {
                    prev += num.indexOf(curr[j])
                } else if (teen.includes(curr[j])) {
                    prev += (teen.indexOf(curr[j]) + 10)
                } else if (tens.includes(curr[j])) {
                    prev += ((10 * tens.indexOf(curr[j])) + 20)
                } else if (curr[j] === big[0]) {
                    prev *= 100
                } else if (curr[j] === big[1]) {
                    prev *= 1000
                    result += prev
                    prev = 0
                } else if (curr[j] === big[2]) {
                    prev *= 1000000
                    result += prev
                    prev = 0
                }
            }
        }
    }

    result += prev

    return result
}