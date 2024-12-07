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

# 狗屎SSL验证

```
error: RPC failed; curl 35 OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443
send-pack: unexpected disconnect while reading sideband packet
fatal: the remote end hung up unexpectedly
Everything up-to-date
FATAL Something's wrong. Maybe you can find the solution here: https://hexo.io/docs/troubleshooting.html
Error: Spawn failed
    at ChildProcess.<anonymous> (E:\my box\my blog\node_modules\hexo-deployer-git\node_modules\hexo-util\lib\spawn.js:51:21)
    at ChildProcess.emit (node:events:518:28)
    at cp.emit (E:\my box\my blog\node_modules\cross-spawn\lib\enoent.js:34:29)
    at ChildProcess._handle.onexit (node:internal/child_process:293:12)
```

通义千问给出的解决办法

从你提供的信息来看，你在使用 Hexo 框架部署博客到 GitHub Pages 时遇到了 SSL 连接错误。这个错误通常是由网络问题引起的，比如防火墙、代理设置、SSL 证书问题或 GitHub 的服务器暂时不可用等。

以下是一些可能的解决方案：

1. **检查网络连接**：
   - 确保你的网络连接稳定，并且可以访问 `https://github.com`。
   - 如果你在公司网络或使用公共 Wi-Fi，可能存在防火墙或代理限制了 HTTPS 连接，尝试切换到其他网络环境。

2. **增加 Git 的缓冲区大小**：
   - 有时候推送较大的提交可能会导致此错误。你可以尝试增加 Git 的缓冲区大小来解决这个问题：
     ```bash
     git config --global http.postBuffer 524288000
     ```

3. **使用 SSH 而不是 HTTPS**：
   - 如果你当前是通过 HTTPS 推送到 GitHub，考虑切换到 SSH 方式。首先确保已经在 GitHub 上配置好了 SSH 密钥，然后更改远程仓库 URL：
     ```bash
     git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
     ```
   - 将 `USERNAME` 和 `REPOSITORY` 替换为你的 GitHub 用户名和仓库名称。

4. **临时禁用 SSL 验证**（不推荐）：
   - 如果上述方法都无效，作为临时措施，你可以尝试禁用 Git 的 SSL 验证（注意：这会降低安全性）：
     ```bash
     git config --global http.sslVerify false
     ```
   - 完成部署后，建议重新启用 SSL 验证：
     ```bash
     git config --global http.sslVerify true
     ```

5. **等待一段时间再试**：
   - 有时 GitHub 的服务器可能出现短暂的问题，稍后再尝试可能会解决问题。

6. **检查本地和远程分支状态**：
   - 确认本地和远程分支是否同步，有时本地没有新的更改推送也会显示类似的错误信息。

7. **查看 GitHub 状态页面**：
   - 访问 [GitHub 状态页面](https://www.githubstatus.com/) 查看是否有已知的服务中断。

如果以上方法都不能解决问题，你也可以参考 Hexo 官方文档中的故障排除部分，或者在 Hexo 社区中寻求帮助。希望这些信息能帮助你成功部署博客！

根据第四个把SSL验证关了就没报错了，服了tmd