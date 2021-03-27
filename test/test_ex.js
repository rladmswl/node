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
//console.log(books)

// title 바꾸기1
const b = books.find(function (item) {
    if (item.title === "Seven Dwarfs") {
        return true
    }
})
b.author = "Tom"

// title 바꾸기2
const c = books.find(function (item) {
    if (item.author === "Unknown") {
        return true
    }
})
c.author = "eunji"


// price > 30 인거 찾아서 10% 할인 한 걸로 바꾸기
const p = books.find(function (item) {
    if (item.price >30) {
        return true
    }
})
p.price = p.price * 0.9;


/*
for i in books {
    if (books.price > 20) {
        books.price = books.price * 90
    }

}
*/

//console.log(books)


let sum = 0;
books.forEach(item => sum =+ item.price)
console.log(sum)


const higeRandList = books.filter(item => item.rank > 3)
console.log(higeRandList)



//
const rankTitle = [...books].sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        } else if (a.title < b.title) {
            return -1
        } else {
            return 0;
        }
    }).map((item, index) => `${index + 1}. ${item.title}`)
console.log(rankTitle)

