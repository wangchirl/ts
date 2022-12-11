/* ES6 模块化规范，从一个文件导入需要的内容 */
import { hi } from './module.js'
let a = 10;
// 这是一个注释
console.log(hi);
console.log(a);

function fn(a: number, b: number){
    return a + b;
}

function fn2(this: Window){
    alert(this);
}

let box1 = document.getElementById('box1');

// if(box1 !== null){
//     box1.addEventListener('click', function (){
//         alert('hello');
//     });
// }

box1?.addEventListener('click', function (){
    alert('hello');
});

