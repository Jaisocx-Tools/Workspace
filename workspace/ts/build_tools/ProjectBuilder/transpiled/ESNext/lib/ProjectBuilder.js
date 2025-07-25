import { execSync } from "child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import JSON5 from "json5";
import { CssImporter } from "@jaisocx/css-importer";
export class ProjectBuilder {
    isLocalDevelopment;
    cssImporters;
    absolutePathToProjectRoot;
    relativePathFromRootTsConfigCatalogPath;
    absolutePathFromRootTsConfigCatalogPath;
    relativePathFromRootLintCatalog;
    absolutePathFromRootLintCatalog;
    relativePathFromRootWww;
    absolutePathFromRootWww;
    buildCjsCatalogName;
    buildEsmCatalogName;
    buildSimpleCatalogName;
    constructor() {
        this.isLocalDevelopment = 1;
        this.cssImporters = new Array();
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
    getIsLocalDevelopment() {
        return this.isLocalDevelopment;
    }
    setIsLocalDevelopment(isLocalDevelopment) {
        this.isLocalDevelopment = isLocalDevelopment;
        return this;
    }
    setAbsolutePathToProjectRoot(projectRoot) {
        this.absolutePathToProjectRoot = projectRoot;
        return this;
    }
    setAbsolutePath(propertyName, relativePath) {
        if (!this.absolutePathToProjectRoot) {
            throw new Error("The Absolute Path to Project root is not specified!!!");
        }
        // @ts-ignore
        this[propertyName] = path.resolve(this.absolutePathToProjectRoot + "/" + relativePath);
        return this;
    }
    setRelativePathFromRootTsConfigCatalogPath(relativePath) {
        this.relativePathFromRootTsConfigCatalogPath = relativePath;
        this.setAbsolutePath("absolutePathFromRootTsConfigCatalogPath", relativePath);
        return this;
    }
    setRelativePathFromRootLintCatalog(relativePath) {
        this.relativePathFromRootLintCatalog = relativePath;
        this.setAbsolutePath("absolutePathFromRootLintCatalog", relativePath);
        return this;
    }
    setRelativePathFromRootWww(relativePath) {
        this.relativePathFromRootWww = relativePath;
        this.setAbsolutePath("absolutePathFromRootWww", relativePath);
        return this;
    }
    setBuildCjsCatalogName(catalogName) {
        this.buildCjsCatalogName = catalogName;
        return this;
    }
    setBuildEsmCatalogName(catalogName) {
        this.buildEsmCatalogName = catalogName;
        return this;
    }
    setBuildSimpleCatalogName(catalogName) {
        this.buildSimpleCatalogName = catalogName;
        return this;
    }
    build(dataJson) {
        if (!dataJson.packages || 0 === dataJson.packages.length) {
            throw new Error("no packages array set in BuildData.json");
        }
        const packages = [
            ...dataJson.packages.filter((packageJson) => {
                let cssImporterConf = packageJson["css-importer"];
                let filterBy = (packageJson.build === true) ||
                    ((cssImporterConf !== undefined) &&
                        (cssImporterConf.build === true));
                return filterBy;
            })
        ];
        if (!packages || 0 === packages.length) {
            throw new Error("no packages marked to build in the BuildData.json");
        }
        for (let packageJson of packages) {
            this.buildPackage(packageJson, dataJson);
        }
    }
    buildPackage(packageJson, dataJson) {
        let timeStamp = (new Date()).toISOString();
        console.log("\n\n\n===============================");
        console.log(`${timeStamp} MODULE ${packageJson.name}`);
        console.log("===============================\n");
        let packagePath = path.resolve(this.absolutePathFromRootWww, packageJson.path);
        let cssImporterConf = packageJson["css-importer"];
        let withCssImporter = ((cssImporterConf !== undefined) && (cssImporterConf.build === true));
        let justWithCssImporter = ((packageJson.build === false) && (withCssImporter === true));
        if (withCssImporter === true) {
            timeStamp = (new Date()).toISOString();
            console.log(`${timeStamp} Package [ ${packageJson.name} ]: packing css`);
            this.cssImporterRun(cssImporterConf, packagePath);
        }
        if (justWithCssImporter === true) {
            return 3;
        }
        // install or link npm dependencies
        timeStamp = (new Date()).toISOString();
        console.log(`${timeStamp} Package [ ${packageJson.name} ]: Calling npm dependencies install`);
        this.installPackageDependencies(packageJson, packagePath);
        // console output list of files in the package src catalog
        this.runCommandLine(packagePath, "ls -lahrts src");
        if (dataJson["prettify-typescript"] === true) {
            timeStamp = (new Date()).toISOString();
            console.log(`${timeStamp} Package [ ${packageJson.name} ]: Prettifying with Eslint TypeScript code in ${packagePath}`);
            this.prettifyWithEslint(packagePath, `${packagePath}/src/**/*.ts`);
        }
        timeStamp = (new Date()).toISOString();
        console.log(`${timeStamp} Package [ ${packageJson.name} ]: ESNext Transpiling TypeScript code in ${packagePath}`);
        // transpile modern node version compatible
        const tsconfigESNextName = "tsconfig.ESNext.json";
        const tsconfigESNextPath = `${this.absolutePathToProjectRoot}/${tsconfigESNextName}`;
        this.transpileTypescriptSourcesWithPath(packagePath, tsconfigESNextPath);
        timeStamp = (new Date()).toISOString();
        console.log(`${timeStamp} Package [ ${packageJson.name} ]: CommonjS Transpiling TypeScript code in ${packagePath}`);
        // transpile legacy node versions compatible
        const tsconfigCommonJSName = "tsconfig.CommonJS.json";
        const tsconfigCommonJSPath = `${this.absolutePathToProjectRoot}/${tsconfigCommonJSName}`;
        this.transpileTypescriptSourcesWithPath(packagePath, tsconfigCommonJSPath);
        // link this package for usage in local development in other .ts files
        if (this.getIsLocalDevelopment()) {
            timeStamp = (new Date()).toISOString();
            console.log(`${timeStamp} Package [ ${packageJson.name} ]: npm link package ${packageJson.name} for local usage with other`);
            this.runCommandLine(packagePath, "npm link");
        }
        // building simple .js files to use in example.hml via <script src="...js"
        if (packageJson["build-simple-enable"] === true) {
            timeStamp = (new Date()).toISOString();
            console.log(`${timeStamp} Package [ ${packageJson.name} ]: building simple .js for usage in .html in script tag as src`);
            this.buildSimple(packageJson, packagePath);
        }
        return 2;
    }
    installPackageDependencies(packageJson, packagePath) {
        let dependencyCatalogPath = "";
        let localDependency = null;
        const dependencies = packageJson["dependencies"];
        if (dependencies && dependencies.length > 0) {
            console.log(`Package [ ${packageJson.name} ]: Installing npm dependencies at ${packagePath}...`);
            if (this.getIsLocalDevelopment()) {
                console.log(`Package [ ${packageJson.name} ]: Local dev mode npm link method chosen`);
                const localDependenciesNames = [];
                for (localDependency of dependencies) {
                    dependencyCatalogPath = path.resolve(this.absolutePathFromRootWww, localDependency.path);
                    console.log(`cd && npm link in catalog: [ ${dependencyCatalogPath} ]`);
                    this.runCommandLine(dependencyCatalogPath, `cd "${dependencyCatalogPath}" && npm link`);
                    localDependenciesNames.push(localDependency.name);
                }
                const packagesToLinkJoined = localDependenciesNames.join(" ");
                const npmLinkCommand = `cd "${packagePath}" && npm link ${packagesToLinkJoined}`;
                console.log(`${npmLinkCommand}`);
                this.runCommandLine(packagePath, npmLinkCommand);
            }
            else {
                console.log(`Package [ ${packageJson.name} ]: npm install from npm registry`);
                //for (dependencyName of dependencies) {
                //dependencyCatalogPath = rootPath + dependencyCatalogPath;
                //execSync('npm run build', { cwd: packagePath, stdio: 'inherit', , shell: '/usr/bin/env bash' }); // Run the build command
                //}
            }
        }
        else {
            console.log(`Package [ ${packageJson.name} ]: No dependencies were set in BuildData.json`);
        }
    }
    buildSimple(packageJson, packagePath) {
        //let buildFileName: any = '';
        let buildCatalogPath = "";
        //let buildFilePath: any = '';
        let buildSimpleCatalogPath = "";
        //let buildSimpleFilePath: any = '';
        const buildFiles = packageJson["build-files"];
        if (!buildFiles || (0 === buildFiles.length)) {
            throw new Error(`Package [ ${packageJson.name} ]: You forgot to set "build-files" array, You wish to provide for Simple Build!`);
        }
        buildCatalogPath = packagePath + "/" + this.buildEsmCatalogName;
        if (false === fs.existsSync(buildCatalogPath)) {
            throw new Error(`Package [ ${packageJson.name} ]: build catalog not found: ${buildCatalogPath}`);
        }
        buildSimpleCatalogPath = packagePath + "/" + this.buildSimpleCatalogName;
        if (false === fs.existsSync(buildSimpleCatalogPath)) {
            this.runCommandLine(packagePath, `mkdir -p "${buildSimpleCatalogPath}"`);
        }
        for (const buildFileName of buildFiles) {
            const buildFilePath = buildCatalogPath + "/" + buildFileName;
            const buildSimpleFilePath = buildSimpleCatalogPath + "/" + buildFileName;
            if (true === fs.existsSync(buildSimpleFilePath)) {
                this.runCommandLine(packagePath, `rm "${buildSimpleFilePath}"`);
            }
            const fileSimplePathDir = path.parse(buildSimpleFilePath).dir;
            if (false === fs.existsSync(fileSimplePathDir)) {
                this.runCommandLine(packagePath, `mkdir -p "${fileSimplePathDir}"`);
            }
            this.runCommandLine(packagePath, `cp "${buildFilePath}" "${buildSimpleFilePath}"`);
            // @ts-ignore
            this.prettifyWithEslint(packagePath, `${this.buildSimpleCatalogName}/${buildFileName}`);
        }
    }
    /**
     *
     * @param confNodeCss: any|undefined = packageJson["css-importer"];
     * @param packagePath
     */
    cssImporterRun(confNodeCss, packagePath) {
        // console.info(
        //   confNodeCss,
        //   packagePath
        // );
        let cssImporter = new CssImporter();
        cssImporter
            .setPackagePath(packagePath)
            .setCssFilePath(path.resolve(packagePath, confNodeCss.cssFilePath))
            .setCssTargetFilePath(path.resolve(packagePath, confNodeCss.cssTargetFilePath))
            .build().then((result) => {
            console.log(`css importer built ${packagePath}: ${result}`);
        });
        this.cssImporters.push(cssImporter);
    }
    transpileTypeScriptSources(tsconfigCatalogPath, tsconfigFileName) {
        const consoleCommand = `cd "${tsconfigCatalogPath}" && tsc -p "${tsconfigFileName}"`;
        return this.runCommandLine(tsconfigCatalogPath, consoleCommand);
    }
    transpileTypescriptSourcesWithPath(packagePath, tsconfigPath) {
        const tsconfigJson = fs.readFileSync(tsconfigPath);
        const tsconfig = JSON5.parse(tsconfigJson);
        const compilerOptions = tsconfig["compilerOptions"];
        if (!compilerOptions) {
            throw new Error(`Typescript config file has no compilerOptions, or was not found at: ${tsconfigPath}`);
        }
        const transpileOptions = [];
        for (let compilerOptonName in compilerOptions) {
            const compilerOptionValue = compilerOptions[compilerOptonName];
            transpileOptions.push(`--${compilerOptonName} ${compilerOptionValue}`);
        }
        const filesAndCatalogsList = fs.readdirSync(`${packagePath}/src`, { recursive: true });
        if (!filesAndCatalogsList || filesAndCatalogsList.length === 0) {
            return null;
        }
        const filesList = filesAndCatalogsList.filter((filePath) => {
            let extensionStart = filePath.lastIndexOf(".") + 1;
            let extension = filePath.substring(extensionStart);
            let isTypescript = ((extension === "ts") || (extension === "tsx") || (extension === "js") || (extension === "mjs") || (extension === "cjs"));
            if (isTypescript === false) {
                return isTypescript;
            }
            const absPath = `${packagePath}/src/${filePath}`;
            let isFiltered = fs.lstatSync(absPath).isFile();
            return isFiltered;
        });
        // const packagePathRelative = packagePath.replace(
        //   `${this.absolutePathToProjectRoot}/`,
        //   "");
        //const filesListJoinedString: any = `${packagePathRelative}/src/` + filesList.join(` ${packagePathRelative}/src/`);
        const filesListJoinedString = "src/" + filesList.join(" src/");
        const transpileOptionsString = transpileOptions.join(" ");
        // cd packagePath ensures usage of package.json installed deps for this exact subpackage.
        const transpileCommand = `cd "${packagePath}" && npx tsc ${filesListJoinedString} ${transpileOptionsString}`;
        return this.runCommandLine(`${packagePath}`, transpileCommand);
    }
    prettifyWithEslint(packagePath, pathToPrettify) {
        const consoleCommand = `cd "${packagePath}" && npx eslint --fix "${pathToPrettify}"`;
        return this.runCommandLine(packagePath, consoleCommand);
    }
    runCommandLine(configCatalogPath, consoleCommand) {
        let result = null;
        try {
            result = execSync(consoleCommand, this.getSpawnSyncPayload(configCatalogPath));
        }
        catch (e) {
            result = e;
        }
        return result;
    }
    getSpawnSyncPayload(contextRoot) {
        return {
            cwd: contextRoot,
            stdio: "inherit",
            shell: "bash"
            //shell: '/usr/bin/env bash',
            //env: { ...process.env, PATH: (process.env.PATH + ':/usr/local/bin:/usr/bin:/bin') }
        };
    }
}
//# sourceMappingURL=ProjectBuilder.js.map