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

