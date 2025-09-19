# Preloader


## The Aim Of The Setup

fine tuning of look and feel themes turning on.

Another README on minimizing same font loads. The best way just once.
[README_preloader_font_loading_once.md](README_preloader_font_loading_once.md)





## Preface

The simpliest browser technologies I turn on here were implemented 15 years ago and earlier, 
and with CSS2 even. 
In my jobs experience the fine-tuning of sites 
is never done in every task of fine-tuning features available since long ago.


The latest fine-tuning in companies done is aimed 
for the automatization and quality of automatization 
of software product delivery and software development coding tasks in multiuser environment.


The UI | UX fine-tuning costs involved are very high, true.

My advise, nevertheless, to implement these few checks 
to profit later by Your Companie's Marketing Department 
thanks to Your Companie's Site's improvals of features like:
1. first load user experience and impression,
2. load performance, 
3. Networking and Hardware usage costs save-up.



## Preloading overrides the unforeseen lazy load setting on clients' browsers

When styles were loaded, and no html elems on site use a font,
referenced in styles, or an image,
referenced in styles as `background-image` css prop,
then these font and image are not loaded.
this is the very nice optimization and saving up network traffic technology.

When turning on other look and feel theme with browser's js event handler method,
for example, when the new css classnames set,
the browser may start to load images and fonts,
referenced in the .css files of this theme.

Then, unfortunately, not all styles of the new theme are set at once.
And, when several fonts, they are shown in browser at the unforeseen timestaps one after some another.

The timeout of the loaded images and fonts, if any,
is not to foresee in a browser's engine,
since it's relevant to a site server and a network,
binding sites server and a computer, where a browser shows a site.

These optimization tasks in the browser's engine, nevertheless,
were done the best way as I could notice,
however the @jaisocx/preloader lib may do easily for Your site
the tasks for quality assurance and fine-tuning of look and feel themes turning on.








## The Improvals done

1. Texts rendering quality due to hard loaded font file

2. preventing interactivity layout jumps.

3. loading resources just once.

4. Fallback urls of npm deps.

5. Event DOMContentLoaded overrides with The Fallback Urls Feature turned on.

6. CDN not responding blocks prevented.






## Watch In Action


If lazy-load was enabled in Your browser, You notice in index.example.html when You've tapped theme button, the font is set after some timeout, not at once.

