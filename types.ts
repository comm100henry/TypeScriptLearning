
// Hello world example
function showMessage(){
    let message: string = "hello world2";
    console.log(message);
    return "haha2";
}

showMessage();
console.log(showMessage());



/////////// data types

// boolean 布尔值
let isMarried:boolean = true;

// number 数字
let a = 1;
let num:number = 4;

let decLiteral: number = 6; //十进制
let hexLiteral: number = 0xf00d; //十六进制
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744 //八进制

// string
let nickname: string = "Henry";
let age: number = 30;
let description: string = `Hello, my name is ${nickname}. I'm ${age} years old.`;
console.log(description);

let str:string = "hi there";
let firstName:string = "Henry";
let lastName = "Draper";

firstName.toLowerCase();
console.log(firstName + lastName);


// array 数组
let arrNum:number[] = [1,2,3];
let arrStr:string[] = ["1","2","3"];

console.log(arrNum);
console.log(arrNum[0]);
console.log(arrStr);


let list: Array<number> = [100, 200, 300]; // 数组泛型 generics

let person:{Id: number, Name: string}[] = [
    {
        Id: 1,
        Name: "Henry"
    },
    {
        Id: 2,
        Name: "Eric"
    }
];

console.log(person.pop());

// 元组 Tuple - 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
let tup:[string, number] = ['eric', 20]
// let tup2:[string, number] = [20, 'eric'] // error
console.log(tup[0].substring(2))


// enum 枚举
enum color {Red, Green, Blue}
let c: color = color.Blue;
console.log(c); // 得到2. （默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。）

let colorName:string = color[2];
console.log(colorName);

// any 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 
let notSure: any = 4;
notSure = "may be a string";
notSure = false; //ok. it's a boolean.

let notSureList: any[] = [1, "something", true];
notSureList[2] = false;
console.log(notSureList[2])


// void 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser(): void{
    console.log("this is my warning")
}

// object 非原始类型 
let obj: object = {Id:0};

declare function create(o: object | null): void;

// create({property: 1}); // ok
// create(null); // ok
//create(42); //error



// 类型断言 
let someValue: any = "this is a string";
// let lengthOfString: number = (<string>someValue).length; // 这个写法不知道为什么有问题。
let strLength2:number = (someValue as string).length;
console.log(strLength2)



// var声明有些奇怪的作用域规则 - 不推荐使用var. https://www.tslang.cn/docs/handbook/variable-declarations.html
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
// }
 


//// const 它们被赋值后不能再改变。
const numCats = 9;
const kitty = {
    name: "lucy",
    howMany: numCats,
}

// error Cannot assign to 'kitty' because it is a constant.(2588)
// kitty = {
//     name: "lily",
//     howMany: 9,
// }

// all okay.
kitty.name = "lily";
kitty.howMany = 10;

// Destructuring assignment  最简单的解构莫过于数组的解构赋值了
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2


