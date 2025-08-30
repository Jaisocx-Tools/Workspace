import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
export class LinkedResourceHasher {
    /**
     * Generate an integrity attribute value for a given file
     * @param filePath - path to the resource file
     * @param algo - hash algorithm ('sha256', 'sha384', 'sha512')
     * @returns integrity attribute string (e.g. integrity="sha384-...")
     */
    preloadedResourceIntegrityProduce(filePath, algo = "sha384") {
        const fileBuffer = readFileSync(filePath);
        const hash = createHash(algo)
            .update(fileBuffer)
            .digest("base64");
        const linkTagIntegrity = `${algo}-${hash}`;
        return linkTagIntegrity;
    }
    /**
     * Generate a <link> tag with integrity attribute
     */
    linkPreloaderProduce(href, path, rel = "preload", as = "font", fetchpriority = "high", prettified = true) {
        let integrity = this.preloadedResourceIntegrityProduce(path, "sha512");
        let linkTagOuterHTML = "";
        if (prettified) {
            linkTagOuterHTML = `  <link\n    rel="${rel}"\n    as="${as}"\n    fetchpriority="${fetchpriority}"\n    href="${href}"\n    integrity="${integrity}"\n  />\n`;
        }
        else {
            linkTagOuterHTML = `<link rel="${rel}" as="${as}" fetchpriority="${fetchpriority}" href="${href}" integrity="${integrity}"/>`;
        }
        return linkTagOuterHTML;
    }
}
//# sourceMappingURL=LinkedResourceHasher.js.map