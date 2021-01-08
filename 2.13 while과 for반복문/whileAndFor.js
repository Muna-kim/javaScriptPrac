//while 반복문
//condition(조건)이 truthy이면 박복문 본문의 코드가 실행됨
while (condition){
  // 코드
  //반복문 본문(body)이라 불림
}

//반복문 본문이 한번 실행되는 것을 반복(iteration, 이터레이션)이라고 부름
//아래 예시는 반복문이 세번의 이터레이션을 만듬
let i = 0;
while (i < 3){
  alert(i);
  i++;
}

i = 3;
while (i){  //while(i != 0)과 같은 코드. i가 0이되면 조건이 falsy가 되므로 반복이 멈춤
  alert(i)
  i--;
}

//반복문이 한줄이면 대괄호는 생략가능
i = 3;
while (i) alert(i--);

//do...while 반복문
do{
  // 반복문 본문
}while (condition);

i = 0;
do {
  alert(i);
  i++;
} while (i<3);

// for반복문
for (begin; condition; step){
  // 반복문 본문
}

for (let i=0; i<3; i++){
  alert(i);
}
// begin,step 생략 가능
i = 0;
for(; i<3; ){ // while(i<3)과 같은 코드
  alert(i++);
}

// 반복문 빠져나오기
let sum = 0;
while(true){
  let value = +prompt("숫자를 입력하세요.", '');
  if (!value) break;
  sum += value;
}
alert('합계: ' + sum);

//continue
for(i=0; i<10; i++){
  if (i % 2 == 0) countinue;

  alert(i);  //1, 3, 5, 7, 9
}