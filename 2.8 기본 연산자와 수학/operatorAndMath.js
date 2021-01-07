// 단항, 이항, 피연산자
// 피연산자(operand)-인수(argument)라고도 부름 : 연산자가 연산을 수행하는 대상
// ex) 5*2 에서 5와2가, 총 2개의 피연산자
// 단항(unary)연산자 : 피를 하나만 받는 연산자
let x = 1;
x = -x;
alert(x); //-1

// 이항(binary) 연산자 : 두개의 피연산자를 받는 연산자
x = 1;
let y = 3;
alert(y - x);  //2

// 수학 연산자 (덧셈+,뺄셈-,곱셈*,나눗셈/,나머지%,거듭제곱**)
// % 나머지 연산자(remainder operator)
alert(5 % 2);  //1
alert(8 % 3);  //2
// ** 거듭제곱 연산자(exponentiation operator) - a**b는 a를 b번 곱한값
alert(2 ** 2);  //4
alert(2 ** 3);  //8
alert(2 ** 4);  //16
// a ** (1/2) - 의 제곱근,a ** (1/3) - 의 세제곱근
alert(4 ** (1/2));  //2
alert(8 ** (1/3));  //2
// 문자열 + 문자열 = 문자열
let s = "my" + "string";
alert(s);  //mystring
// 문자열 + 숫자 = 문자열
alert('1' + 2);  //12
alert(2 + '1');  //21
// 숫자 + 숫자 + 문자열 = 숫자+문자열
alert(2 + 2 + '1');  //41
// 문자열 + 숫자 + 숫자 = 문자열
alert('1' + 2 + 2 );  //122
//뺄셈(-) 나눗셈(/) 과 문자형과의 관계
alert(6 - '2');  //4
alert('6' / '2'); //3

//단항 연산지+와 숫자형으로의 변환
let q = 1;
alert(+q);  //1

let w = -2;
alert(+w);  //-2

alert( +true ); //1
// 위 코드는 이코드와 같다. alert(Number(true));
alert( +"" );  //0

let apples = "2";
let oranges = "3";
alert(apple + oranges); //23
//숫자형으로 변환후에 연산
alert(+apple + +orange);  //5
//alert(Number(apple) + Number(Orange)); 위와 같은 동작을 하는 코드


