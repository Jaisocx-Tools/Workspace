# INSTALL SITES TOOL WITH THE PREVIEW

[README.md HOME](./../../README.md)

[news.md NEWS](./news.md)





#### For what:

ts sites tools can have npm dependencies, for example @jaisocx/css-clean-start-2 for the site's look and feel in the index.example.html

when the npm lib was installed, its npm dependencies from `package.json` are not always installed in the nested `node_modules`, and then the `index.example.html` isn't rendering in browser the right way.

the script just installs the npm lib and dependencies




#### Notice:

The script works without referencing other .sh scripts.
You can just copy this script file standalone and install later by npm any sites tools with preview in browser.






#### Required:
1. NodeJS locally, not under Docker

2. index.example.html in the published npm package (for now, on npm in @jaisocx namespace just the css-clean-start-2, css-table and css-table-ordered)



The script can run if NodeJS is installed locally, not in the Dockerized ts service here,
since the preview may be of great use when installing a sites tool for a preview and tests in another project too, not the Sandbox.

Why without Docker: when at once writing the script for the dockerized node services,
I don't have for now the idea of script args
for eventually installed other docker services names, paths on host and in docker services, and when without docker.




#### The args for the script:

1. npm package name

2. npm package ver number or "latest"

3. path to the folder where You'd like to install the sites tool, maybe just for the preview or tests temporarily.

```bash
./cmd/install_and_view_sites_tool.sh "@jaisocx/css-clean-start-2" "latest" "/home/user/projects/preview"
```

