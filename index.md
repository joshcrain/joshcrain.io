---
layout: layout.liquid
pageTitle: Josh Crain
metaTitle: Josh Crain - Product designer, developer, artist in training
metaDescription: Josh Crain has experience as a web designer, product designer, and front-end developer. Design allows Josh to make an impact through user advocacy, research, web standards, and code.
changefreq: monthly
priority: "1.0"
---
<p class="text--larger"><span class="dropcap">H</span>ello! My name is Josh Crain. I have experience as a web designer, product designer, and front-end developer. Design allows me to make an impact through user advocacy, research, web standards, and code. Most recently, my professional interests have focused on how to deliver smart, reusable patterns in a design system. I’m also excited to explore the new possibilities of “static” publishing.</p>
<p class="text--larger">I want to spend <em>a lot more time</em> drawing, painting, and in my sketchbook. There are also <a href="/about/">other interesting things</a>.</p>

<hr>
 
## Sketches and studies
Digital, gouache, and watercolor. Some are new some are old. Some are slightly embarassing. netlify?

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

## Recent Notes
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