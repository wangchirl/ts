// 声明一个number类型变量a
let a: number;

// a的值只能是数字
a = 10;
a = 33;
// a = 'hello'; // 不能赋值字符串

// 声明string类型变量
let b: string;
b = 'hello';
// b = 123; // 不能赋值数字类型

// 声明boolean类型
// let c: boolean = false;

// TS可以自动对变量进行类型检测
let c = false;
c = true;

// JS中的函数是不考虑参数的类型和个数的
// TS中的函数参数类型和返回值如果不指定会被推断为 any
function sum1(a, b){
    return a + b;
}

console.log(sum1(123, 456)); // 579
console.log(sum1(123, "456")); // "123456"

// 指定参数类型和返回值类型，调用时必须传递指定类型的参数
function sum(a: number, b: number): number{
    return a + b;
}

let result = sum(123, 456);
// let res = sum(123,'456'); // 参数类型只能是数字
