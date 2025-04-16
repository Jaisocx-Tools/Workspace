import { execSync } from "child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import JSON5 from "json5";
import { IDependency } from "./types.js";
import { CssImporter } from "@jaisocx/css-importer";


export class ProjectBuilder {
  isLocalDevelopment: number;

  cssImporter: CssImporter;

  absolutePathToProjectRoot: any;

  relativePathFromRootTsConfigCatalogPath: any;
  absolutePathFromRootTsConfigCatalogPath: any;

  relativePathFromRootLintCatalog: any;
  absolutePathFromRootLintCatalog: any;

  relativePathFromRootWww: any;
  absolutePathFromRootWww: any;

  buildCjsCatalogName: any;
  buildEsmCatalogName: any;
  buildSimpleCatalogName: any;


  constructor() {
    this.isLocalDevelopment = 1;

    this.cssImporter = new CssImporter();

    this.absolutePathToProjectRoot = "";

    this.relativePathFromRootTsConfigCatalogPath = "";
    this.absolutePathFromRootTsConfigCatalogPath = "";
  
    this.relativePathFromRootLintCatalog = "";
    this.absolutePathFromRootLintCatalog = "";
  
    this.relativePathFromRootWww = "";
    this.absolutePathFromRootWww = "";
  
    this.buildCjsCatalogName = "";
    this.buildEsmCatalogName = "";
    this.buildSimpleCatalogName = "";
  }

  getIsLocalDevelopment(): number {
    return this.isLocalDevelopment;
  }

  setIsLocalDevelopment(isLocalDevelopment: number): ProjectBuilder {
    this.isLocalDevelopment = isLocalDevelopment;
    return this;
  }

  setAbsolutePathToProjectRoot(projectRoot: any): ProjectBuilder {
    this.absolutePathToProjectRoot = projectRoot;
    return this;
  }
  setAbsolutePath( 
    propertyName: any, 
    relativePath: any): ProjectBuilder {    
    if (!this.absolutePathToProjectRoot) {
      throw new Error("The Absolute Path to Project root is not specified!!!");
    }

    // @ts-ignore
    this[propertyName] = path.resolve(
      this.absolutePathToProjectRoot + "/" + relativePath
    );
    return this;
  }
  setRelativePathFromRootTsConfigCatalogPath(relativePath: any): ProjectBuilder {
    this.relativePathFromRootTsConfigCatalogPath = relativePath;
    this.setAbsolutePath(
      "absolutePathFromRootTsConfigCatalogPath", 
      relativePath);
    return this;
  }
  setRelativePathFromRootLintCatalog(relativePath: any): ProjectBuilder {
    this.relativePathFromRootLintCatalog = relativePath;
    this.setAbsolutePath(
      "absolutePathFromRootLintCatalog", 
      relativePath);
    return this;
  }
  setRelativePathFromRootWww(relativePath: any): ProjectBuilder {
    this.relativePathFromRootWww = relativePath;
    this.setAbsolutePath(
      "absolutePathFromRootWww", 
      relativePath);
    return this;
  }
  setBuildCjsCatalogName(catalogName: any): ProjectBuilder {
    this.buildCjsCatalogName = catalogName;
    return this;
  }
  setBuildEsmCatalogName(catalogName: any): ProjectBuilder {
    this.buildEsmCatalogName = catalogName;
    return this;
  }
  setBuildSimpleCatalogName(catalogName: any): ProjectBuilder {
    this.buildSimpleCatalogName = catalogName;
    return this;
  }

  build(dataJson: any): any {
    if (!dataJson.packages || 0 === dataJson.packages.length) {
      throw new Error("no packages array set in BuildData.json");
    }

    const packages: any[] = [
      ...dataJson.packages.filter(
        (packageJson: any) => (true === packageJson.build)
      )
    ];

    if (!packages || 0 === packages.length) {
      throw new Error("no packages marked to build in the BuildData.json");
    }

    for (let packageJson of packages) {
      this.buildPackage(packageJson);
    }
  }

