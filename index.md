---
layout: layout.liquid
pageTitle: Josh Crain
metaDescription: This is Josh Crain's website.
---
<p class="text--larger" style="margin-bottom:2em;"><span class="dropcap">I</span> have worked as a web designer, product  designer, and UI developer. Design allows me to make an impact through research, web standards, and user advocacy. Most recently, my interests have been how to build a better design system and publishing with JAMstack. I'd like to spend a lot more time offline in my sketchbook. There are also <a href="/notes/other-interesting-things/">other interesting things</a>.</p>
<ul class="flex--articles flex--articles--3 pull--both">
{% for post in collections.art limit:9 reversed %}
<li>    
    <a href="{{ post.url }}" class="text--larger"><img src="{{post.data.metaImage}}" alt="{{ post.data.pageTitle }}">{{ post.data.pageTitle }}</a>
    <p><span class="text--secondary small-caps">{{ post.date | date: "%d %b %Y" }}</span> &mdash; {{ post.data.metaDescription }}</p>
</li>
{% endfor %} 
</ul>

<ul class="list--articles">
{% for post in collections.notes reversed%}
<li>    
    <a href="{{ post.url }}" class="text--larger">{{ post.data.pageTitle }}</a>
    <p><span class="text--secondary small-caps">{{ post.date | date: "%d %b %Y" }}</span> &mdash; {{ post.data.metaDescription strip_html truncate: 280 }}</p>
</li>
{% endfor %} 
</ul>