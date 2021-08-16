// enum 枚举
// 枚举成员会被赋值为从0开始递增的数字。（但是你可以指定开始的值），同时也会被枚举值到枚举名进行反向映射。
enum Days {
  Sun = 3,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

console.log(Days.Sun);
console.log(Days.Sat);
console.log(Days.Mon);
console.log(Days[0] === "Sun");
