import { SpecifityAndSelector } from "./CssSelectorWeightTypes.js";
export declare class CssSelectorWeight {
    calculateOneRuleSpecificity(selectorText: string): number[];
    updateSpecifityByCssProperty(ruleStyle: CSSStyleDeclaration, cssPropertyName: string, inSpecifity: number[]): number[];
    compareSpecificity(specificity1: number[], specificity2: number[]): number;
    calculateSpecifities(selectorText: string): SpecifityAndSelector[];
}
//# sourceMappingURL=CssSelectorWeight.d.ts.map