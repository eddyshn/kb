function mixin( sourceObj, targetObj ) {
    for (var key in sourceObj) {
// 只会在不存在的情况下复制
        if (!(key in targetObj)) {
            targetObj[key] = sourceObj[key];
        }
    }
    return targetObj;
}
var Vehicle = {
    engines: 1,
    ignition: function() {
        console.log( "Turning on my engine." );
    },
    drive: function() {
        this.ignition();
        console.log( "Steering and moving forward!" );
    }
};
var Car = mixin( Vehicle, {
    wheels: 4,
    drive: function() {
        Vehicle.drive.call( this );
        console.log(
            "Rolling on all " + this.wheels + " wheels!"
        );
    }
} );


function removeDuplicateChar(str){
    var len = str.length,
        char,
        charCount = {},
        newStr = [];
    for(var i =0; i<len; i++){
        char = str[i];
        if(charCount[char]){
            charCount[char]++;
        }
        else
            charCount[char] = 1;
    }
    for (var j in charCount){
        if (charCount[j]==1)
            newStr.push(j);
    }
    return newStr.join('');
}
