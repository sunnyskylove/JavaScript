// in 연산자 
// 프로퍼티 존재 여부

var student = {
    name : '조평훈',
    age : 20,
    test : undefined
};

console.log(student.name === undefined);        // student.name 이 존재하는지 확인 > false(출력됨)- 존재
console.log(student.height  === undefined);     // true로 출력됨(존재하지 않으니깐~~)
console.log(student.test === undefined);    // true로 뜸. 
// 프로퍼티 값이 undefined 이기 때문에 프로퍼티는 존재하지만, true - 존재하지 않음으로 판별되는 문제가 발생하게 된 것임

// in
console.log("========================================")
console.log('name' in student);  //name에 있는 property인 student가 존재하는지 문의 > true- 존재한다.
console.log('height' in student);    // false - 존재하지 않는다.
console.log('test' in student); 


