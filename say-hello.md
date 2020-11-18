---
layout: layout.njk
pageTitle: Say Hello!
metaDescription: Say Hello
---
<p class="lead">Tell me anything. </p>

<form name="contact" class="form" method="POST" data-netlify="true" action="/">
<fieldset style="border:0;padding:0;">
<legend class="visuallyhidden">Info and comments</legend>
  <div class="form_item">
    <label>Your Name <input type="text" name="name" title="i am required" class="form_field" aria-required="true" required/></label>   
  </div>
  <div class="form_item">
    <label>Your Email <input type="email" name="email" class="form_field" aria-required="true" required title="The domain portion of the email address is invalid (the portion after the @)." pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"/></label>
  </div>
  <div class="form_item">
    <label>Message <textarea name="message" class="form_field" title="i am required" aria-required="true" required></textarea></label>
  </div>
  </fieldset>
  <div class="form_item">
    <button type="submit" class="btn">Send</button>
  </div> 
</form>