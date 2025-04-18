## BUILDING WITH WEBPACK 


# navigating to this package folder in the ts docker service
cd www/templates/BuiltWithWebpackYarnInstalledPackage/

# viewing folder files
ls -la

# initializing package with new package.json file for npm registry
yarn init

# installing sites tools from npm registry
yarn add @jaisocx/css-clean-start
yarn add @jaisocx/tooltip


# viewing node_modules folder, there will be @jaisocx lib installed
ls -la node_modules


# viewing node_modules/@jaisocx folder, there will be 2 packs installed, css-clean-start and tooltip
ls -la node_modules/@jaisocx

## total 0
## drwxr-xr-x    6 root     root           192 Mar 31 02:20 .
## drwxr-xr-x  155 root     root          4960 Mar 31 02:20 ..
## drwxr-xr-x   13 root     root           416 Mar 31 02:20 css-clean-start    # styling lib for responsive sites.
## drwxr-xr-x    5 root     root           160 Mar 31 02:20 event-emitter      # helping js classes for the Tooltip
## drwxr-xr-x    5 root     root           160 Mar 31 02:20 template-renderer  # helping js classes for the Tooltip
## drwxr-xr-x    7 root     root           224 Mar 31 02:20 tooltip            # a js class to show and hide any tools, just add html to tooltip.setHtml( anyTextOrHtml )


# after have added development npm dependencies to package.json, installing with yarn these dependencies.
# these npm packages are for the webpack.
yarn install


# viewing node_modules folder, there will be a lot of libs installed
ls -la node_modules


# after have built this package with Workspace Project Builder ./buildPackages.sh
# producing with the Webpack the bundle.js
yarn exec webpack


# viewing transpiled/webpack folder, there will be the bundle.js
ls -la transpiled/webpack

## total 84
## drwxr-xr-x    4 root     root           128 Mar 31 02:22 .
## drwxr-xr-x    6 root     root           192 Mar 31 02:22 ..
## drwxr-xr-x    3 root     root            96 Mar 31 02:22 MediaAndStyles                               # the folder with fonts
## -rw-r--r--    1 root     root         84602 Mar 31 02:22 example-built-with-webpack-bundle.js # the bundle.js


echo -e "Hello World\n"
