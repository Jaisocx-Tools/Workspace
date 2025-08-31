export type OptimizedTemplateRecord = {
    placeholderName: string;
    range: number[];
};
export type TemplateRendererDataRecord = {
    id: number;
    isOptimized: boolean;
    textTemplate: string;
    dataForRendering: object;
    bitsbufTemplate: Uint8Array;
    optimizedBitsbufTemplate: Uint8Array[];
    optimizedPlaceholdersEntries: any;
    optimizedTemplate: OptimizedTemplateRecord[];
};
//# sourceMappingURL=TemplateRendererTypes.d.ts.map