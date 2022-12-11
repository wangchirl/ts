{
  // object 代表所有非值类型的类型，例如 数组 对象 函数等，常用于泛型约束
  let a: object;
  a = [];
  a = {};
  a = function () {};

  // {} 用来指定对象中可以包含哪些属性
  // 语法：{属性名:属性值,属性名:属性值}
  // 在属性名后边加上?，表示属性是可选的
  let b: { name: string; age?: number };
  b = { name: "孙悟空", age: 18 };

  // [propName: string]: any 表示任意类型的属性
  let c: { name: string; [propName: string]: any };
  c = { name: "猪八戒", age: 18, gender: "男" };

  // 函数结构的类型声明,语法：(形参:类型, 形参:类型 ...) => 返回值
  let d: (a: string, b: string) => number;
  d = function (n1: string, n2: string): number {
    return n1.length + n2.length;
  };

  // 数组的类型声明,语法：类型[] 或者 Array<类型>
  let e: string[];
  e = ["a", "b", "c"];
  let f: number[];
  f = [1, 2, 3];
  let g: Array<number>;
  g = [1, 2, 3];

  // 元组，元组就是固定长度的数组,语法：[类型, 类型, 类型]
  let h: [string, number];
  h = ["hello", 123];

  // enum 枚举,语法：enum 名称
  enum Gender {
    Male,
    Female,
  }
  // 对象结构声明
  let i: { name: string; gender: Gender };
  i = {
    name: "孙悟空",
    gender: Gender.Male, // 'male'
  };

  console.log(i.gender === Gender.Male);

  // & 表示同时，相当于 let j: {name:string,age:number}
  let j: { name: string } & { age: number };
  //   j = {name: '孙悟空'}; // 属性 age 没有设置
  j = { name: "孙悟空", age: 18 };

  // | 表示或
  let jj: { name: string } | { age: number };
  //   jj = {}; // 必须要设置一个属性值
  jj = { name: "shadow" };
  jj = { age: 18 };
  jj = { name: "shadow", age: 18 };

  // 类型的别名
  type myType = 1 | 2 | 3 | 4 | 5;
  let k: myType;
  let l: myType;
  let m: myType;

  k = 2;
  //   k = 0 // 必须是指定的字面量中的值

  type type = string | number;
  let kk: type;
  //   kk = false; // 必须是指定类型的值类型
  kk = "shadow";
  kk = 123;
}
