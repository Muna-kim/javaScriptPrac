// 함수표현식(function Expression)을 사용해서 함수 만들기
let sayHi = function(){
  alert("Hello");
};
sayHi();  // Hello
alert(sayHi);  // function(){alert("Hello")}가 alert창에 뜸

function sayHi2(){
  alert("안녕");
}
let func = sayHi2;  // sayHi2()를 저장한게 아니고 sayHi2를 func에 저장. 이해가 잘 안감 --이해햇음
                    // sayHi2()를 저장했다면 sayHi함수 그자체가 아니라, 함수 호출 결과가 func에 저장됨
                    // sayHi()이렇게 하면 정상작동 안함.ㅜㅜㅜ이해안감
let func2 = sayHi2();  // 안녕  - alert창이 뜸
// func2();  // 동작안함
alert(func2);  // undefined
func(); // 안녕
sayHi2();  // 안녕
// 정리 : 함수이름() 이렇게 하면 함수가 바로 실행이 됨. 변수 = 함수이름() 요렇게 하면 변수에 아무것도 저장되지 않음
//        변수 = 함수이름 이렇게 하면 함수식 그대로 변수에 저장이 되서, 변수() 이렇게 하면 기존 함수와 같아짐..

// 아래 두 식은 같은 결과
function sayHi4(){
  alert("Hi!");
}
let fun4 = sayHi4;
// 함수 표현식
let sayHi3 = function(){
  alert("Hi~");
};
let func3 = sayHi3;
// 함수 표현식 끝에는 ;이 붙는다. 이유는 {}끝이라서 붙는게 아니라 구문의 끝이기 때문.let sayHi = ....;

//콜백함수
function ask(question, yes, no){
  if(confirm(question)) yes()
  else no();
}
function showOk(){  // 콜백함수
  alert(" 동의하셨습니다." );
}
function showCancel(){  //콜백함수
  alert("취소 버튼을 누르셨습니다..")
}
ask("동의하십니까?", showOk, showCancel);  // 개인적으로 showOk가 함수인데 ()를 안쓴다는게 헷갈림
//코드길이 짧게쓰기 
function ask2(question, yes, no){
  if(confirm(question)) yes()
  else no();
}
ask2(
  "동의하십니까?",
  function(){alert("동의하셨습니다.");},  // 익명 함수(anonymous function)
  function(){alert("취소 버튼을 누르셨습니다.");}
);

//함수 표현식 vs 함수 선언문 - 첫뻔째 : 문법
//함수 선언문
function sum(a, b){
  return a + b;
}
//함수 표현식
let sum = function(a, b){
  return a + b;
};