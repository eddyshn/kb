# 3 函数作用域和块作用域  

# 4 提升

```javascript
foo(); //2
foo2(); //undefined
foo3(); //TypeError: foo3 is not a function

function foo() {
    a = 1;
    var a;
    console.log(a); //2
}

function foo2() {
    console.log(a); //undefined
    var a = 2;
}


var foo3 = function (){
    a = 1;
    var a;
    console.log(a);
}

// 上面的代码相当于
var a;
a = 1;
console.log( a );

var b;
console.log( b );
b = 1;
```

>  当你看到 var a = 2; 时， 可能会认为这是一个声明。 但 JavaScript 实际上会将其看成两个声明： var a; 和 a = 2;。 第一个定义声明是在**编译阶段**进行的。 第二个赋值声明会被留在**原地等待执行阶段**。
>
> 只有声明本身会被提升， 而赋值或其他运行逻辑会留在原地 

> 每个作用域都会进行提升操作  
>
> 函数声明会被提升， 但是函数表达式却不会被提升  



# 闭包

```javascript
function foo() {
var a = 2;
function bar() {
console.log( a );
}
return bar;
}
var baz = foo();
baz(); // 2 —— 朋友， 这就是闭包的效果。
```



>  将内部函数传递到所在的词法作用域以外， 它都会持有对原始定义作用域的引用，这个引用就叫闭包.
>
> 只要使用了回调函数， 实际上就是在使用闭包！  



## 循环和闭包

```javascript
for (var i=1; i<=5; i++) {
    setTimeout( function timer() {
        console.log( i );
    }, i*1000 );
}//输出5个6

for (var i=1; i<=5; i++) {
    (function() {
        setTimeout( function timer() {
            console.log( i );
        }, i*1000 );
    })();
}//输出5个6

for (var i=1; i<=5; i++) {
    (function() {
        var j = i;
        setTimeout( function timer() {
            console.log( j );
        }, j*1000 );
    })();
}

for (var i=1; i<=5; i++) {
    (function(j) {
        setTimeout( function timer() {
            console.log( j );
        }, j*1000 );
    })( i );
}

for (let i=1; i<=5; i++) {
    setTimeout( function timer() {
        console.log( i );
    }, i*1000 );
}
```



> 实际情况是尽管循环中的五个函数是在各个迭代中分别定义的，但是它们都被封闭在一个共享的全局作用域中， 因此实际上只有一个 i  

# 模块

```javascript
var MyLibrary = {
    name: "eddy",
    doSomething: function () {
        console.log('do something from MyLibrary');
    }
}

function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];
    function doSomething() {
        console.log( something );
    }
    function doAnother() {
        console.log( another.join( " ! " ) );
    }
    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}
var foo = CoolModule();
foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
```

