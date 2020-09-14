
//规避冲突
var MyLibrary = {
    name: "eddy",
    doSomething: function () {
        console.log('do something from MyLibrary');
    }
}

function doSomething() {
    console.log('do something from Global');
}


//  提升
f(); //1
f2(); //undefined
f3(); //TypeError: foo3 is not a function

var f;

function f() {
    a = 1;
    var a;
    console.log(a); //2
}

f = function () {
    console.log(2);
}

function f2() {
    console.log(a); //undefined
    var a = 3;
}


var f3 = function (){
    a = 4;
    var a;
    console.log(a);
}

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
}

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
