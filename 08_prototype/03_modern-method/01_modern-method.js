// Object.creat(proto) : [[Prototype]] 이 proto 를 참조하는 빈 객체를 만들어준다.

const user = {
    activate : true
};

// 프로토타입이 user인 새로운 객체 생성
const student = Object.create(user);            // user 로부터 상속, 연결해준다.
console.log(student.activate);

//Object.getPrototypeOf(obj)            - obj의 [[Prototype]] 반환
console.log(Object.getPrototypeOf(student) === user);

// Object.setPrototypeOf(obj, proto)    - obj의 [[Prototype]] 이 proto가 되도록 설정
Object.setPrototypeOf(student, {});     //student 의 프로토타입을 {빈 객체}으로 변경
console.log(Object.getPrototypeOf(student) === user);  //false로 출력됨, {}로 변경해서 더이상 x



