---
layout: default
---
{% assign siteURL = "http://theperry.group" %}
<div id="container" class="clearfix">
  <div id="main-content" class="halves feed home">
    {% include feed.html author=nil %}
    {{ content }}
  </div>
</div>
