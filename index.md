---
layout: default
menu:
  header:
    identifier: _index
    url: "/"
    weight: 1
    title: Home
---
<div id="home-image">
  <img src="uploads/defaults/background.jpg"/>
</div>
<div id="home-content">
  {% for post in site.posts %}
    <h2><a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></h2>
  {% endfor %}
</div>
