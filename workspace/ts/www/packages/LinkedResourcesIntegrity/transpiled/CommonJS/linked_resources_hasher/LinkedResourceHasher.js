"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedResourceHasher = void 0;
const node_fs_1 = require("node:fs");
const node_crypto_1 = require("node:crypto");
class LinkedResourceHasher {
    /**
     * Generate an integrity attribute value for a given file
     * @param filePath - path to the resource file
     * @param algo - hash algorithm ('sha256', 'sha384', 'sha512')
     * @returns integrity attribute string (e.g. integrity="sha384-...")
     */
    preloadedResourceIntegrityProduce(filePath, algo = "sha384") {
        const fileBuffer = (0, node_fs_1.readFileSync)(filePath);
        const hash = (0, node_crypto_1.createHash)(algo)
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
exports.LinkedResourceHasher = LinkedResourceHasher;
//# sourceMappingURL=LinkedResourceHasher.js.map