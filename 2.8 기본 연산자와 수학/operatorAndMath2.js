//할당 연산자 (=)
let x = 2 * 2 + 1;
alert(x);  //5

let a = 1;
let b = 2;
let c = 3 - (a = b + 1) ;
alert(a);  //3
alert(c);  //0

//할당 연산자 체이닝
let d, e, f;
d = e = f = 2 + 2;
alert(d);  //4
alert(e);  //4
alert(f);  //4

//복합 할당 연산자
let n = 2;
n = n + 5;
n = n * 2;
//위의 코드와 아래 코드는 같은 코드임
n = 2;
n += 5;
n *= 2;
alert(n);  //14

//복합 할당 연산자의 우선순위는 할당연산자와 동일
// 따라서 연산자가 실행된 후에 복합연산자가 실행됨
n = 2;
n *= 3 + 5;
alert(n);  //16

//증가(increment)연산자 : ++
let counter = 2;
counter++;
alert(counter);  //3
//감소(decrement)연산자 : --
counter = 2;
counter--;
alert(counter);  //1

//counter++ : 후위형(postfix form)
//counter-- : 전위형(prefix form)

couter = 1;
let g = ++counter;
alert(g); //2

counter = 1;
let h = counter++;
alert(h);  //1
alert(h + 2);  //3    ??????난 사실 4가 나올줄 알았다.
                      //그럼 변수에 counter++을 저장하면 
                      //그냥 counter을 저장한거랑 같은결과인가?
                      alert(h);  //1
                      alert(counter);  //2  
                      //정리 : counter++을 변수에 대입시키면, 변수에는 counter의 값이 들어가고
                      //해당 변수는 더이상 변하지 않는다. 
                      //다만 변수에 넣고 난 이후에,  counter의 값이 1이 늘어남
counter = 0;
counter++;
alert(counter);  //1
++counter;
alert(counter);  //2

counter = 0;
alert( ++counter );  //1
counter = 0;
alert( counter++ );  //0
counter = 0;
alert( counter++ + 1);  // 1    2가 나올줄 알았는데.. 1이 나옴
                                //그럼 counter와 counter++의 차이점은 뭐지
                                alert(counter);  //1
                                //정리 : counter++은 counter의 상태로 일단 계산되고
                                //그 이후에 counter의 값이 1이 늘어남
counter = 1;
alert( 2 * ++counter);  //4

counter = 1;
alert( 2 * counter++);  //2     역시 counter랑 counter++랑 다른게 없네
alert(counter);  //2     2가 반환 됨. 아 계산하고 나서의 값이 바뀌는거구나

counter = 0 ;
counter++;
alert(counter);  //1
let i = counter + 1;
alert(i); //2
alert(counter);  //1

counter = 0;
counter++;
let j = counter;
alert(j);  //1

//코드안에서 후위형이 나왔을때 정확히 알고 있다고 생각했는데,
//오늘 공부하면서, 변수에 대입하면서 부터 머리가 복잡해짐..
//counter++로 바로 계산할때는 counter의 값으로 계산되고,
//그 이후에 counter의 값이 1 늘어남
//counter++; 하고나서 counter의 값을 쓰면 이미 counter+1이 된 상태임

//비트연산자 AND:&, OR:|, XOR:^, NOT:~, LEFT SHIFT:<<, RIGHT SHIFT:>>, ZERO-FULL RIGHT SHIFT:>>>
//^ << >> >>> 이건 먼지 모르겠음

//쉼표연산자(comma opreator) : ,
let k = (1 + 2, 3 + 4);  
alert(k);  //7 (3+4의 결과만 나옴)
k = 1 + 2, 3 + 4;  
alert(k);  //3

for(a = 1, b = 3, c = a + b ; a < 10 ; a++);



