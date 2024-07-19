// JSON - JavaScript Object Notation
// 이 기종 컴퓨터 간에 데이터를 주고 받는 표준 = XML(eXtensible Markup Language)
// 실제는 json 이 업계 표준 (de facto standard)

let name = 'James', age = 27, job = '프로그래머';
let person = {name: name, age: age, job: job};
let newPerson = {name, age, job};           // Key이름과 변수명이 같으면 하나만 사용가능
console.log(person, newPerson);

let externalForm = JSON.stringify(person);             // 외부에서 받으면 stringify
console.log(externalForm);

let internalForm = JSON.parse(externalForm);           // 내부에서 받으면 parse
console.log(internalForm);

let personArray = [person, {name: 'Maria', age: 25, job: '디자이너'}];
console.log(JSON.stringify(personArray));
console.log(personArray);

