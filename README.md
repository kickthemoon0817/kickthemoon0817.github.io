## HardCandy-Jekyll

### Preview

[View demo online →](http://xseven.me/)

![1](/screenshot/1.png)

![2](/screenshot/2.png)

![3](/screenshot/3.png)

To see the mobile display, scan the QR code below to open in your browser.

![4](/screenshot/4.png)

### Theme Features

- Theme developed based on `jekyll 3.8.1`
- Responsive layout
- Article tag index
- Article timeline index
- Blogger's personal information display
- Supports 9 different code highlighting themes
- Supports three comment systems: `disqus`, `Livere`, and `Gitment`
- Supports two site tracking systems: `Baidu Analytics` and `Google Analytics`
- Supports 13 different social media icons and link addresses
- Supports 11 different platforms for article sharing buttons

### Getting Started

#### Online Deployment

First, create a repository on `GitHub` named `yourgithubusername.github.io`. Clone your repository to your local machine. Then download the [HardCandy-Jekyll source code](https://github.com/xukimseven/HardCandy-Jekyll) to your local machine and update the `_config.yml` file with your own configuration (details below). Next, copy all files into the root directory of your local repository, and then upload them to your online GitHub repository. You can then access your blog at `https://yourgithubusername.github.io`.

#### Local Deployment

First, install `Jekyll` on your local machine. [More details here](https://www.jekyll.com.cn/docs/quickstart/).

After installation, check your **jekyll version** by running the command `jekyll -v`. If it is lower than `jekyll 3.x.x`, upgrade to `jekyll 3.x.x`.

Install Jekyll’s pagination plugin using `gem install jekyll-paginate` or `sudo gem install jekyll-paginate`.

Clone the source code of `HardCandy-Jekyll` to your local machine, navigate to the root directory of `HardCandy-Jekyll` in your terminal, and run `jekyll server` or `bundle exec jekyll serve`. Then open your browser and visit [http://localhost:4000](http://localhost:4000) to see your locally deployed `HardCandy-Jekyll` blog.

> **Warning!**
> 
> Please note: Since this theme is developed based on `jekyll 3.8.1`, differences in jekyll versions might cause display variations. For details, refer to the official documentation: [news](https://jekyllrb.com/news/)

### Configuration Documentation

- Getting Started
  - [About the Blog](#about-the-blog)
  - [Writing Articles](#writing-articles)
- Components
  - [Blogger's Personal Information](#bloggers-personal-information)
  - [Social Media](#social-media)
  - [Homepage Display Information](#homepage-display-information)
  - [Navigation Bar](#navigation-bar)
  - [Pagination](#pagination)
  - [Code Highlighting Themes](#code-highlighting-themes)
  - [Friend Links](#friend-links)
  - [Footer](#footer)
- Third Party Services
  - [Switching Comment Systems](#switching-comment-systems)
  - [Article Sharing Buttons](#article-sharing-buttons)
  - [Website Traffic Tracking Configuration](#website-traffic-tracking-configuration)

> By modifying the `_config.yml` file, you can easily set up your own personal blog.
> 
> Some configurations are already set by default; you only need to modify the following contents to complete the setup.

#### About the Blog

```yml
---
# Site settings: Configure your site
title: 'your awesome title'
description: 'your web description'
keywords: 'your web keywords, another keywords'
url: 'https://abc.github.io' # your host
---
```

- `title`: Used for the content of the page's title tag.
- `description`: A brief introduction of your website.
- `keywords`: The keywords for your website.
- `url`: The domain name of your website.

#### Writing Articles

The blog deploys articles by parsing `markdown` files, so you only need to write a markdown file and place it in the `_post` folder in the root directory of the site. For details on markdown syntax, search online or use a markdown editor for writing. A recommended markdown editor is [Typora](https://www.typora.io), which supports Windows, macOS, and Linux.

Regarding article YAML front matter:

```
layout: post
title:  "post title"
subtitle: 'post subtitle'
date:   2018-05-29 08:44:13
tags: html js css
description: ''
color: 'rgb(154,133,255)'
cover: ''
```

**About `color`:**

This `color` is used for the background at the top of the post page. As shown in the above images, it uses the color `rgb(154,133,255)`.

For `color`, if you use `rgb`, `rgba` or color names in English, you can omit the quotes. However, if the color code is a hexadecimal code like `#123456`, you must enclose it in quotes. It is recommended to always use quotes to avoid errors.

If you forget to provide a value for `color` when writing an article, the theme will default to `rgb(154,133,255)`, as shown in the image. While this does not affect the page display, for a more colorful page, it is suggested to specify a `color` value in the front matter of each article.

**About `cover`:**

Here, you need to provide the URL of an image. The URL can point to an online image or one stored in your blog directory. The key is to ensure it is correct. This image will be displayed in the blog list on the homepage, as shown in the image below.

![5](/screenshot/5.png)

#### Blogger Personal Information

```
# Blogger
author: true
name: 'your awesome name'
NickName: 'your awesome nickname'
webtitle: 'your awesome webtitle'
bio: 'your awesome bio'
about: true
aboutyou: 'your introduction'
portraits: '/assets/profile.jpeg' # your portraits image file path
```

This section is displayed on the "About the Blogger" page along with the "Social Media" section, as shown in the image below.

![6](/screenshot/6.png)

**About `author`:**

Set to `true` or `false` to enable or disable the blogger information card. The default is `true` for the best experience.

**About `about`:**

Set to `true` or `false` to enable or disable the blogger’s additional information, i.e., whether to display the `aboutyou` section. The default is `true`; you should fill in relevant information in `aboutyou`, which supports HTML code.

#### Social Media

```
# SNS
SNS: true
SNS-icon: # ['Facebook', 'weibo', 'qq', 'github', 'Dribbble', 'Twitter', 'instagram', 'weixin', 'Codepen']
  mail: 'mailto:abc@gmail.com'
  weixin: '' # Your WeChat QR code image path
  qq: '' # Your QQ QR code image path or http://wpa.qq.com/msgrd?v=3&uin='your QQ number'&site=qq&menu=yes
  github: ''
  Codepen: ''
  weibo: ''
  instagram: ''
  Twitter: ''
  Dribbble: ''
  Facebook: ''
  Google: ''
  zhihu: ''
  juejin: ''
  twitch: ''
```

Simply fill in your personal homepage URL for the social media icons you want to enable. Comment out (using `#`) the ones you do not need. The display order corresponds to the order of the entries.

Set the value after `SNS` to `true` or `false` to enable or disable this section.

*Update 2018/09/28:*

![7](/screenshot/sns-icon.png)

- Updated social icons to use online links for easier management and modification.
- Added the **Codepen** icon.
- Changed from circular icons to irregular shapes.

#### Homepage Display Information

```
---
layout: default
title: your awesome title
page-title: awesome page-title.
home-title: awesome home-title.
description: description
---
```

This section is in the `index.html` page. Modify `title`, `page-title`, `home-title`, and `description` to display your desired information. The default display effect is as shown in the image below.

![7](/screenshot/7.png)

#### Navigation Bar

```
# nav: Use &emsp; for spacing in Chinese characters
nav: # For best experience, six labels with each label ideally not exceeding 4 Chinese characters
  Home: '/'
  Tags: '/tags.html'
  Timeline: '/timeline.html'
  About: '/about.html'
  Friend Links: '/friendLink.html'
```

By default, all are enabled. If you wish to add more, follow the same format. The display order corresponds to the order in which they are listed.

#### Pagination

```
# Pagination
paginate: 2
paginatepath: ['page:num']
```

Simply set the number of posts you want to display per page on the homepage. For local deployment, ensure that you have installed the Jekyll pagination plugin using `gem install jekyll-paginate` or `sudo gem install jekyll-paginate`.

#### Code Highlighting Themes

```
# Code highlighting using rouge
highlighter: rouge
# Code highlighting theme using pygments themes: autumn, default, emacs, friendly, manni, murphy, pastie, perldoc, tango. Choose one of your favorite theme names enclosed in single quotes.
pygmentsTheme: 'default'
```

Jekyll 3.0 and later uses `rouge` as the default highlighter. Simply specify your preferred theme name after `pygmentsTheme`. There are 9 themes available, as mentioned above.

Example of code highlighting:

~~~markdown
``` css
*{
 margin:0;
 padding:0;
}
```
~~~

*Update 2018/09/28:*

![7](/screenshot/博客代码高亮例子.png)

The image above shows an example of code highlighting for **HTML**; for other code, refer to the image or test different themes to choose your favorite.

#### Friend Links

```
# Friend Links
friends:
  jekyll: 'https://www.jekyll.com.cn/'
```

Simply fill in as per the format. The order corresponds to the order in the configuration file.

#### Footer

```
# Since
footer:
  since: 2018
```

This is used to display the starting year in the footer.

#### Switching Comment Systems

```
# Comments: For the best experience, choose one among Disqus, Livere, and Gitment.
# Disqus comments
disqus: false
disqus_url: '' # https://abc.disqus.com/embed.js
# Livere comments
livere: true
livere_uid: 'MTAyMC8zNDI2OS8xMDgwNg==' # MTAyMC8zNDI2OS8xMDgwNg==
# Gitment comments OAuth Application
Gitment: false
Gitment_owner: ''  # GitHub username
Gitment_repo: ''  # Repository name for your GitHub blog
client_id: ''  # client_id obtained after registering your OAuth Application
client_secret: ''  # client_secret obtained after registering your OAuth Application
```

Fill in the relevant information obtained from third-party comment systems in the configuration file. You can enable more than one or all of them, though the best experience is to enable just one.

The three comment systems display as follows:

**Disqus:**

![8](/screenshot/8.png)

**Livere:**

![9](/screenshot/9.png)

**Gitment:**

![10](/screenshot/10.png)

Each comment system has its advantages and disadvantages. Considering the display styles and the network environment in Mainland China, the theme defaults to enabling the Livere comment system for the best experience. Make sure to fill in the related `livere_uid` correctly.

#### Article Sharing Buttons

```
# Share: weibo, qq, wechat, tencent, douban, qzone, linkedin, diandian, facebook, twitter, google
social-share: true
social-share-items: ['qq', 'wechat', 'weibo', 'twitter', 'facebook']
```

To make articles easier to share, a third-party sharing plugin [Share.js](http://overtrue.github.io/share.js/) is used, which supports one-click sharing to platforms such as Weibo, QQ Zone, QQ friends, WeChat, Tencent Weibo, Douban, Facebook, Twitter, LinkedIn, Google+, Diandian, etc.

Simply list the names of the platforms you wish to include in `social-share-items`. The display order corresponds to the order in which they are listed.

#### Website Traffic Tracking Configuration

```
# Baidu Analytics: Fill in your relevant code in baidu-url
baidu: true
baidu-url: ''
# Google Analytics: Fill in your tracking ID from Google Analytics in google-ID
google: false
google-ID: ''
```

Fill in the respective information obtained during registration in `baidu-url` and `google-ID`. Use `true` or `false` to enable or disable them. Due to the network environment in Mainland China, Baidu Analytics is enabled by default, though you can enable both if desired.

### License

HardCandy-Jekyll is licensed under [MIT](https://github.com/xukimseven/HardCandy-Jekyll/blob/master/LICENSE).

### Please Star and Follow

If you like this project, feel free to download and use it, and please give it a star 😜. Thank you!
