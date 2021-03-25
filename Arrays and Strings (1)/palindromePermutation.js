function test(str) {
  if (!str) return false;
  str = str.toLowerCase();

  const letterMap = new Set();
  for (const letter of str) {
      if (letter !== " ") {
          if (letterMap.has(letter)) letterMap.delete(letter);
          else letterMap.add(letter);
        }
    }
    console.log(letterMap);
  return letterMap.size <= 1;
}

//find permutations of string and see if its a palindrome

let str = "Tact Coal";
console.log(test(str));
