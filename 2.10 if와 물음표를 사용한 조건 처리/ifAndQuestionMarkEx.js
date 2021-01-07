//문제1. if와 문자열0
//실행 될까? -> No:0은 false  --답 true(ㅜㅜ문자열이었구나)
if("0"){
  alert('Hello')
}

//문제2. 자바스크립트의 공식 이름(if else 이용)
let answer = prompt("자바스크립트의 공식 이름은 무엇일까요?","");
if(answer == "ECMAScript"){
  alert("정답입니다.!")
}else{
  alert("모르셨나요? 정답은 ECMAScript입니다!")
}

//문제3. 입력받은 숫자의 부호표시하기(if..else,프롬프트 대화상자 사용)
let num = prompt('숫자를 하나 입력해주세요','');
if(num > 0){
  alert(1)
}else if(num < 0){
  alert(-1)
}else /*if(num == 0)*/{
  alert(0)
}

//문제4. 'if'를 '?'로 교체하기
let result;

if(a + b < 4){
  result = '미만';
}else {
  result = '이상';
}

result = (a+b < 4) ? '미만' : '이상';

//문제5. if..else를 ?로 교체하기
let message;

if(login == '직원'){
  message = '안녕하세요.';
} else if (login == '임원'){
  message = '환영합니다.';
} else if (login == ''){
  message = '로그인이 필요합니다.';
} else {
  message = '';
}

message = (login == '직원')?'안녕하세요':(login == '임원')?'환영합니다':
(login == '')?'로그인이 필요합니다':'';