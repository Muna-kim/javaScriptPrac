//문제1. 전위형과 후위형
let a = 1, b =1;
let c = ++a;  //2
let d = b++;  //1

//문제2. 할당 후 결과 예측하기
let e = 2;
let x = 1 + (e *= 2);
alert(e);  //4
alert(x);  //5

//문제3. 형 변환
"" + 1 + 0  //10  --답: "10"
"" - 1 + 0  //-1
true + false  //1
6 / "3"  //2
"2" * "3"  //6
4 + 5 + "px"  //9px  --답: "9px"
"$" + 4 + 5  //$45  --답: "$45"
"4" - 2  //2
"4px" - 2  //NaN
7 / 0  //Infinity
" -9 " + 5  //-95  --답:" -9 5"
" -9 " - 5  //-14
null + 1  //NaN  --답: 1
undefined + 1  //1  --답: NaN
" \t \n" -2  //모름  --답: -2

//문제4. 덧셈 고치기
let f = prompt("덧셈할 첫 번째 숫자를 입력해주세요.",1);
let g = prompt("덧셈할 첫 번째 숫자를 입력해주세요.",2);
alert( f + g ); //12
alert(+f + +g);

