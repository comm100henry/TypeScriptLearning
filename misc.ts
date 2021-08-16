function getProperty<T>(obj:T, key: string) {
    return obj[key];
}
let x = {a:1, b:2, c:3, d:4};



console.log(x["a"]);

console.log(getProperty(x,"a"));
console.log(getProperty(x,"m"));