# Improved Template Renderer

`@jaisocx/improved-template-renderer`

## The foreach Tool))

Nothing new, and the JS frameworks do the rendering tasks best.

This lib is just the very few kb npm dependency, however with few features, too))

I tried to write the efficient algorythms to render the json of big sizes too.

Lazy load and Lazy rendering features are not implemented,
however this can be the idea for the very rich feature in the extending typescript class.




### The Example to obtain the imagination of the easiness to review and plan the HTML of Your dynamic rendered Site Tool

```
//@lang JavaScript

//@conf-type html structure.
let templatesObject = {
  "tableOpen":                `<div class="table {{ tableCssClasses }}">`,
  "colsLabelsHolderOpen":       `<div class="table-columns-labels-holder">`,
  "colLabelOpen":                 `<div class="table-column-label">`,
  "colLabelRendered":               `{{ columnLabelInfo.label }}`,
  "colLabelClose":                `</div>`,
  "colsLabelsHolderClose":      `</div>`,
  "recordsHolderOpen":          `<div class="table-records-holder">`,
  "recordOpen":                   `<div class="table-record">`,
  "fieldOpen":                      `<div class="table-field">`,
  "fieldRendered":                    `{{ value }}`,
  "fieldClose":                     `</div>`,
  "recordClose":                  `</div>`,
  "recordsHolderClose":         `</div>`,
  "tableClose":               `</div>`
};
```

