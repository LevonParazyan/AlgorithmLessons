let str = "thisisadummystring";
let target = "strins";

function subStr(str, target) {
    let start = 0, end = str.length, targetSize = target.length;
    if (targetSize > end) {
        return 0;
    }
    while (start < end) {
        if (str[start] == target[0]) {
            let count = 0, i = 0;
            while (i < targetSize) {
                if (str[start + i] == target[i]) {
                    ++count;
                }
                ++i;
            }
            if (count == targetSize) {
                return true;
            }
        }
        ++start;
    }
    
    return -1;
}

console.log(subStr(str, target));