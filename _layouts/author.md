---
layout: default
---
{% assign siteURL = "https://jp26jp.github.io/The-Perry-Group" %}
<div id="container" class="clearfix">
  <!--<div id="main-image" class="halves">
    <img src="{{ siteURL }}{{ page.image }}" />
  </div>-->
  <div id="main-content" class="halves feed home">
    {% include feed.html author=page.title %}
    {{ content }}
  </div>
</div>
