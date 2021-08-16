// 泛型 是指 在定义函数、接口或者类的时候，不预先指定具体类型，而在使用的时候再指定类型的一种特性。

// 如下方法没有确切定义返回值类型，运行的数组每一项都可以是任意类型。
function createArray(length: number, value: any): Array<any> {
  let arr = [];
  for (var i = 0; i < length; i++) {
    arr[i] = value;
  }

  return arr;
}

console.log(createArray(3, 1));
console.log(createArray(3, "apple"));

// 使用泛型进行改造。 - 泛型可以帮助我们限定约束规范
function createArray2<T>(length: number, value: T): Array<T> {
  let arr = [];
  for (var i = 0; i < length; i++) {
    arr[i] = value;
  }

  return arr;
}

var numArray: number[] = createArray2<number>(3, 1);
var strArray: string[] = createArray2(3, "apple"); // 不传类型的时候，会进行类型推断

// 接口中使用泛型
interface ICreate {
  (name: string, value: any): Array<any>;
}

let myFunc: ICreate = function (name: string, value: any): Array<any> {
  return [];
};

interface ICreate2 {
  <T>(name: string, value: T): Array<T>;
}

let myFunc2: ICreate2 = function <T>(name: string, value: T): Array<T> {
  return [];
};

let strArr2: string[] = myFunc2("henry", "love");

// 泛型 类
class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x: number, y: number) {
  return x + y;
};
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 3));

let myGenericString = new GenericNumber<string>();
myGenericString.zeroValue = "";
myGenericString.add = function (x: string, y: string) {
  return x + y;
};

console.log(myGenericString.add(myGenericString.zeroValue, "+henry"));

