//a가 null도 아니고 undefined도 아니면 a, 그 외의 경우는 b
x = a ?? b
x = (a !== null && a !== undefined) ? a : b ;

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

alert(firstName ?? lastname ?? nickname ?? "Anonymous");  //Supercoder

//'??'와 '||'의 차이
let height = 0 ;
alert(height || 100);
alert(height ?? 100);

//연산자 우선순위 - ??느 우선순위가 낮아서 사용시에 괄호를 사용한다.
height = null;
let width = null;

let area = (height ?? 100) * (width ?? 50);
alert(area);  //5000

//안전성 때문에 ??는 &&이나 ||와 함께 사용하지 못함
let x = 1 && 2 ?? 3;  //  systaxError
//괄호를 사용하면 사용 가능
x = (1 && 2) ?? 3;
alert(x);  //2

height = height ?? 100; //height가 null이나 undefined인 경우, 100을 할당
                        // height = 100 과 다른점, height에 다른 값이 들어있을 경우에는 적용이 되지 않음
