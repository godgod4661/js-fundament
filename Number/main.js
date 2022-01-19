///////////////////////////////////////
// Math and Rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));
console.log(Math.min(5, 18, 23, 11, 2));
console.log(Math.PI * Number.parseFloat('10px') ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(10, 20));
// Rounding integers
console.log(Math.round(23.3));
console.log(Math.round(23.9));
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));
console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));
console.log(Math.trunc(23.3));
console.log(Math.trunc(-23.3));   // -23
console.log(Math.floor(-23.3));   // -24
// Rounding decimals , 해당 소수점자리까지만 반올림되어 표시하고 만약 넘어가면 그 뒤는 0으로 채움
// 주의점 : 정수를 문자열로 반환
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

///////////////////////////////////////
// Working with BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(4838430248342043823408394839483204n);
console.log(BigInt(48384302));
// Operations
console.log(10000n + 10000n);
console.log(36286372637263726376237263726372632n * 10000000n);
// console.log(Math.sqrt(16n));
const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));
// Exceptions
console.log(20n > 15);    // true
console.log(20n === 20);  // false
console.log(typeof 20n);  // bigint
console.log(20n == '20'); // true