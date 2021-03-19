# HTML 标记基础

闭合标签与自闭合标签的区别在于，闭合标签包含的是会显示的实际内容，而自闭合标签只是给浏览器提供一个对要显示内容
的引用。浏览器会在 **HTML 页面加载的时候，额外向服务器发送请求**，以取得自闭合标签引用的内容  

```html
<img src="images/cisco.jpg" alt="My dog Cisco">
```

> XHTML 必须关闭 -> <img/>
>
> HTML5 可以不关闭，但最好关闭

# HTML Elements

## <meta>