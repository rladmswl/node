let books = [
    {title: "Three Little Pigs", price: 20, author: "Jacobs", rank: 1},
    {title: "Alice in Wonderland", price: 25, author: "Carroll", rank: 2},
    {title: "Seven Dwarfs", price: 35, author: "Disney", rank: 3},
    {title: "Swallow's gift", price: 15, author: "Unknown", rank: 4},
];

let book = {title: "Cinderella", price: 30, author: "Perrault", rank: 5};
// 맨 앞에 삽입
books.unshift(book);
//console.log(books)
// 맨 앞 삭제
books.shift(book);
//console.log(books)
// 맨 뒤 삽입
books.push(book);
//console.log(books)
// 맨 뒤 삭
books.pop(book);
//console.log(books)
// 인덱스 2에 삽
books.splice(2,0,book)
//console.log(books)
//
books.splice(2,1) // ??
console.log(books)