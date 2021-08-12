
////////////////////////////// class 类
////////////////////////////// https://www.tslang.cn/docs/handbook/classes.html

// class Fruit {
//     name: string;  // Property 'name' has no initializer and is not definitely assigned in the constructor.
// }
// let banana = new Fruit();
// banana.name = "Banana";
// console.log(banana.name);


// 我们声明一个 Greeter类。这个类有3个成员：一个叫做 greeting的属性，一个构造函数和一个 greet方法。
// 你会注意到，我们在引用任何一个类成员的时候都用了 this。 它表示我们访问的是类的成员。
class greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "hello,  " + this.greeting;
    }
}


let myGreeter = new greeter("morning")
myGreeter.greet()
console.log(myGreeter.greet())

/////// Class Heritage 继承


class Animal {
    name: string;
    age: number;
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    move(distance: number) {
        console.log(`Animal ${this.name} has moved ${distance} meters.`);
    }
}

// Dog是一个 派生类，它派生自 Animal 基类，通过 extends关键字。 派生类通常被称作 子类，基类通常被称作 超类。
// 因为 Dog继承了 Animal的功能，因此我们可以创建一个 Dog的实例，它能够 bark()和 move()。
class Dog extends Animal {
    bark() {
        console.log("woof!");
    }
}

const myDog = new Dog("wangcai", 5);
myDog.move(10);
myDog.bark();
myDog.move(10);
myDog.bark();


class Snake extends Animal {
    constructor (name: string, age: number) {
        super(name, age);
    }

    move(distance: number = 5) {
        console.log("Slithering...");
        super.move(distance);
    }
}

class Horse extends Animal {
    constructor (name: string, age: number) {
        super(name, age);
    }

    move(distance: number = 44) {
        console.log("Galloping...");
        super.move(distance);
    }
}


///// 这个例子展示了一些上面没有提到的特性。 这一次，我们使用 extends关键字创建了 Animal的两个子类： Horse和 Snake。
// 与前一个例子的不同点是，派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。 而且，在构造函数里访问 this的属性之前，我们 一定要调用 super()。 这个是TypeScript强制执行的一条重要规则。
// 这个例子演示了如何在子类里可以重写父类的方法。 Snake类和 Horse类都创建了 move方法，它们重写了从 Animal继承来的 move方法，使得 move方法根据不同的类而具有不同的功能。 注意，即使 tom被声明为 Animal类型，但因为它的值是 Horse，调用 tom.move(34)时，它会调用 Horse里重写的方法
let sam = new Snake("Sam the python", 5);
let harry: Animal = new Horse("Harry the pony", 10);

sam.move();
harry.move(33);


////// 在TypeScript里，成员都默认为 public。 当然，你可以标记成员为private. 当成员被标记成 private时，它就不能在声明它的类的外部访问。
class Animal2 {
    public name: string;
    private age: number;
    public constructor(theName: string, theAge: number) { 
        this.name = theName; 
        this.age = theAge;
        }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

let tommy = new Animal2("Tommy the cat", 2)
// tommy.age; // error: Property 'age' is private and only accessible within class 'Animal2'.



///// protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。
class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    private department: string;
    readonly id: number; // 你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

    constructor(name: string, department: string, id: number) {
        super(name);
        this.department = department;
        this.id = id;
    }

    intro() {
        return `Hello, my name is ${this.name} and I work in ${this.department}. `
    }
}


// 注意，我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee是由 Person派生而来的。
let howard = new Employee("Howard", "Sales", 101);
console.log(howard.intro());
// console.log(howard.name); // error - Property 'name' is protected and only accessible within class 'Person' and its subclasses.(2445)

console.log(howard.id);
// howard.id = 222; // error - Cannot assign to 'id' because it is a read-only property.


// 参数属性 - 可以方便地让我们在一个地方定义并初始化一个成员。 注意看我们是如何舍弃了 theName，仅在构造函数里使用 readonly name: string参数来创建和初始化 name成员。 我们把声明和赋值合并至一处。
class Person2 {
    constructor(public name: string, protected age: number) {
    }
}

let h = new Person2("hh", 10);
console.log(h.name);
// console.log(h.age); // error


// 存取器
// TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

//

class Person3 {
    static id: number = 330724;
    constructor(public name: string, protected age: number) {
    }
}

let h3 = new Person3("hh", 10);
// console.log(h3.id); // error: Property 'id' does not exist on type 'Person3'. Did you mean to access the static member 'Person3.id' instead?
console.log(Person3.id)