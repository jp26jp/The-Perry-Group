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
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{ site.idGoogleTagManager }}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    <main>
      <article class="{{ page.layout }}">
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

    {% include json/SocialProfile.md %}

    <script src="/js/script.js"></script>
  </body>


</html>
