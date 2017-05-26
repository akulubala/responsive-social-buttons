# Responsive Social Sharing Buttons

Responsive social buttons with webpack.Easily customize it by tweaking a few variables. SVGs allow for tiny file size and retina support.


<a href="https://akulubala.github.io"><img align="right" src="https://akulubala.github.io/responsive-social-buttons/resource/images/rrssb-preview.png" width="359" height="auto"/></a>

<img src="https://akulubala.github.io/responsive-social-buttons/resource/images/rrssb-preview.gif" width="100%" height="auto"/>

## Usage
1) Copy css to your document or link to the css file in header:

```html
<link rel="stylesheet" href="dist/responsive-social-buttons.css" />
```

2) Copy `.rrssb-buttons` unordered list to desired location(s):

```html
<!-- Buttons start here. Copy this ul to your document. -->
<ul class="rrssb-buttons clearfix">
  <li class="rrssb-email">
    <a href="mailto:?Subject=Your%20Subject%20Here">
      <span class="rrssb-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.386 2.614H2.614A2.345 2.345 0 0 0 .279 4.961l-.01 14.078a2.353 2.353 0 0 0 2.346 2.347h18.771a2.354 2.354 0 0 0 2.347-2.347V4.961a2.356 2.356 0 0 0-2.347-2.347zm0 4.694L12 13.174 2.614 7.308V4.961L12 10.827l9.386-5.866v2.347z"/></svg>
      </span>
      <span class="rrssb-text">email</span>
    </a>
  </li>
  <li class="rrssb-wechat">
    <a class="popup" data-url="http://douban.com" data-title="扫描二维码分享至微信" data-confirm-text="取消">
      <span class="rrssb-icon">
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="36.969" height="29.031" viewBox="0 0 36.969 29.031"><defs><style>.cls-1{fill:#000;fill-rule:evenodd}</style></defs><path d="M32.399 25.866l.985 3.152-3.591-1.894c-1.31.316-2.625.631-3.928.631-6.229 0-11.134-4.099-11.134-9.146 0-5.041 4.905-9.15 11.134-9.15 5.882 0 11.119 4.109 11.119 9.15 0 2.842-1.958 5.359-4.585 7.257zM22.256 14.509c-.652 0-1.309.633-1.309 1.26 0 .638.657 1.262 1.309 1.262.99 0 1.637-.624 1.637-1.262 0-.627-.647-1.26-1.637-1.26zm7.2 0c-.647 0-1.301.633-1.301 1.26 0 .638.654 1.262 1.301 1.262.981 0 1.638-.624 1.638-1.262 0-.627-.657-1.26-1.638-1.26zM13.908 18.76c0 .915.148 1.798.404 2.641-.404.031-.811.05-1.222.05-1.634 0-2.948-.321-4.586-.632l-4.575 2.209 1.309-3.791C1.96 17.031.001 14.187.001 10.726.001 4.728 5.894.004 13.09.004c6.437 0 12.075 3.774 13.208 8.852a12.005 12.005 0 0 0-1.261-.073c-6.219 0-11.129 4.469-11.129 9.977zM8.837 5.365c-.981 0-1.971.624-1.971 1.573 0 .945.99 1.578 1.971 1.578.982 0 1.634-.633 1.634-1.578 0-.949-.652-1.573-1.634-1.573zm9.161 0c-.981 0-1.964.624-1.964 1.573 0 .945.983 1.578 1.964 1.578.986 0 1.638-.633 1.638-1.578 0-.949-.652-1.573-1.638-1.573z" class="cls-1"/></svg>
      </span>
      <span class="rrssb-text">Wechat</span>
    </a>
  </li>
  <li class="rrssb-weibo">
    <a class="popup" href="http://service.weibo.com/share/share.php?text=测试&title=xxxbb&url=http://www.baidu.com">
      <span class="rrssb-icon">
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="37" height="30" viewBox="0 0 37 30"><defs><style>.cls-1{fill:#000;fill-rule:evenodd}</style></defs><path d="M36.539 12.806v.006a1.418 1.418 0 0 1-2.698-.875h-.001a6.974 6.974 0 0 0-1.456-6.82 6.965 6.965 0 0 0-6.631-2.147 1.418 1.418 0 0 1-.592-2.775h.001a9.791 9.791 0 0 1 9.327 3.022 9.803 9.803 0 0 1 2.05 9.589zm-9.818-5.3v-.001a1.22 1.22 0 1 1-.509-2.386 4.772 4.772 0 0 1 5.54 6.141 1.222 1.222 0 0 1-1.536.787 1.222 1.222 0 0 1-.785-1.538h-.002a2.332 2.332 0 0 0-2.708-3.003zm.489 2.284c.641.916.579 2.2-.012 3.688-.273.685.085.791.606.948 2.123.658 4.487 2.252 4.487 5.059 0 4.647-6.697 10.5-16.765 10.5-7.679 0-15.529-3.724-15.529-9.85 0-3.202 2.028-6.905 5.519-10.399 4.663-4.664 10.1-6.789 12.145-4.742.902.902.989 2.464.409 4.329-.302.939.881.419.881.421 3.769-1.579 7.057-1.672 8.259.046zm-1.287 9.611c-.397-4.024-5.687-6.796-11.816-6.19-6.127.607-10.774 4.361-10.376 8.386.398 4.026 5.688 6.797 11.816 6.192 6.129-.606 10.773-4.361 10.376-8.388zM11.584 26.06c-2.946-.952-4.193-3.862-2.903-6.484 1.267-2.571 4.562-4.025 7.478-3.266 3.018.78 4.558 3.629 3.325 6.395-1.251 2.831-4.848 4.34-7.9 3.355zm1.664-5.511c-.949-.398-2.175.011-2.761.93-.593.923-.314 2.022.628 2.451.956.437 2.225.022 2.818-.924.582-.956.275-2.048-.685-2.457zm2.339-.97c-.364-.145-.819.03-1.033.389-.207.36-.093.77.272.92.371.153.845-.023 1.059-.39.205-.369.072-.784-.298-.919z" class="cls-1"/></svg>
      </span>
      <span class="rrssb-text">Weibo</span>
    </a>
  </li>
</ul>
<!-- Buttons end here -->
```