  buildPackage(packageJson: any) {
    console.log("\n\n\n===============================");
    console.log(`MODULE ${packageJson.name}`);
    console.log("===============================\n");

    let packagePath: any = path.resolve(
      this.absolutePathFromRootWww, 
      packageJson.path);

    // install or link npm dependencies
    console.log(`Package [ ${packageJson.name} ]: Calling npm dependencies install`);
    this.installPackageDependencies(
      packageJson, 
      packagePath);

    // console output list of files in the package src catalog
    this.runCommandLine(
      packagePath, 
      "ls -lahrts src", 
      true);

    console.log(`Package [ ${packageJson.name} ]: Prettifying with Eslint TypeScript code in ${packagePath}`);
    this.prettifyWithEslint(
      packagePath, 
      `${packagePath}/src/**/*.ts`, 
      false);

    console.log(`Package [ ${packageJson.name} ]: ESNext Transpiling TypeScript code in ${packagePath}`);
    // transpile modern node version compatible
    const tsconfigESNextName: any = "tsconfig.ESNext.json";
    const tsconfigESNextPath: any = `${this.absolutePathToProjectRoot}/${tsconfigESNextName}`;
    this.transpileTypescriptSourcesWithPath(
      packagePath, 
      tsconfigESNextPath);

    console.log(`Package [ ${packageJson.name} ]: CommonjS Transpiling TypeScript code in ${packagePath}`);
    // transpile legacy node versions compatible
    const tsconfigCommonJSName: any = "tsconfig.CommonJS.json";
    const tsconfigCommonJSPath: any = `${this.absolutePathToProjectRoot}/${tsconfigCommonJSName}`;
    this.transpileTypescriptSourcesWithPath(
      packagePath, 
      tsconfigCommonJSPath);

    // link this package for usage in local development in other .ts files
    if (this.getIsLocalDevelopment()) {
      console.log(`Package [ ${packageJson.name} ]: npm link package ${packageJson.name} for local usage with other`);
      this.runCommandLine(
        packagePath, 
        "npm link", 
        false);
    }

    const timeStamp: any = (new Date()).toISOString();

    // building simple .js files to use in example.hml via <script src="...js"
    console.log(`${timeStamp} Package [ ${packageJson.name} ]: building simple .js for usage in .html in script tag as src`);
    this.buildSimple(
      packageJson, 
      packagePath);

    // resolve @import url(@alias/style.css) in .css
    console.log(`${timeStamp} Package [ ${packageJson.name} ]: packing css`);
    this.cssImporterRun(
      packageJson, 
      packagePath);
  }

  installPackageDependencies(
    packageJson: any, 
    packagePath: any): void {
    let dependencyCatalogPath: any = "";
    let localDependency: IDependency|null = null;

    const dependencies: IDependency[]|null = packageJson["dependencies"];
    if (dependencies && dependencies.length > 0) {
      console.log(`Package [ ${packageJson.name} ]: Installing npm dependencies at ${packagePath}...`);

      if (this.getIsLocalDevelopment()) {
        console.log(`Package [ ${packageJson.name} ]: Local dev mode npm link method chosen`);

        const localDependenciesNames: any[] = [];
        for (localDependency of dependencies) {
          dependencyCatalogPath = path.resolve(
            this.absolutePathFromRootWww, 
            localDependency.path);

          console.log(`cd && npm link in catalog: [ ${dependencyCatalogPath} ]`);
          this.runCommandLine(
            dependencyCatalogPath, 
            `cd "${dependencyCatalogPath}" && npm link`, 
            false);
          localDependenciesNames.push(localDependency.name);
        }

        const packagesToLinkJoined: any = localDependenciesNames.join(" ");
        const npmLinkCommand: any = `cd "${packagePath}" && npm link ${packagesToLinkJoined}`;
        console.log(`${npmLinkCommand}`);
        this.runCommandLine(
          packagePath, 
          npmLinkCommand, 
          false);
        
      } else {
        console.log(`Package [ ${packageJson.name} ]: npm install from npm registry`);

        //for (dependencyName of dependencies) {
        //dependencyCatalogPath = rootPath + dependencyCatalogPath;
        //execSync('npm run build', { cwd: packagePath, stdio: 'inherit', , shell: '/usr/bin/env bash' }); // Run the build command
        //}
      }
    } else {
      console.log(`Package [ ${packageJson.name} ]: No dependencies were set in BuildData.json`);
    }
  }

  buildSimple(
    packageJson: any, 
    packagePath: any): void {
    //let buildFileName: any = '';
    let buildCatalogPath: any = "";
    //let buildFilePath: any = '';
    let buildSimpleCatalogPath: any = "";
    //let buildSimpleFilePath: any = '';

    const buildFiles: any[]|undefined = packageJson["build-files"];
    if (!buildFiles || (0 === buildFiles.length)) {
      throw new Error(`Package [ ${packageJson.name} ]: You forgot to set "build-files" array, You wish to provide for Simple Build!`);
    }

    buildCatalogPath    = packagePath + "/" + this.buildEsmCatalogName;
    if (false === fs.existsSync(buildCatalogPath)) {
      throw new Error(`Package [ ${packageJson.name} ]: build catalog not found: ${buildCatalogPath}`);
    }
    buildSimpleCatalogPath = packagePath + "/" + this.buildSimpleCatalogName;
    if (false === fs.existsSync(buildSimpleCatalogPath)) {
      this.runCommandLine(
        packagePath, 
        `mkdir -p "${buildSimpleCatalogPath}"`, 
        false);
    }

    for (const buildFileName of buildFiles) {
      const buildFilePath: any        = buildCatalogPath + "/" + buildFileName;
      const buildSimpleFilePath: any  = buildSimpleCatalogPath + "/" + buildFileName;

      if (true === fs.existsSync(buildSimpleFilePath)) {
        this.runCommandLine(
          packagePath, 
          `rm "${buildSimpleFilePath}"`, 
          false);
      }

      const fileSimplePathDir: any = path.parse(buildSimpleFilePath).dir;
      if (false === fs.existsSync(fileSimplePathDir) ) {
        this.runCommandLine(
          packagePath, 
          `mkdir -p "${fileSimplePathDir}"`, 
          false);
      }

      this.runCommandLine(
        packagePath, 
        `cp "${buildFilePath}" "${buildSimpleFilePath}"`, 
        false);

      // @ts-ignore
      this.prettifyWithEslint(
        packagePath, 
        `${this.buildSimpleCatalogName}/${buildFileName}`, 
        false);
    }
  }

