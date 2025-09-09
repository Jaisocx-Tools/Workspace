class WriteAllDataSetsCommand {

    static exampleWriteMethod(folderPath) {
        let pathResolveFunc;
        let isPathDefined = true;
        try {
            pathResolveFunc = path.resolve;
        }
        catch (e) {
            isPathDefined = false;
        }

        if (isPathDefined === false) {
            pathResolveFunc = (inPath1, inPath2) => {
                return [inPath1, inPath2].join("/");
            };
        }
        let datasetBase = new DatasetBase();
        datasetBase.saveDataIndexedByKeys(
            "items[2]",


            // @ts-ignore
            pathResolveFunc(
                folderPath,
                "datasetIndexedByKey.json"
            )
        );


        return 1;
    }
}


