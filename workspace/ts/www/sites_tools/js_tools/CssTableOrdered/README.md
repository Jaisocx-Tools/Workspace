# CSS Table Ordered


## Status

Ready



## The aim of the setup

For the Jaisocx Sits Server Files Listing server side rendered CssTable with JSP.

The jaisocx templates for files listing, https exceptions and others will be available on public git service in several months.



## The latest .tgz archive (v.2.3.1 26th of month August 2025)

[https://sandbox.brightday.email/sites_tools/js_tools/CssTableOrdered/jaisocx-css-table-ordered-2.3.1.tgz](https://sandbox.brightday.email/sites_tools/js_tools/CssTableOrdered/jaisocx-css-table-ordered-2.3.1.tgz)





## Watch site in action

### With Orderby on laptops and larger displays.

[https://sandbox.brightday.email/sites_tools/js_tools/CssTableOrdered/index.example.html](https://sandbox.brightday.email/sites_tools/js_tools/CssTableOrdered/index.example.html)


[https://sandbox.brightday.email/sites_tools/js_tools/CssTableOrdered/css_table_ordered_3_records.example.html](https://sandbox.brightday.email/sites_tools/js_tools/CssTableOrdered/css_table_ordered_3_records.example.html)


[https://sandbox.brightday.email/sites_tools/js_tools/CssTableOrdered/css_table_ordered.example.html](https://sandbox.brightday.email/sites_tools/js_tools/CssTableOrdered/css_table_ordered.example.html)


[https://sandbox.brightday.email/sites_tools/js_tools/CssTableOrdered/css_table_ordered.jaisocx_folder_listing.example.html](https://sandbox.brightday.email/sites_tools/js_tools/CssTableOrdered/css_table_ordered.jaisocx_folder_listing.example.html)







### Same html with theme jaisocx folder listing

The mobile portrait view was fine tuned for the folder listing in the Jaisocx Sites Server.


[https://sandbox.brightday.email/sites_tools/js_tools/CssTableOrdered/jaisocx-folder-listing-preview.html](https://sandbox.brightday.email/sites_tools/js_tools/CssTableOrdered/jaisocx-folder-listing-preview.html)





### Tasks to do

1. css themes npm package example to install on a Jaisocx server instance with @jaisocx/css-table-ordered



## Usage

```js
  <link rel="stylesheet" href="/sites_tools/css_tools/CssCleanStart_2/MediaAndStyles/CssCleanStart_2_main_resolved_minimal.css" />
  <link rel="stylesheet" href="/sites_tools/css_tools/CssTable/MediaAndStyles/CssTable_main_resolved_minimal.css" />



  <link rel="stylesheet" href="/sites_tools/js_tools/CssTableOrdered/MediaAndStyles/themes/theme_fixed_columns_labels/theme_fixed_columns_labels.css" />



  <script src="sites_tools/js_tools/CssTableOrdered/transpiled/Simple/scroll/CssTableScroll.js"></script>
  <script src="sites_tools/js_tools/CssTableOrdered/transpiled/Simple/orderby/CssTableOrderby.js"></script>



  <script>

    let orderbyClassInstance = new Object();

    function addScrollEventHandlers() {
      cssTableScrollInstance = new CssTableScroll();
      cssTableScrollInstance.addScrollEventHandlers();
    }

    function addOrderbyEventHandler() {
      orderbyClassInstance = new CssTableOrderby();
        orderbyClassInstance.setRowsNumberNotOrdered( 1 );
      let eventHandlerRetval = orderbyClassInstance.addOrderbyEventHandler();
    }



    // DOCUMENT ONLOAD
    document.addEventListener('DOMContentLoaded', () => {

      addScrollEventHandlers();

      addOrderbyEventHandler();

    });

  </script>
```


## npm for webpack



```
npm install @jaisocx/css-table-ordered
```



