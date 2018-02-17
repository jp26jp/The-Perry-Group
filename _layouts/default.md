---
layout: compress
---
{% assign siteURL = "http://theperry.group" %}
<!DOCTYPE html>
<html>

  <head>
    {% include head.html %}
  </head>

  <body>
    <div id="fb-root"></div><script>(function(d, s, id){var js, fjs=d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js=d.createElement(s); js.id=id; js.src='https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12'; fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));</script>

    <main>
      <article{% if page.type %} class="{{ page.type }}"{% endif %}>
        {{ content }}
      </article>

      {% include json/BlogPosting.md %}

    </main>

    <footer>
      {% include footer.html %}
    </footer>

    <div id="image_popup" class="modal">
      <div id="close"><span class="close">&times;</span></div>
      <img class="modal-content" id="img01">
      <div id="caption"></div>
    </div>

    <script src="{{ siteURL }}/js/script.js"></script>
  </body>


</html>
