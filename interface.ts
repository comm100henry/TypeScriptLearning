
//// interface 接口

// function getBio(person: {bio: string}) {
//     console.log(person.bio);
// }

// let person1 = {age: 10, bio: "football player"};
// getBio(person1)


interface Person {
    name: string;
    bio: string;
    age?: number; // 可选属性
    readonly gender?: string; // 只读属性
}

function getBio(persobio: Person){
    console.log(persobio.bio);
}

let person1 = {name: "henry", age: 10, bio: "football player"};
getBio(person1)


// 接口里的属性不全都是必需的。
interface squareConfig{
    color?: string;
    width?: number;
}

function createSquare(config: squareConfig): {color: string, area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({color: "black"})
console.log(mySquare)

