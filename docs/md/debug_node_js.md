# DEBUG NODE JS

## Server side scripts

### VSCode

#### 1. copy script


1.1 learn the example file cmd/sitesTool_MediaAndStyles.sh, copy to the same folder cmd, and modify to invoke other js script that needs server side node engine.



1.2 modify the script args --packagePath and --script



1.3 You may run the script like this:

```
./cmd/sitesTool_MediaAndStyles_1.sh
```



1.4 or, with debug option like this:

```
./cmd/sitesTool_MediaAndStyles_1.sh --debug
```


1.5 in VSCode click button to open debug view


1.6 in debug view, choose the option "Debug Workspace js server side"


1.7 click the triangle arrow button on the left of the choice "Debug Workspace js server side"


1.8 the debugger starts waiting at once on the first code line, not on the first custom breakpoint, set by You. Just step further.




