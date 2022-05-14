function solution(input, markers) {
    let result = []
    input = input.split("\n")
    input.forEach((e) => {
        for (let i = 0; i < e.length; i++) {
            let c = e.charAt(i)
            if (markers.includes(c)) {
                e = e.slice(0, i);
            }
        }
        result[result.length] = e.trim()
    })
    return result.join("\n")
};