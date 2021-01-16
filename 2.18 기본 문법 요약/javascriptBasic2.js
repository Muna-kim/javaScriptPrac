// 반복문
while(condition){
  //...
}

do{
  //...
}while(condition);

for(let i = 0; i < 10; i++) {
  //...
}
// for(let...) 안쪽에 선언한 변수는 오직 반복문 내에서만 사용가능
// 지시자 break, continue는 반복문 전체나 현재 실행중인 반복을 빠져나가는데 사용

// switch문
let age = prompt('나이를 알려 주세요.',)

switch (age) {
  case 18:
    alert("won't work"); //prompt는 항상 문자열을 반환해서, 이 case문에 도달 못함
    break;
  
  case "18":
    alert("18살");
    break;

  default:
    alert("어떤 case문에도 해당하지 않음")
  }

// 함수
// 1. 함수 선언문
function sum(a, b){
  let result = a + b;

  return result;
}
// 2. 함수 표현식
let sum2 = function(a, b){
  let result = a + b;

  return result;
};
// 3.화살표 함수
let sum3 = (a, b) => a + b;
// 대괄호
let sum4 = (a, b) =>{
  //..
  return a + b;
}
// 인수가 없는 경우
let sayHi = () => alert("Hello");
// 인수가 하나인 경우
let double = n => n * 2;

// 함수는 항상 return을 반환함, return이 없으면 undefined를 반환함

