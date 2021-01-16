// // else는 정말 필요한가요?
// function chectAge(age){
//   if(age > 18){
//     return true;
//   }else {
//     //...
//     return confirm('보호자의 동의를 받으셨나요?')
//   }
// }
// // 문제1. 위코드에서 else를 삭제해도 기존코드와 동일하게 작동할까?
// function checkAge2(age){
//   if(age > 18){
//     return true;
//   }
//   //...
//   return confirm('보호자의 동의를 받으셨나요?');
// }
// // 내생각: 동일하다. 왜냐하면 if안 조건문이 false이면 if문을 빠져나오니까


// // 문제2. ?나 ||를 사용하여 함수 다시 작성하기
// function checkAge3(age){
//   if(age > 18){
//     return true;
//   }else {
//     return confirm('보호자의 동의를 받으셨나요?');
//   }
// }
// //if문읠 사용하지 않고 동일한 동작을 하는 함수를 한줄에 작성해보기
// // 조건1. 물음표 연산자?를 사용하기
// // 조건2. OR연산자 ||를 사용하기

// function checkAge4(age) {
//   (age > 18 ||confirm('보호자의 동의를 받으셨나요?')==true ) ? alert(true) : alert(false)
// }
// checkAge4(prompt('나이',));
// //두가지 조건 다 만족하게 만들라는줄 알고 만들었는데.. 그게 아니고.. ? , ||중 하나만 들어가게 하란 말이였음


// function checkAge5(age){
//   (age > 18) ? alert(true) : alert(confirm('동의받았냐'))
// }
// checkAge5(prompt('나이',))

// function checkAge6(age){
//   alert((age > 18 || confirm('동의받아왔니?')));
// }
// checkAge6(prompt('나이',))

// // 문제3. min(a,b)함수 만들기 - a와 b중 작은값을 반환해주는 함수
// function min(a, b){
//   if(a < b){
//     return a;
//   }else{
//     return b;
//   }
// }
// alert(min(7, 5));
// //?연산자 넣어서 만들어보기
// function min2(a, b){
//   (a < b) ? a : b ;
// }
// alert(min2(8, 9));
// //undefined가 나옴.... 왜지?
// function min3(a, b){
//   return(a < b) ? a : b ;
// }
// alert(min3(8, 9));
// //return을 넣으니 되네. 위에선 안넣어도 잘 동작 했는데?
// //아. 위에 함수가 잘못됐네... return을 하고... true,false를 반환하게 해야하는데, 난 바로 alert으로 true false를 반환하게 했네

// //pow(x, n)함수만들기 - x의 n제곱을 반환해주는 함수(x의 n제곱은 x를 n번 곱하는것)
// //pow(3, 2) = 3 * 3 = 9
// //pow(3, 3) = 3 * 3 * 3 = 9
// //프롬프트 대화상자를 띄워 사용자로부터 x와 n을 입력받기.
// 주의사항 : n은 1이상의 자연수 이어야 합니다. 이외에는 자연수를 입력하라는 알럿창 띄워주기
function pow(x, n){
  let j = 1;
  for(let i=1;i<=n;i++){
    j = x * j
  }
  return j;
}
let x =prompt('x값은?',);
let n=prompt('n값은?',);

if(n >1){
  alert(pow(x, n));
}else{
  alert('자연수를 써 주시오')
}
