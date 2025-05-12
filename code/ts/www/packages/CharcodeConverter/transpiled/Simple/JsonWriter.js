class JsonWriter {
  filePath;

  constructor() {
    this.filePath = "";
  }

  saveData(inFilePath, data) {
    let json = JSON.stringify(data, null, 2);
    fs.writeFileSync(
      inFilePath, 
      json, 
      { encoding: "utf-8" });
    this.filePath = inFilePath;

    return 1;
  }
} 


