// ||(OR) - 인수중 하나라도 true이면 true를 반환
result = a||b;

alert(true || true);  //true
alert(false || true);  //true
alert(true || false);  //true
alert(false || false);  //false

//피연산자가 불린형이 아니면, 평가를 위해 불린형으로 변환됨 (숫자1:true, 숫자0:false)
if(1||0){
  alsert('truthy!');
}

//OR연산자는 if문에서 자주 사용됨, 주어진 조건중 하나라도 참인지
let hour = 9;

if(hour < 10 || hour > 18){
  alert('영업시간이 아닙니다.')
}

//if문 안에 여러가지 조건
let hour = 12;
let isWeekend = true;
if(hour < 10 || hour > 18 || isWeekend) {
  alert('영업시간이 아닙니다.')
}

//OR연산자와 피연산자가 여러개인 경우
result = value1 || value2 || value3;

alert(1 || 0);  //1
alert(null || 1);  //1
alert(null || 0 || 1);  //1
alert(undefined || null || 0);  //0

//활용
let firstName = "";
let lastName = "";
let nickName = "바이올렛";

alert(firstName || lastName || nickName || "익명");  //바이올렛

//단락 평가 : 왼쪽부터 시작해서 오른쪽으로 평가를 진행하는데, truthy를 만나면 나머지 값들은 건들지 않은채 평가를 멈춤
true || alert("not printed");  //alert실행 안됨
false || alert("printed");  //alert실행 됨

//&&(AND) - 두 피연산자가 모두 참일때 true를 반환
alert(true && true);  //true
alert(true && false);  //false
alert(false && true);  //false
alert(false && false);  //false

//if문과 AND문을 함께 활용
hour = 12;
let minute = 30;

if(hour == 12 && minute ==30){
  alert('현재 시각은 12시 30분 입니다.')
}

//AND연산자의 피연산자도 타입에 제약이 없음
if(1 && 0){
  alert("if문안에 false가 들어가 있으므로 alert창은 실행되지 않습니다.")
}

//첫뻔째 falsy를 찾는 ANd연산자
alert(1 && 0);  //0
alert(1 && 5);  //5 
alert(null && 5);  //null
alert(0 && "아무거나 와도 상관없습니다.");  //0

alert(1 && 2 && null && 3);  //null
alert(1 && 2 && 3);  //3

//if를 ||와 &&로 대체하지 말기
let x = 1;
(x > 0) && alert('0보다 큽니다!');
if(x > 0) alert('0보다 큽니다!');

//!(NOT)
result = !value;
alert(!true);  //false
alert(!0);  //true

alert(!!"non-empty string");  //true
alert(!!null);  //false
alert(Boolean("non-empty stirng"));  //true
alert(Bpplean(null));  //false
