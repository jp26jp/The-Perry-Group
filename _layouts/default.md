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
{{content}}
</body>
</html>
