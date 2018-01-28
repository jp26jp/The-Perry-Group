---
layout: posts
menu:
  header:
    identifier: _index
    url: "/"
    weight: 1
    title: Home
---
{% for post in site.posts %}
  <h2><a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></h2>
{% endfor %}
