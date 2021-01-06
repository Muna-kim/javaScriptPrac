let value = true;
alert(typeof value);  //boolean

//문자형으로 변환
value = String(value);
alert(typeof value); //string - 문자열 true로 저장됨
alert(value); //true

//숫자형으로 변환
alert("6"/"2"); //3

let str = "123";
alert(typeof str); //String

let num = Number(str);
alert(typeof num); //number

//글자가 들어가 있는 문자열을 숫자형으로 변환하려고 하면, NaN이 뜸
let age = Number("하하 123");
alert(age);  //NaN

//예외
alert(Number("   123   "));  //123 - 문자열 앞뒤에 공백은 없어짐
alert(Number("123z"));  //NaN
alert(Number(true));  //1
alert(Number(false));  //0
alert(Number(null));  //0  - null과 undefined 헷갈림
alert(Number(undefined)); //NaN

//불린형으로 변환 (숫자0, 빈문자열, null, undefined, NaN만 false)
alert(Boolean(1));  //true
alert(Boolean(0));  //false
alert(Boolean("hello"));  //true
alert(Boolean("")) //false
alert(Boolean("0"))  //true
alert(boolean("  "))  //true - 공백도 문자열로 취급