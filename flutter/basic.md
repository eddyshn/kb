# Future

## create Future

- constructor
- `Future.value(value, delay)`

## usage

## FutureBuilder





# Stream

```dart
Iterable<int> naturalsTo(int n) sync* {
    int k = 0;
    while (k < n) {
      yield k++;
    }
  }

  Stream naturalsTo2(int n) async* {
    int k = 0;
    while (k < n) {
      yield k++;
    }
  }

var xx = naturalsTo(5).iterator;
while (xx.moveNext()) {
  print(xx.current);
}

var yy = naturalsTo2(5);
yy.listen((event) =>print(event));
```





# Provider

# 创建 ChangeNotifier

```da
ChangeNotifierProvider({Key key, @required ValueBuilder builder, Widget child })
ChangeNotifierProvider.value({Key key, @required T notifier, Widget child })

    ChangeNotifierProvider(
      create: (context) => Counter(),
      child: MyApp(),
    )
```

# 监听&取值

`final counter = Provider.of<Counter>(context);`

取值并监听，如果不想监听

 `final counter = Provider.of<Counter>(context, listen: false);`



```
context.watch<Counter>()//只能在build方法中调
context.read<Counter>();//在build外面也可以调
```