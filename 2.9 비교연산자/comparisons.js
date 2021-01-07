//불린형 반환
alert( 2 > 1 );  // true
alert( 2 == 1 );  //false
alert (2 != 1);  //true

let result = 5 > 4 ;
alert( result ); //true

//문자열 비교 : 사전편집(lexicographical)순-사전 뒤쪽의 문자열이 더크다.
alert( 'Z' > 'A' );  //true
alert( 'Glow' > 'Glee' );  //true
alert( 'Bee' > 'Be' );  //true

alert( 'a' > 'A'); //true (정확히 말하면 유니코드 순)

//다른 형을 가진 값 간의 비교
alert( true == 1 );  //true
alert( false == 0 );  //true

let a = 0;
alert(Boolean(a));  //false

let b = "0";
alert(Boolean(b));  //true

alert(a == b); //true  - 동등비교연산자(==)은 피연산자를 일시적으로 숫자형으로 바꿈

//일치 연산자 - ==가 형이다른 피연산자를 비교할대 피연산자를 숫자형으로 바꾸기 때문에 생기는 문제
alert( 0 == false);  //true
alert( '' == false); //true

//0과 false는 어떻게 구별할수 있을까?
//일치 연산자(strict equlity operator)===을 사용하면 형변환 없이 비교
//일치 연산자는 엄격한(strict) 동등 연산자(자료형의 동등 여부까지 검사)
//형이 다르면 false를 즉시 반환
alert( 0 === false);

//null이나 numdefined와 비교하기
alert (null === undefined);  //false
alert ( null == undefined);  //true  특별한 규칙이 적용됨

//null을 숫자형으로 변환:0 , undefined을 숫자형으로 반환:NaN

//null vs 0
alert(null > 0);  //false
alert(null == 0);  //false
alert(null >= 0);  //true  >=는 기타비교연산자의 동작원리에 따라 null이 숫자형으로 반환 돼 0이 됨

alert(undefined > 0);  //false  undefined는 NaN을 반환
alert(undefined < 0);  //false
alert(undefined == 0);  //false  undefined==undefined, undefined==null만 가능

