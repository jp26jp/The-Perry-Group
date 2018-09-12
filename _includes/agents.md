<div class="card-custom-deck">
  <h2 class="col-12">Our Team</h2>
  {% for agent in site.data.agents %}
    {% if agent.load == true %}
      {% include agent.html name=agent.name description=agent.description name=agent.name phone=agent.phone email=agent.email facebook=agent.facebook twitter=agent.twitter instagram=agent.instagram linkedin=agent.linkedin %}
    {% endif %}
  {% endfor %}
</div>
