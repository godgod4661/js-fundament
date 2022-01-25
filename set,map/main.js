// Sets 
// set 객체는 중복되지 않는 유일한 값들의 집합, 배열과 유사하지만 차이점 있음
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(new Set('Jonas'));
console.log(ordersSet.size);  // 요소 개수 확인
console.log(ordersSet.has('Pizza'));  // 요소 존재 여부 확인, 불리언 값 리턴
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');  // 요소 추가
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');  // 요소 삭제
ordersSet.clear();  // 요소 일괄 삭제
console.log(ordersSet);
for (const order of ordersSet) console.log(order);
// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('jonasschmedtmann').size);


// Map
// map 객체는 키와 값의 쌍으로 이루어진 컬렉션, 중복된 키를 갖을 수 없음, Map객체와 객체의 차이점은 객체에서 키는 기본적으로 문자열인데 map에서 키는 모든 유형 가질 수 있음
const rest = new Map(); // Map 객체 생성
rest.set('name', 'Classico Italiano');  // 요소 추가
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
console.log(rest.get('name'));  // 요소 취득
console.log(rest.get(true));
console.log(rest.get(1));
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));  // 요소 존재 여부 확인, 불리언 값 반환
rest.delete(2); // 요소 삭제
// rest.clear();  // 요소 일괄 삭제
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
