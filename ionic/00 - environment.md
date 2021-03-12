# IOS

```bash
vim ~/.bash_profile

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

source ~/.bash_profile

####################################.zshrc####################################
xport ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export JAVA_HOME=$(/usr/libexec/java_home)


brew install gradle
brew info gradle

# ~/.gradle/wrapper/dists
```



# Windows

## gradle

download from [https://gradle.org/releases/](https://gradle.org/releases/)

unzip to a folder

add to **gradle-x\bin** to PATH and **gradle-x** to **GRADLE_HOME**

