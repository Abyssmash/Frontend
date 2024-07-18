// 타이머 내장 함수

setTimeout(function() {                     // 경과 메시지만 뜸
    console.log('3초 경과');       
}, 3000);

const si = setInterval(() => {              // 1초에 하나씩 세어짐
    console.log(new Date());
}, 1000);

setTimeout(() => {
    console.log('5초 경과 후 초시계 정지시킴');
    clearInterval(si);
}, 5100);
