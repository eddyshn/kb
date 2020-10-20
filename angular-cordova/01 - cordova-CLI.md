# Environment configuration - IOS

## ~/.bash_profile

```bash
#JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_221.jdk/Contents/Home
JAVA_HOME=/Applications/Android\ Studio.app/Contents/jre/jdk/Contents/Home

#CLASSPAHT=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

ANDROID_HOME=/Users/$USER/Library/Android/sdk

FLUTTER_HOME=/Users/eddy/Documents/flutter

PATH=$PATH:/usr/local/mysql/bin:$JAVA_HOME/bin:$FLUTTER_HOME/bin:$ANDROID_HOME:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools/bin

export JAVA_HOME
export CLASSPATH
export ANDROID_HOME
export PATH
```

```bash
source ~/.bash_profile
brew install gradle
brew info gradle
```





# Cordova

## cordova platform list

cordova版本号决定了anroid和ios的版本号

## cordova build <platform>

prepare 编译web准备资源，WWW，拷贝到platfomr

compile编译平台相关代码

相当于prepare+compile