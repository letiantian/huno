# Huno


Huno is a responsible theme for Hexo, and it is based on [Uno].

[Uno] is a a minimal, responsive theme which is designed for [Ghost].


## Install

```
git clone git://github.com/someus/huno.git themes/modernist
```

Huno performs well with Hexo 2.5.7.

## Enable
Please modify `theme` setting in `_config.yml` to `huno`.

## Update

```
cd themes/huno
git pull
```

## Configuration

	# Header
	menu:
	  Blog: /#blog
	  About: /about
	  Blogroll: /blogroll

	# Site favicon
	favicon: /favicon.png

	# Site logo
	logo: /avatar.png

	# Enable Fancybox
	fancybox: true


## Add Google analysis code
Please add the code to `layout/layout.ejs`:

	<!--  google analytics -->
	<script>
	  // add your google analytics code here
	</script>


## Enable Disqus
Please modify `disqus_shortname` setting in `_config.yml` to `huno`.

[Hexo]: http://hexo.io/
[Uno]: https://github.com/daleanthony/uno/
[Fancybox]: http://fancyapps.com/fancybox/
[Ghost]: https://ghost.org/
