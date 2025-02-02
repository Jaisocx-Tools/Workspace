// src/TemplateRenderer/index.ts
import { TemplateRenderer } from "@jaisocx/template-renderer";
export { TemplateRenderer } from "@jaisocx/template-renderer";

import { ExampleTemplateRenderer } from "./ExampleTemplateRenderer.js";
export { ExampleTemplateRenderer } from "./ExampleTemplateRenderer.js";


(window as any).TemplateRenderer = TemplateRenderer;
(window as any).ExampleTemplateRenderer = ExampleTemplateRenderer;

