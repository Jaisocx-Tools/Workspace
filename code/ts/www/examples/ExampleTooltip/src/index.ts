import { Tooltip, Constants } from "@jaisocx/tooltip";
import { ExampleTooltip } from "./ExampleTooltip.js";

export { Tooltip, Constants } from "@jaisocx/tooltip";
export { ExampleTooltip } from "./ExampleTooltip.js";

(window as any).Tooltip = Tooltip;
(window as any).Constants = Constants;
(window as any).ExampleTooltip = ExampleTooltip;

