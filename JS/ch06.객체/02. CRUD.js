// C - create, R - read/retrieve, U - update, D - delete

// 빈 객체 생성
let obj = {};

// 속성 추가
obj['name'] = '우피';
obj.weight = 10;
console.log(obj);

// 속성 수정
obj.weight = 12;
console.log(obj);

// 속성 제거
delete obj.weight;
console.log(obj);

// 출력
console.log(obj.toString());    // Object를 toString으로 정의해놓으면 원하는대로 출력가능 (객체를 문자열로 변환)

// 반복문
obj.weight = 9;
obj.height = 50;
for (let key in obj) {          //Array는 of obj는 in
    console.log(key, obj[key]);
}