[https://sandbox.brightday.email/packages/Preloader/index.example.html](https://sandbox.brightday.email/packages/Preloader/index.example.html)



With Preloader, when You've tapped the theme butten, You notice in index.example.preloader.html the font is set at once.

[https://sandbox.brightday.email/packages/Preloader/index.example.preloader.html](https://sandbox.brightday.email/packages/Preloader/index.example.preloader.html)





## The Solved Trouble Flow Description

### 1. Texts rendering quality due to hard loaded font file

#### Why loading font file

    1.1. The fonts like noted by a Sites Designer in the StoryBook, 
           have to be set on site as is.
    
    1.2. On the Operating Systems like ChromeOS, Android, iOS, Linux, Windows, 
           the preinstalled set of fonts along with OS base software 
           is not the same.
    
    1.3. When just in the .css the font-family name set, 
           relayed on the preview in browser on a computer with the OS installed, 
           on another computer or mobile with another OS installed, 
           the font may be not preinstalled, 
           and the browser renders with the default fallback font. 
           And this was not like the Sites Designer has set the task.

    1.4. As is, on most sites the font files are loaded several times, 
           and there may be font files with response status other than 200 | 2xx, 
           means NOT have been loaded, 
           and therefore rendered with a fallback font, 
           with unforecasted look on a client browser.
    
    1.5. The font files, for example a .ttf file, 
           have to be loaded with a browser 
           and seen in the Browser's Developers' Tools -> Network Tab.



### 2. preventing interactivity layout jumps.

When styles were loaded, and no html elems on site use a font, 
referenced in styles, or an image, 
referenced in styles as `background-image` css prop, 
then these font and image are not loaded. 
this is the very nice optimization and saving up network traffic technology.

When turning on other look and feel theme with browser's js event handler method,
for example, when the new css classnames set, 
the browser may start to load images and fonts, 
referenced in the .css files of this theme. 

Then, unfortunately, not all styles of the new theme are set at once. 
And, when several fonts, they are shown in browser at the unforeseen timestaps one after some another.

The timeout of the loaded images and fonts, if any, 
is not to foresee in a browser's engine, 
since it's relevant to a site server and a network, 
binding sites server and a computer, where a browser shows a site.

These optimization tasks in the browser's engine, nevertheless, 
were done the best way as I could notice, 
however the @jaisocx/preloader lib may do easily for Your site 
the tasks for quality assurance and fine-tuning of look and feel themes turning on.




### 3. loading resources just once.

    3.1. As is, on most sites the .woff|.ttf fonts and same fonts, too,
           are loaded several tens times,
           from several hundreds of npm dependencies, 
           among these sites styles and themes frameworks libraries;
    
    3.2. When a cache response headers are set the right way on the https server, 
           the fonts in the cached mode are not loaded more than once, 
           however, when testing with live load mode 
           ( "Cache Disable" Browser's Developer Tools -> Network Tab ), 
           is first to ensure, the fonts are being requested and loading.
    
    3.3. To check for optimization:
           check font-family font set by a Sites Designer,
           reload site with live load mode:
              ( "Cache Disable" Browser's Developer Tools -> Network Tab ),
           check in Browser's Developer Tools -> Network Tab -> turn on filter "fonts",
           Exact every char in url of font used in font-family styles:
          .cssclassname {
            font-family: Fontname;
          }
          .html doc tag link to fontname.ttf
          .css @font-face url of fontname.ttf

    3.4. To load the font required:
          Only for font-family set by a Sites Designer,
          for example, "Fontname",
          styles have to be there:
          .cssclassname {
            font-family: Fontname;
          }
          font file ( .woff, .woff2 or .ttf ) published on Your cdn, 
              e.g. on url https://your_site.com/cdn/fonts/fontname.ttf,
          css @font-face with the url of this .ttf font,
          in .html page, the preloading tag link to this .ttf font.

    3.5. And, to load ONCE the font required:
          THE EXACT SAME URL EVERY CHAR in:
          The preloading tag link href in .html page like this:
            <link 
               rel="preload" 
               as="font" 
               href="https://your_site.com/cdn/fonts/fontname.ttf" 
            />
          in the @font-face css lines like this:
            @font-face {
              font-family: Fontname;
              src: url("https://your_site.com/cdn/fonts/fontname.ttf") format("truetype");
              ...
              ...
              ...
            }




### 4. Fallback urls of npm deps.

Fallback urls for loading styles and scripts of npm dependencies in `node_modules`, 
since when npm install --install-strategy=hoisted 
is set for the very foreseen position of node_modules in project, 
the position varies, whether one sites tool is installed 
or several sites tools (two levels inside or one level above three levels inside).


The fallback urls for cdn urls vs. urls of local optional npm deps,
have to be implemented later,
since if cdn urls are set, nevertheless,
with npm optional deps for theme resources hardcopies,
a developer | tester may save on demand hardcopies of fonts inside a sites tool node_modules locally,
via `npm i <sites tool> --save-optional=true`


The `@jaisocx/preloader` ScriptsChainedLoader js class starts loading other scripts,
resolving `node_modules` fallback urls,
having bugfixed trouble in js transpiled ( legacy legacy ) Simple mode,
that some js class might be not loaded,
when the currently loaded script is being verified by a browser's js engine.




### 5. Event DOMContentLoaded overrides with The Fallback Urls Feature turned on.

With The Fallback Urls Resolval Feature,
on event DOMContentLoaded,
one can not be sure,
all scripts have been loaded,
since on DOMContentLoaded all resources are loaded, 
started to load after have parsed the hardcoded html tags like link and script.


when loading scripts with the @jaisocx/preloader ScriptsChainedLoader js class,
the method `.onload()` 
overrides js event handler on event emitted,
after the last .js script, of json array of scripts urls, was loaded.






### 6. CDN not responding blocks prevented.

When a cdn, where preloading media was published, is not responding,
the cleanup script stops waiting for responses from cdn.



#### 6.1. When a site is blocked:
    1. when a cdn is a remote machine,
    2. and may not be accessed by the site admin, 
    3. and when a cdn is not responding, 
    the preloading link tag `<link rel="preload" href="url-on-this-cdn" .>` 
    blocks rendering of a site,
    and the browser's tab is blank 
    and waits for good.



#### 6.2. The worst case with cdn, the site rendering is blocked

Every of these have place:

    1. browser on a client machine is in online mode;
    2. cdn domain name references to the IP of a valid working machine;
    3. this machine, has port 443 open;
    4. the https service on this machine port 443 is not responding, 
         for example, the https service was turned off.
    5. if before, the https service response headers relevant to cache were set,
         in update mode: just navigating to a site,
         in cache mode: after have had navigated to a site, then the site hard reload in browser.

The `fetchpriority=high` blocks our script solution, aimed to prevent the rendering block)).

    1. `<link fetchpriority="high" ... />`

#### 6.3. Advise when navigated to a blocked site

    1. tap|click browser's stop loading X button, 
    2. close browser's tab(s).
    3. navigate to other sites of other domains.

#### 6.3.2. Advise if still the browser hangs.

    1. turn off cable internet, mobile internet, WiFi, eventually BlueTooth,
    2. close browser's tab(s).
    3. ensure the temporary blocked site is NOT Your browser's start page,
    4. turn on internet again,
    5. navigate to other sites of other domains.




## How The Trouble Was Solved


### 1. Texts rendering quality due to hard loaded font file

The advise implemented in index.preview.html, the hardcoded preloading link tag to url of a font.


### 2. preventing interactivity layout jumps.

1. Site's elems get positions, as defined and managed by the task authors, ux/ui designers and sites devs.

2. Fonts on a site are loaded before they are shown on a site via js method call, preventing later interactivity layout jumps. You can see the timestamp of the font load in the browser's developer tools.


#### 2.2. How was solved

Even without the Preloader, to bugfix not planned repositioning of elems on site when other font set ( very often other glyphs size, h nd v ) for a text after the font load timeout, the workaround is to bugfix in styles with the line-height css prop in a css class, set for this text node.

To bugfix this with the @jaisocx/preloader, You have to set in the Preloader class instance the object with values of urls to the fonts published ( the best way on a managed by Your NetOps or by You, cdn endpoint ), like `.ttf` and similar.

These urls to fonts will load the fonts with the Preloader at once on the site load in browser.

You may set the same webpack alias, as in a css file where the font was referenced, in order to save up time when building this js object with urls to the fonts to preload.

If absolute urls, You may just pass the zero len string: `preloader.setWebpackAlias( "" )`

In this example, the keys of the object `themesPreloads.font` are thought just to notice for later for what the font files are loaded. In the Preloader ts code, there are NO bindings of these keys to names of themes or other css classnames.

In order to adjust the site for the Preloader, that it works properly, You will need, that all styles, referencing a font, use the exact one url to this font on Your cdn. Otherwise, the font file may be loaded several times in browser, even on same site, even after the Preloader has loaded this font the first time from the url set in the object, passed as in arg to method `preloader.setThemesPreloads( themesPreloads )`, for example, `themesPreloads.font.theme_lightmode`.

For the optimization, You can watch the font files loaded in browser's developer tools, if there are dynamic assignments of css classnames and link tags creation, when optimizing a site on a certain url.



### 3. loading resources just once.

The workaround to set the exact url of a font in the preloading link tag and @font-face style,
hardcoded in Your html page or with the Preloader class, this does this dynamique,
by set of urls in a json, set as incoming arg of the Preloader method `.setThemesPreloads( json );`



### 4. Fallback urls of npm deps.

Solved



### 5. Event DOMContentLoaded overrides with The Fallback Urls Feature turned on.

Solved

### 6. CDN not responding blocks prevented.

Solved






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

      let isPreloadWithStopOnLoadTimeout = true;
      let preloaderStopTimeoutMillis = 1800;

      const preloader = new Preloader();
        preloader
          .setThemesPreloads( themesPreloads )
          .setWebpackAlias( "@SandboxFontsCdn" )
          .setWebpackAliasReplace( "https://sandbox.brightday.email/cdn/www/fonts" )
          .init( isWithStopOnLoadTimeout, inTimeoutMillis );

    });

  </script>
