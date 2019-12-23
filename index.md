---
layout: layout.liquid
pageTitle: Josh Crain
metaDescription: This is Josh Crain's website.
---
<p class="text--larger"><span class="dropcap">J</span>osh has worked as a web designer, product designer, and UI developer. Design allows him to make an impact through user advocacy, research, web standards, and code. Most recently, his interests have focused on how to build a better design system and the exciting new possibilities of static site generation.</p>
<p class="text--larger">His lifelong interest has been making art. He wants to be a better painter and would like to spend <em>a lot more time</em> in his sketchbook. There are also <a href="/notes/other-interesting-things/">other interesting things</a>.</p>

<hr>

## Recent Art
A selection of digital, gouache, and watercolor paintings. Some are new some are old. Some are slightly embarassing. 

<ul class="flex--articles flex--articles--3 pull--both" style="padding-top:2em;">
{% for post in collections.art limit:9 reversed %}
<li>    
    <a href="{{ post.url }}" class="text--larger"><img src="{{post.data.metaImage}}" alt="{{ post.data.pageTitle }}">{{ post.data.pageTitle }}</a>
    <p><span class="text--secondary small-caps">{{ post.date | date: "%d %b %Y" }}</span> &mdash; {{ post.data.metaDescription }}</p>
</li>
{% endfor %} 
</ul>

<hr>

## Recent Posts
<ul class="list--articles">
{% for post in collections.notes reversed%}
<li>    
    <a href="{{ post.url }}" class="text--larger">{{ post.data.pageTitle }}</a>
    <p><span class="text--secondary small-caps">{{ post.date | date: "%d %b %Y" }}</span> &mdash; {{ post.data.metaDescription strip_html truncate: 280 }}</p>
</li>
{% endfor %} 
</ul>

<hr>

## Say Hello
I’d love to hear from you! To get in touch simply [say hello here](/say-hello/). My social medias can be found in the footer of this site, though I have been spending less and less time there. 