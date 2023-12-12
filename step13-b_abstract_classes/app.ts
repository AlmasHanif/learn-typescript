
// abstract class Base {
//     foo(): number { return this.bar(); }
//     abstract bar() : number;
// }

// class E extends Base { // okay -- implements abstract method
//     bar() { return 1; }
// }

// var obj1 = new Base();//Error, cannnot create a instance of a Abstract class

// console.log(obj1.foo());





// abstract class Base {
//     foo(): number { return this.bar(); }
//     abstract bar(): number;
// }

// class E extends Base {
//     bar() { return 1; }
// }

// // Error: Cannot create an instance of an abstract class.
// // This line will result in a TypeScript error.
// // Uncommenting it will cause a compilation error.
// // var obj1 = new Base();

// // Instead, you should create an instance of a concrete class that extends Base.
// var obj2 = new E();

// console.log(obj2.foo()); // Outputs: 1
