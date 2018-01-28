---
layout: default
---
{% assign siteURL = "https://jp26jp.github.io/The-Perry-Group" %}
<div id="container" class="clearfix">
  <div id="main-image" class="halves">
    <img src="{{ siteURL }}{{ page.image }}" />
  </div>
  <div id="main-content" class="halves">
    <h1>{{ page.title }}</h1>
    <div id="author">
      <img id="author-image" src="{{ siteURL }}/uploads/defaults/authors/{{ page.author | downcase | replace:' ','-' }}.jpg"/>
      <div class="author-name">by <div id="author-name">{{ page.author }}</div></div>
    </div>
    {{ content }}
  </div>
</div>
