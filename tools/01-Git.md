[toc]



# Git 设置

## 设置用户名

```bash
git config --global user.name "Eddy Shan"
# 查看用户名
git config --global user.name
```

## 创建ssh key

[link](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

```ba
ssh-keygen -t ed25519 -C "eddy.shan@outlook.com"
```



# Push, Pull

```git push <远程主机名> <本地分支名>:<远程分支名```



# 分支管理

## 创建分支

```
git branch <branch-name>
git checkout -b <branch-name>
git checkout -b <new-branch> origin/<source-branch>

git branch --set-upstream-to=origin/test test
```

> `git checkout`命令加上`-b`参数表示创建并切换，相当于以下两条命令
>
> ```
> git branch <branch-name>
> git checkout <branch-name>
> ```
>
> 

## 切换分支

```
git checkout <branch-name>
git switch <branch-name>
```





## 合并分支

1. 更新要合并的两个分支到最新
2. `git merge <source branch> --no-ff -m 'log message'`

> --no-ff 禁用`Fast forward`模式, Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息。

## 删除分支

1. 删除本地分支

   `git branch -d <branch_name>`

2. 删除远程分支

   `git push origin -d <branch_name>`
   
   ## 查看远程分支
   
   1. 查看远程分支地址
   
      `git remote -v`
   
   2. 查看本地分支
   
      `git branch`
   
   3. 查看远程分支
   
      `git branch -r`
   
   4. 查看所有分支
   
      `git branch -a`
   
   



# 2. 标签管理

## 2.1 创建标签

```
git tag <name>
git tag <name> <commit id>
git tag -a <tag-name> -m <tag message> <commit id(optional)>
```



## 2.2 查看标签

```
git tag
git show <tagname>
```

## 2.3 删除标签

```
git tag -d <tag-name>
```



# 3. 版本回退

参考 [简书](https://www.jianshu.com/p/c2ec5f06cf1a) [CSDN](https://blog.csdn.net/yxlshk/article/details/79944535)

## 3.1 未add

```
git checkout -- <file>
git checkout .
git checkout *.*
```

> git restore 是git 2.23中的新命令， 这里和checkout做用一样。

## 3.2 已add未commit

```
git reset
git reset --mixed
git reset HEAD
git reset HEAD <file>
git push --force
```

> reset 不加参数(mixed)：保留工作目录，并清空暂存区。也就是说，工作目录的修改、暂存区的内容以及由 **reset** 所导致的新的文件差异，都会被放进工作目录。简而言之，就是「把所有差异都混合（mixed）放在工作目录中」。

## 3.3 恢复到之前某个提交的版本

```
git reset --hard <目标版本>
git reset --hard HEAD^^
git reset --hard HEAD~100
```

> 适用场景: 如果想恢复到之前某个提交的版本，且**那个版本之后提交的版本我们都不要**了
>
> 当你在 **reset** 后面加了 **--hard** 参数时，你的stage区和工作目录里的内容会被完全重置为和**HEAD**的新位置相同的内容。换句话说，就是你的没有**commit**的修改会被***全部擦掉***。
>
> > 在Git中，用**HEAD**表示**当前版本**，上一个版本就是**HEAD^**，上上一个版本就是**HEAD^^**，当然往上100个版本写100个^比较容易数不过来，所以写成**HEAD~100**。



## 3.4 撤销某个特定版本的修改

`git revert -n <commit id>`

> 适用场景: 如果我们想撤销之前的某一版本，但是又**想保留该目标版本后面的版本**，记录下这整个版本变动流程。

## 清除untracked files

```bash
# 删除 untracked files
git clean -f
 
# 连 untracked 的目录也一起删掉
git clean -fd
 
# 连 gitignore 的untrack 文件/目录也一起删掉 （慎用，一般这个是用来删掉编译出来的 .o之类的文件用的）
git clean -xfd
 
# 在用上述 git clean 前，墙裂建议加上 -n 参数来先看看会删掉哪些文件，防止重要文件被误删
git clean -nxfd
git clean -nf
git clean -nfd
```



# 4. 查看提交录

## ## 查看历吏记录

` git log --oneline --graph`



# git diff

# git log(--graph --pretty=oneline --abbrev-commit)

- 查看指定文件的历史记录
  - git log --pretty=oneline `<file>`

# 远程仓库

- git pull origin  <远程分支名>:<本地分支名> --rebase
- git push origin <本地分支名>:<远程分支名>



# git tag

1. 创建标签

   ```
   git tag <name>
   git tag <name> <commit id>
   git tag -a <tag-name> -m <tag message> <commit id(optional)>
   ```

   

2. 查看标签

   ```
   git tag
   git show <tagname>
   ```

3. 删除标签

   ```
   git tag -d <tag-name>
   ```

# 5. 正确提交顺序

   **commit -> pull -> push**

   > push之前先pull一下，一方面可以更新本地代码，另一方面便于在本本合并冲突，降低远程仓库合并时出现冲突的概率

# 6. 添加已提交的文年到.gitignore

```
git pull
git rm --cached <file>/git rm -r --cached <folder>
修改.getignore,添加过滤
再次添加commit
git push
```

# 7. rebase



# blame

```bash
git blame 文件名 | grep "查找词"
```





   **场景一： 本地与远程同一分支提交历史不一致， push时失败**

`git pull`

如有冲突解决冲突

`git rebase`或 `git rebase 远程分支`

如有冲突解决冲突

`git rebase --continue`

# [cherry-pick](https://zhuanlan.zhihu.com/p/58962086)



# CRLF LF



```bash
// 提交时转换为LF，检出时转换为CRLF
git config --global core.autocrlf true   

// 提交时转换为LF，检出时不转换
git config --global core.autocrlf input   

// 提交检出均不转换
git config --global core.autocrlf false

// 拒绝提交包含混合换行符的文件 （一般设置为true）
git config --global core.safecrlf true   

// 允许提交包含混合换行符的文件
git config --global core.safecrlf false   

// 提交包含混合换行符的文件时给出警告
git config --global core.safecrlf warn
```



> 一般配置
>
> ```dart
> git config --global core.autocrlf input
> git config --global core.safecrlf true
> ```
>
> 

# git clean

```
git clean -nxfd
git clean -nf
git clean -nfd
```

**墙裂建议加上 -n 参数来先看看会删掉哪些文件，防止重要文件被误删**

首先确认要删除的文件

**git clean -fd -n**

如果以上命令给出的文件列表是你想删除的， 那么接下来执行

git clean -f -d或者git clean -fd就可以了。

其中-f表示文件 -d表示目录, 如果还要删除.gitignore中的文件那么再加上-x (-x对我来说没用）

如果git submodule中也存在需要删除的文件那么需要再加个-f， 变成git clean -dff