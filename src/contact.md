---
title: Contact
---

Reach me at [{{ site.author.email }}](mailto:{{ site.author.email }}), or find me
elsewhere:

<ul>
{% for url in site.author.relMe %}
  <li><a href="{{ url }}" rel="me">{{ url }}</a></li>
{% endfor %}
</ul>