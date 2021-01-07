//if문 - 결과가 true이면 블록이 실행
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?','');
if(year == 2015) alert('정답닙니다!');

//true이 한개보다 많을때는 중괄호로 코드블록을 감싸야 한다.
if( year == 2015){
  alert("정답입니다!");
  alert("아주 똑똑하시네요!")
}

//불린형으로의 변환
//falsy값: 0,"",null,undefined,NaN 은 모두 불린형으로 변환시 false
//truthy값: falsy이외의 값은 true

if(0){
  alert("절대 실행 되지 않음. 0은 falsy라서")
}

if(1){
  alert("항상 실행됨. 1은 truthy라서")
}

let cond = (year == 2015); //동등비교를 통해 true/false 여부 결정
if(cond){
  alert("year==2015 가 true이면 실행")
}
//else절
year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?','');
if(year == 2015){
  alert('정답입니다!');
}else{
  alert('오답입니다!');
}

//else if로 복수 조건 처리하기
year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?','');
if(year < 2015){
  alert('숫자를 좀 더 올려보세요.');
}else if(year > 2015){
  alert('숫자를 좀 더 내려보세요')
}else{
  alert('정답입니다!');
}
//조건부(conditional) 연산자 '?'
let accessAllowed;
let age = prompt('나이를 입력해 주세요.','');

if(age > 18){
  accessAllowed = true;
}else{
  accessAllowed = false;
}
alert(accessAllowed);

//condition이 truthy라면 value1이, 그렇지 않으면 value2를 반환
// let result = condition ? value1 : value2;

// accessAllowed = (age > 18) ? true : false ;

//alert나오게 만들어 보기
age = prompt('나이를 입력해 주세요.','');
accessAllowed = (age > 18) ? alert("성인") : alert("미성년자") ;

//다중 '?'
age = prompt('나이를 입력해 주세요.','18');
let message = (age < 3) ? '아기야 안녕?' : (age < 18) ? '안녕!' : 
              (age < 100) ? '환영합니다!' : '나이가 아주 많으시거나, 나이가 아닌 값을 입력하셨군요!';

//부적절한 '?' - 물음표를 if 대용으로 쓰는 경우
let company = prompt('자바스크립트는 어떤회사가 만들었을까요?','');
(company == 'Netscape') ? alert('정답입니다!') : alert('오답입니다'); //동작은 하지만 가독성이 떨어짐
                                                            //내가 위에서 만들어본 코드랑 비슷..ㅋㅋ
company = prompt('자바스크립트는 어떤회사가 만들었을까요?','');
if(company == 'Netscape'){
  alert('정답입니다!');
} else{
  alert('오답입니다!');
}