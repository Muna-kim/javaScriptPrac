//함수 선언문 vs 함수 표현식 - 두번째 : 언제 함수를 생성하는지
//함수 선언문  //미리 함수 선언 가능 - 자바스크립트는 준비단계에서 전역에 선언된 함수 선언물을 찾고, 해당 함수를 생성함
sayHi("John"); 

function sayHi(name){
  alert(`Hello, ${name}` );
}
//함수 표현식  //함수 표현식은 미리 함수 선언 할수 없음
sayHi2("John");  // Error

let sayHi2 = function(name){  // 이부분에 와서야 함수가 만들어 지기 때문에 위에서 선언을 먼저 할수 없음
  alert(`Hello, ${name}`);
};

////함수 선언문 vs 함수 표현식 - 세번째 : 스코프
let age = prompt("나이는?",18);

// if(age < 18){
//   function welcome(){
//     alert("안녕!");
//   }
// } else{
//   function welcome(){
//     alert("안녕하세요!")
//   }
// }
// welcome();  //Error

let age2 = 16;
if(age < 18){
  welcome();  // 안녕!
  function welcome(){
    alert("안녕!");
  }
  welcome();  // 안녕!
}else{
  function welcome(){
    alert("안녕하세요!");
  }
}
welcome();  //Error