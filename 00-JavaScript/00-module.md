# common js(nodejs)

- 赋值给module.exports,整个文件只导出一个对象

```javascript
// 1.js
const car = {
    brand: 'Ford',
    model: 'Fiesta'
}

module.exports = car

// test.js
const car = require('./1')

console.log(car); //{ brand: 'Ford', model: 'Fiesta' }

```

- 将要导出的对象添加为 `exports` 的属性, 可以导出多个对象, moudle.exports.xx中module可以省略.

  ```javascript
  // 2.js
  const phone = {
      brand: 'apple',
      model: 'x'
  }
  
  
  const book = {
      author: 'eddy',
      price: 100
  }
  
  
  module.exports.person = {
      name: 'eddy'
  }
  
  module.exports.phone = phone;
  
  module.exports.book = book;
  
  // test.js
  // const phone = require('./2').phone;
  // const book = require('./2').book;
  // const person = require('./2').person;
  
  const {phone, book, person} =  require('./2');
  
  console.log(phone); //{ brand: 'apple', model: 'x' }
  console.log(book); //{ author: 'eddy', price: 100 }
  console.log(person); //{ name: 'eddy' }
  ```

  

# es6

- 参考ES6标准入门 第3版第**22章**