const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex((val) =>{
    return val > 18
});



console.log(first);

const temp = [27, 28, 30, 40, 42, 52, 90];
let pos = temp.findLastIndex(x => x > 40);
console.log(pos);

const points = [40, 100, 1, 5, 25, 10];

points.sort(function(a, b){return a-b;});
console.log(points);


const myArr = [
    {name:"X00",price:100 },
    {name:"X01",price:100 },
    {name:"X04",price:110 },
    {name:"X05",price:110 },
    {name:"X06",price:110 },
    {name:"X02",price:100 },
    {name:"X03",price:100 },
    {name:"X07",price:110 }
  ];

myArr.sort(function(a, b){
    return a.price - b.price;
});

console.log(myArr);


points.forEach((val, index, array) => {
    console.log(`${val}  =>  ${index}`);
});