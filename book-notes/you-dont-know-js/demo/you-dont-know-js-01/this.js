// function foo(num) {
//     console.log( "foo: " + num );
// // 记录 foo 被调用的次数
//     this.count++;
// }
// foo.count = 0;
// var i;
// for (i=0; i<10; i++) {
//     if (i > 5) {
//         foo( i );
//     }
// }
//
//
// function foo2() {
//     console.log( this.a );
// }
//
// var a = 2;
// var o = { a: 3, foo: foo2 };
// var p = { a: 4 };
// o.foo(); // 3
// (p.foo = o.foo)();
//
// var f = o.foo;//2
// f();//2



// function foo() {
// // 返回一个箭头函数
//     return (a) => {
// //this 继承自 foo()
//         console.log( this.a );
//     };
// }
// var obj1 = {
//     a:2
// };
// var obj2 = {
//     a:3
// };
// var bar = foo.call( obj1 );
// bar.call( obj2 ); // 2, 不是 3 ！


function foo() {
    var self = this; // lexical capture of this
    setTimeout( function(){
        console.log( self.a );
    }, 100 );
}
var obj = {
    a: 2
};
foo.call( obj ); // 2
