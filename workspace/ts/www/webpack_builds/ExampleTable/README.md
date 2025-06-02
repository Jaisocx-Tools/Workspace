# Tree json tool examples

## webpack notices

### THEMES: MediaAndStyles like miniimages and fonts resolval in bundle.js
1. for MediaAndStyles in themes files, use webpack.aliases.js like in sites_tools/js_tools/Tree project.
2. in the Tree.ts, import main css entrypoint file "@jaisocx-tree-MediaAndStyles/tree-styles-main-webpack.css";
3. in tree-styles-main-webpack.css import theme main css file like this: @import url('themes/theme-base/theme-base-webpack.css');
4. use webpack.aliasese.js alias like this:

```

.tree > ul > li > pre > pre.jstree-html-node-holder-icon.icon-show
{
  --datatype-array--image-url: url('@jaisocx-tree-MediaAndStyles/themes/theme-base/mini-images/data-types/icons8-json-96.png');
  --datatype-object--image-url: url('@jaisocx-tree-MediaAndStyles/themes/theme-base/mini-images/data-types/icons8-json-96.png');
}

```

5. without the webpack build, use another relative urls in the .css files, loaded in <link rel="stylesheet" href="">.
6. with webpack produced bundle.js, several themes can be imported, and then used in html holder node <div id="tree-1" class="theme-extended-1">
7. when copying to the webpack build theme css files, urls have to be rewritten absolute, starting with / , and not relative like when working in browser with transpiled/Simple
8. have to try with other data, like .json and other.
9. in json the urls have to be absolute, or base64 contents.


### index.ts

the classes, required in script tags and other custom js, using this js ui tool, have to be avaliable like this:
```
import { Tree, TreeConstants } from "@jaisocx/tree";
export { Tree, TreeConstants } from "@jaisocx/tree";

(window as any).Tree = Tree;
(window as any).TreeConstants = TreeConstants;
```

