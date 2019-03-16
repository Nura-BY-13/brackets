module.exports = function check(str, bracketsConfig) {
    var arr = str.split("");

    if (arr.lengt % 2 == 1) {
        return false;
    }

    let i = 0;
    while (arr.length != i + 1) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if ((arr[i] == bracketsConfig[j][0]) && (arr[i + 1] == bracketsConfig[j][1])) {
                arr.splice(i, 2);
                i = i - 2;
                if (arr.length == 0) {
                    return true;
                }
                break;
            }
        }
        i++;
    }
    return false;
}
