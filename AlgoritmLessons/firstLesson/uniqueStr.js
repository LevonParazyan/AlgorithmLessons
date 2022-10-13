let str = "volodia";
let uniqueStr = new Set(str);
let isUnique = str.length == uniqueStr.size;
console.log(isUnique);