
//자바스크립트의 변수는 자료형에 관계없이 모든 데이터일수 있다.
// 동적 타입(dynamically typed) 언어
let message = "hello";
message = 123456;

//숫자형
let n = 123;
n = 12.345;

//Infinity는 무한대(∞)를 나타냄 - 0으로 나누면 무한대
alert(1/0);

//NaN은 계산중 에러가 발생
alert("숫자가아님"/2)

//BigInt형은 정수리터를 끝에 n을 붙임
const bigInt = 123445434353131351313215618798721n

// 자바스크립트에선 문자열을 따옴표로 묶는다.
let str = "Hello";
let str2 = 'Single quotes are ok too';
// backtick안에 ${변수} 형식으로 값을 가져올수 있다.
let phrase = `can embed another ${str}`; // ` : backtick

// ${변수} , ${수학식}
let name = "John";
alert(`Hello, ${name}!`);
alert(`the result is ${1+2}`)
alert("the result is ${1+2}") //backtic이 아닌 일반 따옴표는 ${1+2}를 그냥 문자열로 인식

// javaScript는 Char같은 글자형이 없음.

//Boolean 불린형
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1 ;
alert (isGreater);

//null값 - 어느 자료형에도 속하지 않는 값
//자바스크립트 이외 언어 에서의 null : 존재하지않는 객체에 대한 참조, 널포인터
//자바스크립트에서의 null:  존재하지 않는(nothing)값, 비어있는(empty)값, 알수없는(unKnown)값

//undefined값 - 자신만의 자료형을 형성
//값이 할당되지 않은 상태
let age;
alert(age);

//이경우에는 null을 쓰는게 좋다.
age = 100;
age = undefined;
alert(age);

// 객체(object) : 원시(primitive)자료형과 반대로, 복잡한 개체(entity)를 표현 가능
// 심볼(symbol) : 객체의 고유한 식별자(unique identifier)를 만들때 사용

//typeof 연산자 - 인수의 자료형을 반환
typeof undefined;   //undefined
typeof 0;   //number
typeof 10n;   //bigint
typeof true;   //boolean
typeof "foo";   //string
typeof Symbol("id");    //symbol
typeof Math;    //object
typeof null;    //object
typeof alert;   //object
