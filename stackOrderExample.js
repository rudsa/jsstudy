// 1
var a = 1;
function outer() {
  function inner() {
    console.log(a);
    var a = 3;
  }
  inner(); //3
  console.log(a);
}
outer(); // 2
console.log(a);
