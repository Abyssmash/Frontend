// 배열에 대한 고급 함수

// forEach
let fruits = '수박,참외,복숭아,토마토,포도'.split(',');     //스플릿은 메소드의 종류 중 하나 

for (let fruits of fruits)
    console.log(fruits);
fruits.forEach((fruits, index) => {
    console.log(`인덱스: ${index}, 아이템: ${fruits}`);
});