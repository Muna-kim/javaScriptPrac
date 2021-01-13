// 과제 1. 반복문의 마지막 값
let i = 3;

while (i){
  alert(i--);  // 1
}

// 과제 2. while 반복문의 출력값 예상하기
i = 0;
while (++i < 5) alert(i);  //1, 2, 3, 4

i = 0;
while (i++ < 5) alert(i);  //1, 2, 3, 4, 5

// 과제 3. for반복문의 출력값 예상하기
for (let i = 0; i<5 ; i++) alert(i);  //0,1,2,3,4
for (let i = 0; i<5 ; ++i) alert(i);  //0,1,2,3,4

// 과제 4. for문을 이용하여 짝수 출력하기(2부터 10까지 숫자중 짝수만 출력)
for(let x=1; x<=10 ; x++){
  if(x%2==0) alert(x);
}

// 과제 5. for반복문을 while반복문으로 바꾸기
for (let y = 0; y<3; y++){
  alert( `number ${y}!`)  //0, 1. 2
}
y = 0 ;
while(y<3){
  alert(`number ${y}!`);
  y++;
}

//과제 6. 사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기
// let z = 0;
// outer1:
// while(true){
//   if(z <= 100){
//     z = +prompt('100보다 큰 수를 입력해주세요.','');
//   }else if(z == '' || z==null){
//     break outer1;
//   }else{
//     break outer1;
//   }
// }
//위코드 왜 안돼서 수정함
let z = 0;
outer2:
while(true){
  z = +prompt('100보다 큰 수를 입력해주세요.','');
  if(z == '' || z==null){
    break outer2;
  }else if(z <= 100){
    continue;
  } else{
    break outer2;
  }
}

//정답
let num;
do{
  num = prompt("100을 초과하는 숫자를 입력해주세요",0);
}while (num <= 100 && num);

// 소수 출력하기
let num = prompt('최대수를 입력해주세요')