var romanToInt = function(s) {
    var map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var current = s[i];
        var next = s[i + 1];
        if (map[current] < map[next]) {
            result -= map[current];
        } else {
            result += map[current];
        }
    }
    return result;
};

console.log(romanToInt("IXII"));