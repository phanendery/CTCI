function test(string) {
  let str = string.split("").sort();
  for(let i = 0; i < str.length -1; i++){
      let curr = str[i];
      let next = str[i+1];
      if(curr === next){
          return false;
      }
  }
  return true;
}

console.log(test("check"));
console.log(test("notunique"));
console.log(test("abcedfghikl"));
console.log(test("leitna"));
console.log(test("bard"));
