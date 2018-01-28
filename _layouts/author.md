---
layout: default
---
{% assign siteURL = "http://theperry.group" %}
<div id="container" class="clearfix">
  <!--<div id="main-image" class="halves">
    <img src="{{ siteURL }}{{ page.image }}" />
  </div>-->
  <div id="main-content" class="halves feed home">
    {% include feed.html author=page.title %}
    {{ content }}
  </div>
</div>
