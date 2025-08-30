import { LinkedResourceHasherInterface } from "./LinkedResourceHasherInterface.js";
export declare class LinkedResourceHasher implements LinkedResourceHasherInterface {
    /**
     * Generate an integrity attribute value for a given file
     * @param filePath - path to the resource file
     * @param algo - hash algorithm ('sha256', 'sha384', 'sha512')
     * @returns integrity attribute string (e.g. integrity="sha384-...")
     */
    preloadedResourceIntegrityProduce(filePath: string, algo?: string): string;
    /**
     * Generate a <link> tag with integrity attribute
     */
    linkPreloaderProduce(href: string, path: string, rel?: string, as?: string, fetchpriority?: string, prettified?: boolean): string;
}
//# sourceMappingURL=LinkedResourceHasher.d.ts.map