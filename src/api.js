const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

exports.fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date);

    for(let i = 3; i <= 10; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
exports.submitAPI = function(formData) {
    return true;
};