  cssImporterRun( 
    packageJson: any, 
    packagePath: any ) {
    
    const confNodeCss: any|undefined = packageJson["css-importer"];

    if (confNodeCss === undefined || confNodeCss.build !== true ) {
      return;
    }

    this.cssImporter
      .setPackagePath( packagePath )
      .setCssFilePath( path.resolve( 
        packagePath, 
        confNodeCss.cssFilePath ) )
      .setCssTargetFilePath( path.resolve( 
        packagePath, 
        confNodeCss.cssTargetFilePath ) )
      .build().then( ( result: number ) => {
        console.log(`css importer built ${packagePath}: ${result}`);
      });
  }

  transpileTypeScriptSources (
    tsconfigCatalogPath: any, 
    tsconfigFileName: any,
    logToConsole: boolean
  ): any {
    const consoleCommand: any = `cd "${tsconfigCatalogPath}" && tsc -p "${tsconfigFileName}"`;
    return this.runCommandLine(
      tsconfigCatalogPath, 
      consoleCommand, 
      logToConsole);
  }

  transpileTypescriptSourcesWithPath(
    packagePath: any, 
    tsconfigPath: any): any {
    const tsconfigJson: any = fs.readFileSync(tsconfigPath);
    const tsconfig: any = JSON5.parse(tsconfigJson);
    const compilerOptions: any = tsconfig["compilerOptions"];
    if (!compilerOptions) {
      throw new Error(`Typescript config file has no compilerOptions, or was not found at: ${tsconfigPath}`);
    }
    const transpileOptions: any[] = [];
    for (let compilerOptonName in compilerOptions) {
      const compilerOptionValue: any = compilerOptions[compilerOptonName];
      transpileOptions.push(`--${compilerOptonName} ${compilerOptionValue}`);
    }

    const filesAndCatalogsList: any[] = fs.readdirSync(
      `${packagePath}/src`, 
      {recursive: true})  as string[];
    if (!filesAndCatalogsList || filesAndCatalogsList.length === 0) {
      return null;
    }

    const filesList: any[] = filesAndCatalogsList.filter((filePath) => {
      const absPath: any = `${packagePath}/src/${filePath}`;
      return fs.lstatSync(absPath).isFile(); 
    });

    const packagePathRelative = packagePath.replace(
      `${this.absolutePathToProjectRoot}/`, 
      "");
    //const filesListJoinedString: any = `${packagePathRelative}/src/` + filesList.join(` ${packagePathRelative}/src/`);
    const filesListJoinedString: any = "src/" + filesList.join(" src/");
    const transpileOptionsString: any = transpileOptions.join(" ");

    // cd packagePath ensures usage of package.json installed deps for this exact subpackage.
    const transpileCommand: any = `cd "${packagePath}" && npx tsc ${filesListJoinedString} ${transpileOptionsString}`;
    return this.runCommandLine(
      `${packagePath}`, 
      transpileCommand, 
      true);
  }

  prettifyWithEslint(
    packagePath: any, 
    pathToPrettify: any, 
    logToConsole: boolean
  ): any {
    const consoleCommand: any = `cd "${packagePath}" && npx eslint "${pathToPrettify}" --fix`;
    return this.runCommandLine(
      packagePath, 
      consoleCommand, 
      logToConsole);
  }

  runCommandLine(
    configCatalogPath: any, 
    consoleCommand: any, 
    logToConsole: boolean
  ): any {
    let result: any = null;
    try {
      result = execSync(
        consoleCommand, 
        this.getSpawnSyncPayload(configCatalogPath)
      );
    } catch (e: any) {
      result = e;
    }

    return result;
  }

  getSpawnSyncPayload(contextRoot: any): any {
    return {
      cwd: contextRoot,
      stdio: "inherit", 
      shell: "bash"
      //shell: '/usr/bin/env bash',
      //env: { ...process.env, PATH: (process.env.PATH + ':/usr/local/bin:/usr/bin:/bin') }
    };
  }

}





