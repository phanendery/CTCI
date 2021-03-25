function test(str1, str2) {
  if (!str1 || !str2 || str1.length !== str2.length) return false;
  let letterMap = new Map();

  for (const letter of str1) {
    letterMap.set(letter, letterMap.get(letter) + 1 || 1);
  }

  for (const letter of str2) {
    if (!letterMap.has(letter)) return false;
    if (letterMap.get(letter) === 1) letterMap.delete(letter);
    else letterMap.set(letter, letterMap.get(letter) - 1);
  }

  return !letterMap.size;
}

let str1 = "abc";
let str2 = "bac";

console.log(test(str1, str2)); 
