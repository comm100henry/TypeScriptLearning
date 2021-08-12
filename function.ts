// named functions
function add(x: number, y: number) {
  return x + y;
}

console.log(add(3, 5));

// anonymous functions
let myAdd = function (x: number, y: number) {
  return x + y;
};
console.log(myAdd(2, 3));

// 在JavaScript里，函数可以使用函数体外部的变量。 当函数这么做时，我们说它‘捕获’了这些变量。 至于为什么可以这样做以及其中的利弊超出了本文的范围，但是深刻理解这个机制对学习JavaScript和TypeScript会很有帮助。
let z = 100;
function addToZ(x: number, y: number) {
  return x + y + z;
}

console.log(addToZ(20, 30));

// 也可以为函数定义类型
function addWithType(x: number, y: number): number {
  return x + y;
}

// 函数的可选参数
let myAdd2: (x: number, y: number, z?: number) => number = function (
  x: number,
  y: number,
  z?: number
): number {
  if (z) return x + y + z;
  else return x + y;
};

// TypeScript里的每个函数参数都是必须的。 传递给一个函数的参数个数必须与函数期望的参数个数一致。

console.log(myAdd2(1, 2, 3));
console.log(myAdd2(1, 2)); // works fine as y is optional
// myAdd2(1, 2, 3, 4); // error:  Expected 2-3 arguments, but got 4.ts(2554)

function buildName(
  firstName: string = "will",
  lastName: string,
  nickName?: string
) {
  return `the name is ${firstName} ${lastName}. The nickname is ${nickName}. `;
}

console.log(buildName("henry", "draper", "don"));
console.log(buildName(undefined, "murphy", "e")); // 如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值。
console.log(buildName("john", "chase")); // 可选参数可以不传

// 剩余参数
function buildName2(firstName: string, ...restOfNames: string[]) {
  return firstName + ", " + restOfNames.join(", ");
}
let myName = buildName2("a", "henry", "mj", "draper");
console.log(myName);

// **************** 重载

// pickCard方法根据传入参数的不同会返回两种不同的类型。 如果传入的是代表纸牌的对象，函数作用是从中抓一张牌。 如果用户想抓牌，我们告诉他抓到了什么牌。
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: any): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    console.log(x);
    console.log(x.length);
    console.log(pickedCard);
    return pickedCard;
  }

  // Otherwise just let them pick the card
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    console.log(x);
    console.log(pickedSuit);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "clubs", card: 10 },
  { suit: "spades", card: 4 },
  { suit: "hearts", card: 14 },
];
let mypickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + mypickedCard1.card + " of " + mypickedCard1.suit);

let mypickedCard2 = pickCard(3);
console.log("card: " + mypickedCard2.card + " of " + mypickedCard2.suit);

//  简单的重载
function getValue(value: string): string;
function getValue(value: number): number;
function getValue(value: string|number): string|number {
    return value;
}

let numValue:number = getValue(1);
let strValue:string = getValue("hello");