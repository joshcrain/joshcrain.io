---
layout: layout.liquid
pageTitle: Hi, I’m Josh Crain, a designer that likes working with code.
metaTitle: Josh Crain - Product designer, developer, artist in training
metaDescription: Josh Crain has experience as a web designer, product designer, and front-end developer. Design allows Josh to make an impact through user advocacy, research, web standards, and code.
changefreq: monthly
priority: "1.0"
---
<p class="text--larger">I have experience as a web designer, product designer, and front-end developer. Design allows me to make an impact through user advocacy, research, web standards, and code. There are also <a href="/about/">other interesting things</a>.</p>

<hr>
 
## Sketches and studies
I want to spend <em>a lot more time</em> drawing, painting, and in my sketchbook.

<ul class="flex--articles flex--articles--3" style="padding-top:2em;">
{% for post in collections.art limit:9 reversed %}
<li>    
    <!--<img class="lazy" data-src="{{post.data.metaImage}}" alt="Artwork {{ post.data.pageTitle }}">-->
    <a href="{{ post.url }}" class="text--larger">{{ post.data.pageTitle }}</a>
    <p><span class="text--secondary small-caps">{{ post.date | date: "%d %b %Y" }}</span> &mdash; {{ post.data.metaDescription }}</p>
</li>
{% endfor %} 
</ul>

<hr>

## Notes
<ul class="list--articles">
{% for post in collections.notes limit:9 reversed%}
<li>    
    <a href="{{ post.url }}" class="text--larger">{{ post.data.pageTitle }}</a>
    <p><span class="text--secondary small-caps">{{ post.date | date: "%d %b %Y" }}</span> &mdash; {{ post.data.metaDescription strip_html truncate: 280 }}</p>
</li>
{% endfor %} 
</ul>

<hr>

## Say Hello
I’d love to hear from you! To get in touch simply [say hello here](/say-hello/). My social medias can be found in the footer of this site, though I have been spending less and less time there. 