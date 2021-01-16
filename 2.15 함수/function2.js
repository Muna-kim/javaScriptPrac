// //기본값(default value) 설정
// function showMessage(from, text="no text given"){
//   alert(from + " : " + text);
// }
// showMessage("Ann"); // Ann: no text given

// //복잡한 표현식도 기본값으로 설정 가능
// function showMessage2(from, text = anotherFunction()){

// }

// //기본값 설정- if문
// function showMessage3(text){
//   if(text == undefined){
//     text = '빈 문자열';
//   }
//   alert(text);
// }
// showMessage3();  //빈문자열
// //기본값 설정 - 논리연산자||
// function showMessage4(text){
//   text = text || '빈 문자열';
//   // text=0;
//   alert(text);
// }
// showMessage4();  //빈문자열
// //null 병합 연산자 ?? 사용하면 0처럼 falsy로 평가되는 값들을 일반값처럼 처리 가능
// //이해 안감 위에도 text에 0넣어도 문제 없이 0이 출력되는데..이건 뭔소리지
// function showCount(count){
//   alert(count ?? "unknown");
// }

// showCount(0);  //0
// showCount(null);  //unknown
// showCount();  //unknown

// //반환값
// function sum(a, b){
//   return a + b ;
// }

// let result = sum(1,2);
// alert(result);  //3

// //반환 값(return value)
// function checkAge(age){
//   if(age >= 18){
//     return true;
//   }else {
//     return confirm('보호자의 동의를 받으셨나요?') //comfirm - 확인(true), 취소(false) 선택가능한 알럿창
//   }
// }

// let age = prompt('나이',);

// if(checkAge(age)){
//   alert('접속 허용');
// }else{
//   alert('접속 차단');
// }

// function showMovie(age){
//   console.log(age);
//   if(!checkAge(age)){
//     return;  //종료
//   }
//   alert("영화 상영");
// }

// showMovie(age);

// //return문이 없으면  undefined를 반환
// function doNothing() { /* empty */}
// alert(doNothing() === undefined ); //true

// //return지시자만 있는 경우 undefined를 반환함
// function doNothing2(){
//   return;
// }
// alert(doNothing2() ===undefined);  //true

// //return과 값사이에 절대 줄을 삽입하면 안됨
// return//자바스크립트는 줄바꿈을하면 ; 이 자동으로 넣기때문에 제대로 동작 안함

//   (some + long + expression + or + whatever *f(a) + f(b))

// //이렇게 return지시자가 있는 줄에서 시작을 해야함. 그이후는 줄바꿈해도 됨
// return(
//   some + long + expression
//   + or +
//   whatever
// )
// //함수 이름 짓기 - 이름은 가능한 한 간결하고 명확하게

function showPrimes(n){
  nextPrime: for(let i = 2; i < n; i++){
    for(let j = 2; j < i; j++){
      if(i % j == 0)continue nextPrime;
    }
    alert(i);  // 소수
  }
}
showPrimes(10);

//자기 설명적(self-describing)코드:함수 이름을 보고 해당 함수가 어떤 동작을 한다는걸 쉽게 아는것
function showPrime2(n){
  for(let i = 2; i < n; i++){
    if(!isPrime(i)) continue;

    alert(i);
  }
}
function isPrime(n){
  for(let i = 2; i< n; i++){
    if(n % i == 0) return false;
  }
  return true;
}
