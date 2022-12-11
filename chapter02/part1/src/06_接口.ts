(function () {
  // 描述一个对象的类型
  type myType = {
    name: string;
    age: number;
  };

  /*
   *   接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
   *       同时接口也可以当成类型声明去使用
   * */
  interface myInterface {
    name: string;
    age: number;
  }

  interface myInterface {
    gender: string;
  }

  // const obj: myInterface = {
  //     name: 'sss',
  //     age: 111,
  //     gender: '男'
  // };

  /*
   * 接口可以在定义类的时候去限制类的结构，
   *   接口中的所有的属性都不能有实际的值
   *   接口只定义对象的结构，而不考虑实际值
   *       在接口中所有的方法都是抽象方法
   *
   * */
  interface A {
    age: number;
  }

  interface myInter extends A {
    name: string;

    sayHello(): void;
  }

  abstract class B {
    gender: boolean;

    constructor(gender: boolean) {
      this.gender = gender;
    }
  }

  /*
   * 定义类时，可以使类去实现一个接口,
   *   实现接口就是使类满足接口的要求
   * */
  class MyClass extends B implements myInter {
    name: string;
    age: number;

    constructor(name: string) {
      super(true);
      this.name = name;
      this.age = 18;
    }

    sayHello() {
      console.log(`大家好~~${this.name} ${this.age} ${this.gender}`);
    }
  }

  let c = new MyClass("shadow");
  c.sayHello();
})();
