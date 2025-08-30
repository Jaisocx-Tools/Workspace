class TreeAdapter {
    conf;
    nodesWithIcons;
    nodesOpenedMode;
    dataTypesCssClassesEnabled;



    constructor() {
        this.conf = new TreeConf();
        this.nodesWithIcons = TreeConstants.Defaults.nodesWithIcons;
        this.nodesOpenedMode = TreeConstants.Defaults.nodesOpenedMode;
        this.dataTypesCssClassesEnabled = TreeConstants.Defaults.dataTypesCssClassesEnabled;
    }
}


