如果在中国大陆使用该主题后，访问速度变慢，可以考虑注释掉`source/css/uno.css`的第一行。


# Huno

Huno是为[Hexo](http://hexo.io/)编写的一个响应式的主题，该主题基于[Uno](https://github.com/daleanthony/uno/)。

![](./demo.gif)



## 安装

```plain
$ git clone git://github.com/someus/huno.git themes/huno
```

修改Hexo的配置文件`_config.xml`：
```plain
theme: huno
```

## 更新

```plain
$ cd themes/huno
$ git pull
```


## 兼容性
在Hexo 3.1.1测试正常。

## 配置示例

```plain
# Header
menu:
  首页: /#blog
  关于: /about
  归档: /archive

# Site favicon
favicon: /favicon.png

# Site logo
# logo: /avatar.png

# Enable Mathjax
mathjax: true

# Enable awesome-toc
awesome_toc: true

# Enable githubRepoWidget
github_repo_widget: false
```

### mathjax
数学公式支持。其设置（layout/_scripts/mathjax.ejs）如下：
```
$(document).ready(function(){
    MathJax.Hub.Config({ 
        tex2jax: {inlineMath: [['[latex]','[/latex]'], ['\\(','\\)']]} 
    });
});
```

官网：[mathjax](https://www.mathjax.org/)


### awesome_toc
为文章生成目录。

官网：[awesome-toc](https://github.com/someus/awesome-toc)

## 归档页面
归档页面会显示分类、标签云以及基于日期的归档。

在主题的配置文件`_config.yml`中：
```plain
# Header
menu:
  首页: /#blog
  关于: /about
  归档: /archive
```

创建新的page：
```plain
$ hexo new page archive
$ cd source/archive
$ vim index.md
```

内容修改为：
```
title: 归档
layout: page-archive
---
```

浏览器访问`http://127.0.0.1:4000/archive/`即可。

### github_repo_widget
可视化显示github中的项目。

官网：[GitHub-jQuery-Repo-Widget](https://github.com/JoelSutherland/GitHub-jQuery-Repo-Widget)


## 评论
支持Disqus和多说，在Hexo配置文件`_config.yml`中设置名称即可，例如：
```plain
# Disqus
disqus_shortname: letian

# Duoshuo
duoshuo_shortname: letian
```

> !!! 如果两个都设置，则两个评论工具都会显示。

## Social Icon
默认提供了Github的图标，Github用户名请在Hexo的配置文件`_config.yml`中配置，例如：
```
# Social
social:
  github: someus
```

可以根据需要在`layout/_partials/social.ejs`中添加更多的图标。


## 网站统计
将网站统计（如Google analysis、CNZZ、百度统计等）代码放入`layout/_scripts/site-analytics.ejs`即可。


