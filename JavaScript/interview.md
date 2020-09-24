# 变量提升

请给出下面程序的输出结果，并说明原因

```javascript
f();  //2
f2(); //undefined
f3(); //TypeError: foo3 is not a function

function f() {
    a = 1;
    var a;
    console.log(a); //2
}

function f2() {
    console.log(a); //undefined
    var a = 2;
}


var f3 = function (){
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

# 闭包

```
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

for (let i=1; i<=5; i++) {
    setTimeout( function timer() {
        console.log( i );
    }, i*1000 );
}
```



模拟私有方法

```js
var Counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }   
})();
```

# this

```javascript
function foo() {
console.log( this.a );
}
var obj = {
a: 2,
foo: foo
};
var bar = obj.foo; // 函数别名！
var a = "oops, global"; // a 是全局对象的属性
bar(); // "oops, global


var a = 2;
var o = { a: 3, foo: foo2 };
var p = { a: 4 };
o.foo(); // 3
// 赋值表达式 p.foo = o.foo 的返回值是目标函数的引用， 因此调用位置是 foo() 而不是 p.foo() 或者 o.foo()。 根据我们之前说过的， 这里会应用默认绑定。
(p.foo = o.foo)();//2

var f = o.foo;
f();//2



function foo() {
// 返回一个箭头函数
    return (a) => {
//this 继承自 foo()
        console.log( this.a );
    };
}
var obj1 = {
    a:2
};
var obj2 = {
    a:3
};
var bar = foo.call( obj1 );
bar.call( obj2 ); // 2, 不是 3 ！
```

