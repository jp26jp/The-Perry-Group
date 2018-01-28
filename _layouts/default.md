---
layout: null
---
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8"/>
  <title></title>


  <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville" rel="stylesheet">


  <!-- Styling -->
  <style>
  {% capture include_to_scssify %}
  {% include _main.scss %}
  {% endcapture %}
  {{ include_to_scssify | scssify }}
  </style>

</head>
<body>
<div id="container" class="clearfix">
  <div id="main-image" class="halves">
    <img src="/assets/main.jpg" />
  </div>
  <div id="main-content" class="halves">
    <h1>{{ page.title }}</h1>
    {{content}}
  </div>
</div>
</body>
</html>
