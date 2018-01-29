---
layout: default
---
<div id="container" class="clearfix">
  <div id="main-image" class="halves">
    <img src="{{ page.image }}" />
  </div>
  <div id="main-content" class="halves{% if page.feed == true %} feed{% endif %}">
    {{ content }}
  </div>
</div>
