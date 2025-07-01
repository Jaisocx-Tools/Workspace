# CSS Table Ordered


## Status

In development



## The aim of the setup

For the Jaisocx Sits Server Files Listing server side rendered CssTable with JSP.

The jaisocx templates for files listing, https exceptions as 404 and others will be available on public git service in several months.



## The latest .tgz archive (v.1.2.8 1st of July 2025)

[https://sandbox.brightday.email/sites_tools/js_tools/CssTableOrdered/jaisocx-css-table-ordered-1.2.8.tgz](https://sandbox.brightday.email/sites_tools/js_tools/CssTableOrdered/jaisocx-css-table-ordered-1.2.8.tgz)


## Watch site in action

[https://sandbox.brightday.email/sites_tools/js_tools/CssTableOrdered/table_example.html](https://sandbox.brightday.email/sites_tools/js_tools/CssTableOrdered/table_example.html)




## Github

[]()




### Tasks to do




## Usage

```js
  <script src="sites_tools/js_tools/CssTableOrdered/transpiled/Simple/CssTableOrderby.js"></script>

  <script>

      let orderbyClassInstance = new Object();


      function addOrderbyEventHandler() {
        orderbyClassInstance = new CssTableOrderby();
          // orderbyClassInstance.setRowsNumberNotOrdered( 2 ); // when, for example, in files listing the first row with two dots like this: ..
        let eventHandlerRetval = orderbyClassInstance.addOrderbyEventHandler();
      }


      // DOCUMENT ONLOAD, INVOKES THE FUNCTION TO RENDER TOOLTIP ON SITE OPENED IN BROWSER.
      document.addEventListener('DOMContentLoaded', () => {

        addOrderbyEventHandler();

      });

  </script>
```


## npm for webpack



```
npm install @jaisocx/css-table-ordered
```



