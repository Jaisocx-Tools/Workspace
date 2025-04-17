export interface ImprovedTemplateRendererInterface {
    sumTaggedGroupSize(): number;
    sumTaggedGroupIterations(): number;
    sumTaggedGroupRenderedTemplates(): number;
    getSumRenderedTemplates(): number;
    multidimArrayToFlatArray(flatArraySize: number, multidimArray: any): Uint16Array[];
    splitTemplateToPlaceholdersJpathAndStaticTexts(templateText: string): any[];
    parseJPath(jpath: string): any[];
}
//# sourceMappingURL=ImprovedTemplateRendererInterface.d.ts.map