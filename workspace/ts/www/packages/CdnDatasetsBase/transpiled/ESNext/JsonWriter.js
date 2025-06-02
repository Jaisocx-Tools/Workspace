import * as fs from "node:fs";
export class JsonWriter {
    filePath;
    constructor() {
        this.filePath = "";
    }
    // in browsers logs to console, doesn't save to file.
    saveData(inFilePath, data) {
        let json = JSON.stringify(data, null, 2);
        let isFsDefined = true;
        try {
            fs.writeFileSync(inFilePath, json, { encoding: "utf-8" });
            this.filePath = inFilePath;
        }
        catch (e) {
            isFsDefined = false;
        }
        if (isFsDefined === false) {
            console.log(inFilePath, json);
        }
        return 1;
    }
}
//# sourceMappingURL=JsonWriter.js.map