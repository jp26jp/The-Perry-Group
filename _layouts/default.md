---
layout: null
---
<!DOCTYPE HTML>
<html>

  <head>
    {% include head.html %}
  </head>

  <body>
    <header id="nav">
      <nav>
        {% include navigation.html %}
      </nav>
    </header>

    {{content}}

    <div id="image_popup" class="modal">
      <div id="close"><span class="close">&times;</span></div>
      <img class="modal-content" id="img01">
      <div id="caption"></div>
    </div>

    <script src="/js/script.js"></script>
  </body>


</html>
