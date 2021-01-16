// 화살표 함수 기본
// let func = (arg1, arg2, ...argN) => expression
// arg1..argN을 받는 함수 func가 만들어짐. 화살표(=>)우측의 표현식을 평ㅇ가하고 평가결과를 반환

// 아래 함수의 축약 버전 == 위에있는 함수
// let func = function(arg1, arg2, ...argN){
  // return expression;
// }

let sum = (a, b) => a + b;
// 위 화살표 함수는 아래 함수의 축약 버전
// let sum = function(a, b){
//   return a + b;
// };
alert(sum(1, 2));  // 3

// 인수가 하나인
let double = n => n * 2;
alert(double(3));  //6

// 인수가 없는
let sayHi = () => alert("안녕하세요!");
sayHi();

//화살표함수 응용?
let age = prompt("나이알려줘",18);

let welcome = (age < 18) ?
  () => alert('안녕') :
  () => alert("안녕하세요!");

welcome();  // 안녕

// 본문이 여러 줄인 화살표 함수
let sum = (a, b) => {  // 한줄보다 많을때는 중괄호를 사용
 let result = a + b;
 return result;  // 중괄호를 사용할때는 return지시자를 사용해 반환해야함
};
alert( sum(1, 2));  //3







