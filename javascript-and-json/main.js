var arrBooks = [
  {
    isbn: '123',
    title: 'Abc',
    author: 'I'
  },
  {
    isbn: '456',
    title: 'Def',
    author: 'Need'
  },
  {
    isbn: '789',
    title: 'Ghi',
    author: 'Coffee'
  }
];
console.log(arrBooks);
console.log(typeof arrBooks);

console.log(JSON.stringify(arrBooks));
console.log(JSON.stringify(typeof arrBooks));

var studentInfo = '{"id": 1989, "name": "SJ"}';

console.log(JSON.stringify(studentInfo));
console.log(JSON.stringify(typeof studentInfo));

var obj = JSON.parse(studentInfo);

console.log(obj);
console.log(typeof obj);
