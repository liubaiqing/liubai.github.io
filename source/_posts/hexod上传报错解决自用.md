---
title: hexod上传报错解决自用
date: 2024-12-07 19:03:02
comments: true
description: 学习记录
categories:
- hexo基本使用
tags:
- hexo
- git
---

# hexod上传报错解决自用

```
Error: Spawn failed
    at ChildProcess.<anonymous> (E:\my box\my blog\node_modules\hexo-deployer-git\node_modules\hexo-util\lib\spawn.js:51:21)
    at ChildProcess.emit (node:events:518:28)
    at cp.emit (E:\my box\my blog\node_modules\cross-spawn\lib\enoent.js:34:29)
    at ChildProcess._handle.onexit (node:internal/child_process:293:12)
```

删除.deploy_git文件之后
执行命令行git config --global core.autocrlf false
最后：hexo d
这个的问题大多是因为git进行push或者hexo d的时候改变了一些.deploy_git文件下的内容。

演示win10的命令行输入：

![](https://i-blog.csdnimg.cn/blog_migrate/6212f8d9f2f55ee29f95e8e1eb41b91c.png)