```




### The Interface for the main class

```ts
export interface PreloaderInterface {

  setThemesPreloads( preloads: object ): PreloaderInterface;

  setWebpackAlias ( alias: string ): PreloaderInterface;

  setWebpackAliasReplace ( alias: string ): PreloaderInterface;

  init (
    isWithStopOnLoadTimeout: boolean,
    inTimeoutMillis: number
  ): void;

  addDocumentLoadedEventHandler (
    isWithStopOnLoadTimeout: boolean,
    inTimeoutMillis: number
  ): void;

  htmlDocumentAppendPreloadingLinkTags_Images( isWithStopOnLoadTimeout: boolean ): HTMLLinkElement[];

  htmlDocumentAppendPreloadingLinkTags_Fonts( isWithStopOnLoadTimeout: boolean ): HTMLLinkElement[];

  htmlDocumentAppendPreloadingLinkTags (
    inDataType: string,
    isWithStopOnLoadTimeout: boolean
  ): HTMLLinkElement[];


  // preventing browser requests waiting and blocking when a cdn is not responding.
  extractUrlsFromHarBrowserReport (
    harBrowserReportFilepath: string
  ): string[];

  addScriptLoadingStopOnTimeout (
    idsOfLinkTags: string[],
    timeoutNumberOfMilliseconds: number
  ): void;

  produceLinkTagsPreloading (
    idsOfLinkTags: string[]
  ): string;

  produceScriptLoadingStopOnTimeout (): string;

  produceCodeblockInvoke_ScriptLoadingStopOnTimeout (
    timeoutNumberOfMilliseconds: number
  ): string;

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






