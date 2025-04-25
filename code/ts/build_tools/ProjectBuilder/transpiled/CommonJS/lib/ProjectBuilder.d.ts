export declare class ProjectBuilder {
    isLocalDevelopment: number;
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
    constructor();
    getIsLocalDevelopment(): number;
    setIsLocalDevelopment(isLocalDevelopment: number): ProjectBuilder;
    setAbsolutePathToProjectRoot(projectRoot: any): ProjectBuilder;
    setAbsolutePath(propertyName: any, relativePath: any): ProjectBuilder;
    setRelativePathFromRootTsConfigCatalogPath(relativePath: any): ProjectBuilder;
    setRelativePathFromRootLintCatalog(relativePath: any): ProjectBuilder;
    setRelativePathFromRootWww(relativePath: any): ProjectBuilder;
    setBuildCjsCatalogName(catalogName: any): ProjectBuilder;
    setBuildEsmCatalogName(catalogName: any): ProjectBuilder;
    setBuildSimpleCatalogName(catalogName: any): ProjectBuilder;
    build(dataJson: any): any;
    buildPackage(packageJson: any): void;
    installPackageDependencies(packageJson: any, packagePath: any): void;
    buildSimple(packageJson: any, packagePath: any): void;
    /**
     *
     * @param confNodeCss: any|undefined = packageJson["css-importer"];
     * @param packagePath
     */
    cssImporterRun(confNodeCss: any, packagePath: any): void;
    transpileTypeScriptSources(tsconfigCatalogPath: any, tsconfigFileName: any, logToConsole: boolean): any;
    transpileTypescriptSourcesWithPath(packagePath: any, tsconfigPath: any): any;
    prettifyWithEslint(packagePath: any, pathToPrettify: any, logToConsole: boolean): any;
    runCommandLine(configCatalogPath: any, consoleCommand: any, logToConsole: boolean): any;
    getSpawnSyncPayload(contextRoot: any): any;
}
//# sourceMappingURL=ProjectBuilder.d.ts.map