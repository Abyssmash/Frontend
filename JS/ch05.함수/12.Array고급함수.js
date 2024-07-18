// 배열에 대한 고급 함수

// forEach
let fruits = '수박,참외,복숭아,토마토,포도'.split(',');     //스플릿은 메소드의 종류 중 하나 

for (let fruit of fruits)
    console.log(fruit);
fruits.forEach((fruit, index) => {
    console.log(`인덱스: ${index}, 아이템: ${fruit}`);
});

let numbers = [11, 23, 56, 72, 83];
numbers.map((num) => {
    console.log(`${num}, ${num * num}`);
});

// 과일의 글자수가 3인 과일만 선택
let newFruits = fruits.filter((fruit) => fruit.length == 3);
console.log(newFruits);

// node + 파일 이름 숫자 + 탭 누르면 바로 나옴