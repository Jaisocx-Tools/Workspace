# Preloader


## The Aim Of The Setup

fine tuning of look and feel themes turning on.

### The Improvals

1. Site's elems get positions, as defined and managed by the task authors, ux/ui designers and sites devs.

2. Fonts on a site are loaded before they are shown on a site via js method call. You can see the timestamp of the font load in the browser's developer tools.


### Watch In Action

If lazy-load was enabled in Your browser, You notice in index.example.html when You've tapped theme button, the font is set after some timeout, not at once.

[https://sandbox.brightday.email/packages/Preloader/index.example.html](https://sandbox.brightday.email/packages/Preloader/index.example.html)

With Preloader, when You've tapped the theme butten, You notice in index.example.preloader.html the font is set at once.

[https://sandbox.brightday.email/packages/Preloader/index.example.preloader.html](https://sandbox.brightday.email/packages/Preloader/index.example.preloader.html)



### The Solved Trouble Flow Description

When styles were loaded, and no html elems on site use a font, referenced in styles, or an image, referenced in styles as `background-image` css prop, then these font and image are not loaded. this is the very nice optimization and saving up network traffic technology.

When turrning on other look and feel theme with browser's js event handler method,

for example, when the new css classnames set, the browser may start to load images and fonts, referenced in the .css files of this theme. Then, undfortunately, not all styles of the new theme are set at once. And, when several fonts, they are shown in browser at the unforeseen timestaps one after some another.

The timeout of the loaded images and fonts, if any, is not to foresee in a browser's engine, since it's relevant to a site server and a network, binding sites server and a computer, where a browser shows a site.

These optimization tasks in the browser's engine, nevertheless, were done the best way as I could notice, however the @jaisocx/preloader lib may do easily for Your site the tasks for quality assurance and fine tuning of look and feel themes turning on.




### How The Trouble Was Solved

Even without the Preloader, to bugfix not planned repositioning of elems on site when other font set ( very often other glyphs size, h nd v ) for a text after the font load timeout, the workaround is to bugfix in styles with the line-height css prop in a css class, set for this text node.

To bugfix this with the @jaisocx/preloader, You have to set in the Preloader class instance the object with values of urls to the fonts published ( the best way on a managed by Your NetOps or by You, cdn endpoint ), like `.ttf` and similar.

These urls to fonts will load the fonts with the Preloader at once on the site load in browser.

You may set the same webpack alias, as in a css file where the font was referenced, in order to save up time when building this js object with urls to the fonts to preload.

If absolute urls, You may just pass the zero len string: `preloader.setWebpackAlias( "" )`

In this example, the keys of the object `themesPreloads.font` are thought just to notice for later for what the font files are loaded. In the Preloader ts code, there are NO bindings of these keys to names of themes or other css classnames.

In order to adjust the site for the Preloader, that it works properly, You will need, that all styles, referencing a font, use the exact one url to this font on Your cdn. Otherwise, the font file may be loaded several times in browser, even on same site, even after the Preloader has loaded this font the first time from the url set in the object, passed as in arg to method `preloader.setThemesPreloads( themesPreloads )`, for example, `themesPreloads.font.theme_lightmode`.

For the optimization, You can watch the font files loaded in browser's developer tools, if there are dynamic assignments of css classnames and link tags creation, when optimizing a site on a certain url.



```js
  <script>

    let themesPreloads = {
      "image": null,
      "font": {
        "theme_lightmode": [
          "@SandboxFontsCdn/Niconne/Niconne-Regular.ttf",
        ],
        "theme_darkmode": [
          "@SandboxFontsCdn/Baloo_Paaji_2/static/BalooPaaji2-Regular.ttf",
          "@SandboxFontsCdn/Baloo_Paaji_2/static/BalooPaaji2-SemiBold.ttf"
        ]
      }
    };



    // DOCUMENT ONLOAD, INVOKES THE FUNCTION TO PRELOAD THEME FONTS
    document.addEventListener('DOMContentLoaded', () => {

      const preloader = new Preloader();
        preloader
          .setThemesPreloads( themesPreloads )
          .setWebpackAlias( "@SandboxFontsCdn" )
          .setWebpackAliasReplace( "https://sandbox.brightday.email/cdn/www/fonts" )
          .init();

    });

  </script>
```


### The Interface for the main class

```ts
export interface PreloaderInterface {

  setThemesPreloads( preloads: object ): PreloaderInterface;

  setWebpackAlias ( alias: string ): PreloaderInterface;

  setWebpackAliasReplace ( alias: string ): PreloaderInterface;

  init (): void;

  addDocumentLoadedEventHandler(): void;

  htmlDocumentAppendPreloadingLinkTags_Images(): void;

  htmlDocumentAppendPreloadingLinkTags_Fonts(): void;

  htmlDocumentAppendPreloadingLinkTags(
    inDataType: string
  ): void;

}
```

#### inDataType

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Value</th>
      <th scope="col">Applies To</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>audio</td>
      <td><code>&lt;audio&gt;</code> elements</td>
    </tr>
    <tr>
      <td>document</td>
      <td><code>&lt;iframe&gt;</code> and <code>&lt;frame&gt;</code> elements</td>
    </tr>
    <tr>
      <td>embed</td>
      <td><code>&lt;embed&gt;</code> elements</td>
    </tr>
    <tr>
      <td>fetch</td>
      <td>
        <p>fetch, XHR</p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> This value also requires
            <code>&lt;link&gt;</code> to contain the crossorigin attribute, see <a href="/en-US/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-enabled fetches</a>.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>font</td>
      <td>
        <p>CSS @font-face</p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> This value also requires
            <code>&lt;link&gt;</code> to contain the crossorigin attribute, see <a href="/en-US/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-enabled fetches</a>.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>image</td>
      <td>
        <code>&lt;img&gt;</code> and <code>&lt;picture&gt;</code> elements with
        srcset or imageset attributes, SVG <code>&lt;image&gt;</code> elements,
        CSS <code>*-image</code> rules
      </td>
    </tr>
    <tr>
      <td>object</td>
      <td><code>&lt;object&gt;</code> elements</td>
    </tr>
    <tr>
      <td>script</td>
      <td>
        <code>&lt;script&gt;</code> elements, Worker <code>importScripts</code>
      </td>
    </tr>
    <tr>
      <td>style</td>
      <td>
        <code>&lt;link rel=stylesheet&gt;</code> elements, CSS
        <code>@import</code>
      </td>
    </tr>
    <tr>
      <td>track</td>
      <td><code>&lt;track&gt;</code> elements</td>
    </tr>
    <tr>
      <td>video</td>
      <td><code>&lt;video&gt;</code> elements</td>
    </tr>
    <tr>
      <td>worker</td>
      <td>Worker, SharedWorker</td>
    </tr>
  </tbody>
</table>



###






