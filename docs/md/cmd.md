# Command line tools in this Project

## Sites tool preview installed from npm

```bash
./cmd/install_and_view_sites_tool.sh "@jaisocx/tree" latest "< the absolute path to folder where to install for the preview >"
```


## Link tag integrity to prove hash of the resource being loaded

1. modify file ./cmd/linkedResourceHash.sh

on line 55 set path to file in the ts dockerized service like this:

```bash
      --filePath="/var/www/cdn/www/media/images/favicon/Icon_Sandbox_Brightday.ico" \
```


2. invoke bash script in terminal

```bash
./cmd/linkedResourceHash.sh
```

![Linked Resources Hash](./images/cmd/LinkedResourceHash.png)

3. Improve quality of the linked resources on Your sites

```html
    <link
      rel="icon"
      type="image/x-icon"
      href="https://sandbox.brightday.email/cdn/www/media/images/favicon/Icon_Sandbox_Brightday.ico"
      href-fallback="favicon/Icon_Sandbox_Brightday.ico"
      integrity="sha512-t3XuLqNXUNFqkrdBlRf4me63watpaFBd8TZzcCAvxUMG4msGTx2/k6OFQdEl0wUj3iKDK9z2Z9h+YQF71i8S+Q=="
      onerror="javascript: ( () => { this.onerror = null; this.href = this.getAttribute( 'href-fallback' ); } )();"
    />
```


