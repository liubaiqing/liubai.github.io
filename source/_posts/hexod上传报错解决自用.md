---
title: hexod�ϴ�����������
date: 2024-12-07 19:03:02
comments: true
description: ѧϰ��¼
categories:
- hexo����ʹ��
tags:
- hexo
- git
---

# hexod�ϴ�����������

```
Error: Spawn failed
    at ChildProcess.<anonymous> (E:\my box\my blog\node_modules\hexo-deployer-git\node_modules\hexo-util\lib\spawn.js:51:21)
    at ChildProcess.emit (node:events:518:28)
    at cp.emit (E:\my box\my blog\node_modules\cross-spawn\lib\enoent.js:34:29)
    at ChildProcess._handle.onexit (node:internal/child_process:293:12)
```

ɾ��.deploy_git�ļ�֮��
ִ��������git config --global core.autocrlf false
���hexo d
���������������Ϊgit����push����hexo d��ʱ��ı���һЩ.deploy_git�ļ��µ����ݡ�

��ʾwin10�����������룺

![](https://i-blog.csdnimg.cn/blog_migrate/6212f8d9f2f55ee29f95e8e1eb41b91c.png)