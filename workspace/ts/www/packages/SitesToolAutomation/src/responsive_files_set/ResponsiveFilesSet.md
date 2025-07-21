# ResponsiveFilesSet.ts

Produces .css files for evry responsive size with the media query, where min-width and max-width are from the .json dataset in path `${package}/data/ResponsiveSizes/ResponsiveSizes.json`




Example:

```css
/* responsive_size_e04_mobile_s_portrait_CssToolTemplate.css */

/* ${SandboxProject}/workspace/ts/www/sites_tools/css_tools/CssToolTemplate/MediaAndStyles/themes/theme_base/responsive_size_e04_mobile_s_portrait_CssToolTemplate.css */

/* Responsive rules */
@media only screen and (min-width: 321px) and (max-width: 374px) and (orientation: portrait) {

  .jsx {
    --responsive_size: responsive_size_e04_mobile_s_portrait;

    --responsive_size__min-width: 321px;
    --responsive_size__max-width: 374px;



    --responsive_size_CssToolTemplate: responsive_size_e04_mobile_s_portrait_CssToolTemplate;

    --responsive_size_CssToolTemplate__min-width: 321px;
    --responsive_size_CssToolTemplate__max-width: 374px;
  }

}


```







You may copy, paste and then modify the new template for this filesset.

for example, the template for The Css Clean Start: `workspace/ts/www/packages/SitesToolAutomation/data/templates/ResponsiveTemplate_CssCleanStart.template`


```

/*

Responsive rules

These styles for a display size in this primary template for a site from scratch,
  I guess, need first the adjustments for sizes,
  when tested on several displays for higher quality of a site shown in a browser on a display.

That is why in the CssCleanStart just the css constants relevant for sizes are set in this template.

*/


@media only screen and (min-width: {{ min-width }}px) and (max-width: {{ max-width }}px) and (min-height: {{ min-height }}px) and (max-height: {{ max-height }}px) and (orientation: {{ orientation }}) {

  .jsx {
    --theme_name: {{ SitesToolName }}__{{ SitesTool_ThemeName }};
    --theme_name__{{ SitesToolName }}: {{ SitesTool_ThemeName }};

    {{ responsiveSizeConstantName }}: {{ responsiveSizeName }};

    {{ responsiveSizeConstantName }}__min-width: {{ min-width }}px;
    {{ responsiveSizeConstantName }}__max-width: {{ max-width }}px;

    {{ responsiveSizeConstantName }}__min-height: {{ min-height }}px;
    {{ responsiveSizeConstantName }}__max-height: {{ max-height }}px;



    {{ responsiveSizeConstantName }}__{{ SitesToolName }}__{{ SitesTool_ThemeName }}: {{ responsiveSizeName }}__{{ SitesToolName }}__{{ SitesTool_ThemeName }};

    {{ responsiveSizeConstantName }}__{{ SitesToolName }}__{{ SitesTool_ThemeName }}__min-width: {{ min-width }}px;
    {{ responsiveSizeConstantName }}__{{ SitesToolName }}__{{ SitesTool_ThemeName }}__max-width: {{ max-width }}px;

    {{ responsiveSizeConstantName }}__{{ SitesToolName }}__{{ SitesTool_ThemeName }}__min-height: {{ min-height }}px;
    {{ responsiveSizeConstantName }}__{{ SitesToolName }}__{{ SitesTool_ThemeName }}__max-height: {{ max-height }}px;



    /** Clean Start Css Constants */
    /*
    --clean-start__tag_body__width:     var(--clean-start__tag_body__width__{{ responsiveSize }});
    --clean-start__tag_body__max_width: var(--clean-start__tag_body__max_width__{{ responsiveSize }});
    --clean-start__tag_body__min_width: var(--clean-start__tag_body__min_width__{{ responsiveSize }});
    */

...
...

```