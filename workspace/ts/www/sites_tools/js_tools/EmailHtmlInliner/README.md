# Inliner To Send Html Email

```
npm install @jaisocx/email-html-inliner
```


## Status
Ready to use since the 06-th of May in the Year 2025.


# Watch in Action

[https://sandbox.brightday.email/examples_html/ImagesEmailed/EmailHtmlInliner_100width.html](https://sandbox.brightday.email/examples_html/ImagesEmailed/EmailHtmlInliner_100width.html)


[https://sandbox.brightday.email/examples_html/ImagesEmailed/EmailHtmlInliner_Images.html](https://sandbox.brightday.email/examples_html/ImagesEmailed/EmailHtmlInliner_Images.html)




## The aim of the setup

The webmail apps due to security reasons do stipping out certain markup from the email messges sent with Content-Type text/html.


The package here is to solve the workaround to adjust somehow to the rules of webmail apps providers, email messages before sending they.



### QA Notice
Tested with Gmail, Outlook, Protonmail, iCloud, AOL, Yahoo.


### Notices

#### QA
My email client by my smtp relay impl could not access GMX due to some incombatibility of my smtp relay, unfortunately. I could not adjust the email message format according to exception message in the GMX response. Maybe any day later. This package was not tested with the GMX webmail app.

#### The issues were NOT solved: padding: &lt;not-zero&gt;; {max|min-}width: 100%;
The AOL and Yahoo Webmail apps strip out the CSS property `box-sizing`, and the default rendering rule in browsers is the `box-sizing: padding-box;`.

Unfortunately, I could not find the workaround, when a html node has CSS `padding` set, and the contents have to be set `width: 100%;`. In this option the look and feel is not rendered the right way. The contents are overflowing, and when designed the email message with CSS `box-sizing: border-box;` the Sites Dev could not know this issue, neither could notice this issue in other webmail apps.





## Usage

```
import { EmailHtmlInliner } from "@jaisocx/email-html-inliner";

function inlineText() {
  let inliner = new EmailHtmlInliner();
  let cssHtmlPackage = inliner.cssHtmlPackage;

  // set these values before sending,
  // or omit when developing the email message.
  let baseUrlToReplace = "./../../../cdn/www/media/images/";
  let baseUrlReplacedWith = "https://my-cdn.example.com/www/media/images/";

  let inlineText = inliner.inline (
    document,
    "html",
    inliner.constants.stylesPropsToCheck,
    baseUrlToReplace,
    baseUrlReplacedWith
  );

  let textHtmlNode = this.htmlDocument.getElementById("inlinetext");
  textHtmlNode.innerHTML = cssHtmlPackage.escapeHTML( inlineText );
}
```




