//과제1
alert(null || 2 || undefined);  //2

//과제2
alert(alert(1) || 2 || alert(3));  //1 다음에 2

//과제3
alert(1 && null && 2);  //null

//과제4
alert(alert(1) && alert(2));  //1

//과제5
alert(null || 2 && 3 || 4);  //3

//과제6
let age;
if (age >= 14 && age <= 90){
  alert("14세이상 90세 이하 입니다.");
}

//과제7
if(!(age>=14 && age <=90 ));

if(age<14 || age > 90);

//과제8
if(-1 || 0) alert('first');  //first
if(-1 && 0) alert('second');  //
if(null || -1 && 1) alert('third');  //third

//과제9
let id = prompt('id를 입혁하세요','');

if(id == 'Admin'){
  let pw = prompt('pw를 입력하세요.','');
    if(pw=='TheMaster'){
      alert('Welcome!');
    }else if(pw=='' || pw==null){
      alert('취소되었습니다.');
    }else if(!(pw=='TheMaster')){
      alert('인증에 실패하였습니다.');
    }
 }else if(id=='' || id==null) {
    alert('취소되었습니다');
}else if(!(id=='Admin')){
  alert('인증에 실패하였습니다.');
}