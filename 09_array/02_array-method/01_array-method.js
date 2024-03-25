const arr = [];
// 배열의 생성자 함수 Array 
console.log(arr.constructor === Array);
// 배열의 프로토타입 객체는 Array.prototype
console.log(Object.getPrototypeOf(arr) === Array.prototype);
// Array.prototype 은 배열을 위한 빌트인 메소드를 제공한다.

/*
    indexOf : 배열에서 요소가 위치한 인덱스를 리턴
    lastIndexOf : 배열의 요소가 위치한 마지막 인덱스를 리턴
    includes : 배열에 해당 요소 포함 여부 리턴
*/

const foodList = ['물회', '삼겹살', '까르보불닭', '팔도비빔면', '짜파게티'];

console.log(`index('물회') : ${foodList.indexOf('물회')}`);
console.log(`index('냉면') : ${foodList.indexOf('냉면')}`);       // -1 (존재하지 않는 요소)

console.log(`lastIndex('팔도비빔면') : ${foodList.lastIndexOf('팔도비빔면')}`);

console.log(`foodList.includes('물회) : ${foodList.includes('물회')}`); // 너 물회 가지고 있니? > true

// push(+), pop(-) 는 생략~~

// unshift : 배열의 맨 앞에 요소 추가(+) 
// shift : 배열의 맨 앞 요소 제거(-) 후 반환
const chickenList = ['양념치킨', '후라이드', '파닭'];

console.log(chickenList);

chickenList.unshift('간장치킨');
chickenList.unshift('마늘치킨');
console.log(`unshift 후 배열 :  ${chickenList}`);       // 마늘치킨,간장치킨,양념치킨,후라이드,파닭 출력(마지막 추가일수록 앞에!)

chickenList.shift();
console.log(`shift 후 배열 : ${chickenList}`);          // 간장치킨,양념치킨,후라이드,파닭 출력(가장 앞에 있는 요소 제거!)

// concat : 두 개 이상의 배열을 결합
const idol1 = ['아이브', '에스파'];
const idol2 = ['블랙핑크', '여자아이들'];
const idol3 = ['트와이스', '방탄소년단'];

// 사용식:  배열명.concat(배열명1, 배열명2, ...);
const mix = idol1.concat(idol2);    //  앞(idol1)에 있는게 기준!
const mix2 = idol3.concat(idol1,idol2);
console.log(`idol1 을 기준으로 결합 : ${mix}`);
console.log(`idol3 을 기준으로 결합 : ${mix2}`);

