module.exports = function reverse(n) {
    let number = String(Math.abs(n));
    let res = "";

    for (let i = number.length; i--; ) {
        res += number[i];
    }

    return +res;
};
