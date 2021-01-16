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

let age = 16;
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

// if문 밖에서 welcome함수 호출하기 - 함수 표현식을 사용하면 가능
let age2 = prompt("나이는?", 18);
let welcome;
if(age < 18){
  welcome = function(){
    alert("안뇽");
  };
}else{
  welcome = function(){
    alert("안뇽하세요!");
  };
}
welcome();  // 안뇽하세요

// ?연산자를 사용하여 단순화
let age3 = prompt("나이!!",18);
let welcome = (age < 18) ?
  function() { alert("안늉!");} :
  function() { alert("안늉하세요!");};

welcome();  // 안늉하세요

// 함수 선언문과 함수 표현식중 무엇을 선택할까?
// 함수 선언문을 사용하는게 좋다. 함수가 선언되기 전에 호출할수 있어서 자유롭고,
// 가독성도 좋다.
// 다만 함수 선언 방식이 적합하지 않을때 함수 표현식을 사용한다.(welcome()처럼..)