- Only copy the `<li>`s of the buttons you want (index.html has examples of all available types).
- Adding a class of `popup` to the anchor tag for each share button will make the share dialog open in a popup, rather than a new window. (Good for Facebook, Twitter, Google Plus, etc.)
- Buttons will automatically flow to the size of the ul `rrssb-buttons`. If fixed sized buttons are needed, nest `rrssb-buttons` in a fixed-width container.
- Each sharing URL requires various parameters that allow you to pass through messaging in the sharing dialog.
- Alternatively, all share metadata and links can be configured [using Javascript](#javascript)

```html

<script src="dist/responsive-social-buttons"></script>
```

<a name="javascript"></a>

**Optional: Configure URL and share text with javascript:**<br/> Instead of editing each `href` by hand, you can call some Javascript to set the URLs on each social button automatically.

Note: to support users who have disabled Javascript, you still need to edit the `href`s by hand.

Paste the following before the closing body tag, after the scripts you added in the last section:

```html
<script type="text/javascript">

jQuery(document).ready(function ($) {

  $('.rrssb-buttons').rrssb({
    // required:
    title: 'This is the email subject and/or tweet text',
    url: 'http://rrssb.ml/',

    // optional:
    description: 'Longer description used with some providers',
    emailBody: 'Usually email body is just the description + url, but you can customize it if you want'
  });
});
</script>
```

** notice: **

-- you can also use webpack to modulize js and css. source files are under resource folder.

## Other install options:

Service     | Link
:---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
npm         | `npm i responsive-social-buttons`


## Support
Currently tested between [**140px**](https://www.dropbox.com/s/2k6lcebg2887ge3/Screenshot%202014-02-18%2009.45.45.png) and [**15,465px**](https://www.dropbox.com/s/1juq03011lixk3r/Screenshot%202014-02-18%2009.43.57.png) on current versions of Chrome 33, Safari 7.0.2, Firefox 27, Opera 20, and IE9+.

Requires [**SVG**](http://caniuse.com/svg)

### Build setup:
- under root folder, run `npm install` to install the dependencies for this project.
- run `node_modules/.bin/webpack-dev-server` to create a local server at `http://localhost:8081` and watch for file changes.

## About
responsive-social-buttons is a modify version of [rrssb](https://github.com/kni-labs/rrssb), add webpack, wechat, weibo support, for more detail you can check original version
