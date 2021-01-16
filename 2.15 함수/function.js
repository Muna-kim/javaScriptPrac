//함수 선언(function declaration)
function showMessage(){
  alert('안녕하세요');
}
showMessage();  //안녕하세요

//새롭게 함수 정의하기
function showMessage2(){
  alert('Hi~')
}
showMessage2(); //Hi
showMessage2();  //Hi

//지역변수
function showMessage3(){
  let message = "반갑습니다."
  alert(message)
}
showMessage3();  //반갑습니다
//alert(message);  //message는 지역변수라서 Err뜸  //우리프로그램에서는 Err뜨는게 아니고 동작 멈춤.. 

//외부 변수
let userName = 'John';  //외부변수

function showMessage4(){
  let message = 'Hello, '+userName;  //함수 내부에서 외부변수에 접근가능
  alert(message);
}
showMessage4(); //Hello, John

let userName3 = "John";
function showMessage5(){
  userName3 = "Bob";
  let message = 'Hello,' + userName3;
  alert(message);
}
alert(userName3);  //함수 호출 전이라 John 출력
showMessage5();  //Hello, Bob
alert(userName3);  //함수 호출후라 Bob 출력

//외부변수는 지역 변수가 없는 경우에만 사용 가능
//외부에서 변수가 선언되었는데, 내부에서 같은이름의 변수가 또 선언되면, 외부변수는 내부변수에 가려져 값이 수정되지 않음
let userName2 = 'Chris';
function showMessage6(){
  let userName2 = 'kate';

  let message = 'Hello,'+ userName2;
  alert(message);
}

showMessage6();  //Hello kate
alert(userName2);  //chris

// 전역변수는 프로젝트 전반에서 쓰는 경우를 제외하고는 되도록 사용하지 않는것이 좋다. 지역변수로 선언해서 사용하자.

//매개변수(Parameter)-인수(argument)라고도 불림
function showMessage7(from, text){
  alert(from +' : ' +text);
}
showMessage7('Ann','Hello!');  //Ann: Hello
showMessage7('Ann',"what's up?");  //Amm: What's up?

//전역변수 from
function showMessage8(from, text){
  from = '*' + from + '*';
  alert( from + ' : ' +text);
}
let from= "Ann";
showMessage8(from, "Hello");  //*Ann* : Hello
alert(from);  //Ann  //함수는 복사된 값을 사용하기 때문에 바깥의 "from"은 값이 변경되지 않습니다.

