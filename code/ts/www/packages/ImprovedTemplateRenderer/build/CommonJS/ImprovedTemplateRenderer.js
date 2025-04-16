"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImprovedTemplateRenderer = void 0;
const event_emitter_1 = require("@jaisocx/event-emitter");
const charcode_converter_1 = require("@jaisocx/charcode-converter");
const workspace_tree_walker_1 = require("@jaisocx/workspace-tree-walker");
const TemplateParser_js_1 = require("./lib/TemplateParser.js");
class ImprovedTemplateRenderer extends event_emitter_1.EventEmitter {
    constructor() {
        super();
        this.EVENT_NAME__AFTER_RENDER = "afterRender";
        this._templatesObject = {};
        this._templatesConf = {};
        this._dataConf = [];
        // props for technique purposes.
        this._preparedTemplatesObject = {};
        this._renderedTemplatesTemporaryArray = [];
        this._renderedHtmlArray = [];
        this._renderedHtml = "";
        this._sumTemplatesSizes = 0;
        this.templateParser = TemplateParser_js_1.TemplateParser.getInstance();
        this.charcodeConverter = charcode_converter_1.CharcodeConverter.getInstance();
    }
    setDebug(debug) {
        this.debug = debug;
        return this;
    }
    setTemplatesObject(templates) {
        this._templatesObject = templates;
        return this;
    }
    setTemplateConf(templatesConf) {
        this._templatesConf = templatesConf;
        return this;
    }
    setDataConf(dataConf) {
        this._dataConf = dataConf;
        return this;
    }
    render(inoutobj, mainTemplateConfigTag) {
        //@ready
        //@info   1. prepares placeolders to JPath objects 
        //        for fast handling placeholders 
        //        like {{ obj.prop1[2].someProp }}
        //        2. converts to Uint16Array
        this.prepareTemplates();
        this.templatesConfigTreeWalk(mainTemplateConfigTag);
        inoutobj.retVal = this._renderedHtmlArray.join("");
        // writes into this._renderedTemplatesTemporaryArray
        //this.renderTemplates( inoutobj );
        // inoutobj.bufs = this._renderedTemplatesTemporaryArray;
        // const result: any = this.charcodeConverter.join (
        //   inoutobj.bufs
        // );
        //return result;
    }
    getDataconfByTemplateName(templateName) {
        return this._dataConf.find((conf) => conf.template === templateName);
    }
    getOrderedTemplatesNames() {
        return [
            ...this._dataConf.map((conf) => conf.template)
        ];
    }
    //@ready
    //@info 
    //        1. if no placeholder, templatesObject[templateName] = CharcodeConverter.toArray()
    //        2. split templates with placeholders.
    prepareTemplates() {
        const toAutoloadCharsets = 1;
        const orderedTemplatesNames = this.getOrderedTemplatesNames();
        let templateConf;
        let templateName = "";
        let templateHtml = "";
        let placeholderName = null;
        let preparedTemplate = null;
        for (templateName of orderedTemplatesNames) {
            templateConf = this._templatesConf[templateName];
            templateHtml = this._templatesObject[templateName];
            placeholderName = templateConf.placeholder;
            if (placeholderName) {
                preparedTemplate = this.templateParser.parse(templateHtml, placeholderName);
            }
            else {
                preparedTemplate = this.charcodeConverter.stringToArray(templateHtml, toAutoloadCharsets);
            }
            this._preparedTemplatesObject[templateName] = preparedTemplate;
        }
    }
    templatesConfigTreeWalk(mainTemplateConfigTag) {
        const renderedTemplates = [];
        this._templatesConf;
        this._dataConf;
        const orderedTemplatesNames = this.getOrderedTemplatesNames();
        const templatesConf = [
            ...orderedTemplatesNames
                .map((templateName) => {
                const conf = this._templatesConf[templateName];
                return Object.assign(Object.assign({}, conf), { templateName });
            })
        ];
        const callbackWalkRepeated = (inOutPayload) => {
            console.log(inOutPayload);
            // const templateConf: TemplateConf = ( treeData as TemplateConf );
            // if ( templateConf.placeholder ) {
            //   const dataConf: DataConf = this._dataConf.find( ( conf: DataConf ) => ( conf.template === templateConf.templateName ) );
            //   const placeholderData: any = dataConf.placeholderData;
            //   const preparedTemplate: any[] = this._preparedTemplatesObject[templateConf.templateName];
            //   for ( let template of preparedTemplate ) {
            //     if ( template instanceof Uint16Array ) {
            //       //@advanced this._renderedTemplatesTemporaryArray.push( template );
            //       this._renderedHtmlArray.push( this.charcodeConverter.arrayToString( template, 0 ) );
            //     } else if ( template instanceof JPathData ) {
            //       const jpathObj: JPathData = ( template as JPathData );
            //       const placeholderDataByJpath: any = JPath.getByJPath ( 
            //         jpathObj.getJPath(), 
            //         placeholderData );
            //       //@advanced const placeholderDataBitsbuf: Uint16Array = this.charcodeConverter.stringToArray( 
            //       //   placeholderDataByJpath, 
            //       //   0 );
            //       // this._renderedTemplatesTemporaryArray.push( placeholderDataBitsbuf ); 
            //       this._renderedHtmlArray.push( this.charcodeConverter.arrayToString( placeholderDataByJpath, 0 ) );
            //     }
            //   }
            // }
            // if ( templateConf.startRepeat ) {
            //   const dataConf: DataConf = this._dataConf.find( ( conf: DataConf ) => ( conf.template === templateConf.templateName ) );
            //   const placeholderData: any = dataConf.placeholderData;
            // }
            let templateConf = inOutPayload.dataElem;
            let templateName = templateConf.templateName;
            //let templateConf: TemplateConf = this._templatesConf[templateName];
            if (!templateName) {
                return;
            }
            //@temp test block
            let dataConf = this._dataConf.find((conf) => {
                const matches = (conf.template === templateConf.templateName);
                return matches;
            });
            let repeatData = null;
            let repeatDataNormalized = [];
            //@ts-ignore
            let repeatDataInfo = {};
            if (templateConf.startRepeat === true) {
                if (templateConf.repeatTagConfDataApplies === true) {
                    repeatData = dataConf.repeatTagData;
                }
                else {
                    repeatData = inOutPayload.repeatDataElem;
                }
                repeatDataInfo = workspace_tree_walker_1.WorkspaceTreeWalker.getNodeInfo(repeatData);
                if (repeatDataInfo.isArray === true) {
                    inOutPayload.repeatData = repeatData;
                }
                else {
                    repeatDataNormalized = workspace_tree_walker_1.WorkspaceTreeWalker.normalizeNodes(repeatData, repeatDataInfo);
                    inOutPayload.repeatData = repeatDataNormalized;
                }
                inOutPayload.repeatTimes = inOutPayload.repeatData.length;
            }
            let placeholderData = dataConf.placeholderData;
            if (!placeholderData && (templateConf.placeholder) && inOutPayload.repeatDataElem) {
                placeholderData = inOutPayload.repeatDataElem;
            }
            const placeholderName = templateConf.placeholder;
            const preparedTemplate = this._preparedTemplatesObject[templateConf.templateName];
            if (preparedTemplate instanceof Uint16Array) {
                this._renderedHtmlArray.push(this.charcodeConverter.arrayToString(preparedTemplate, 0));
            }
            else {
                for (let template of preparedTemplate) {
                    if (template instanceof Uint16Array) {
                        this._renderedHtmlArray.push(this.charcodeConverter.arrayToString(template, 0));
                    }
                    else if ((templateConf.placeholder) && (template instanceof workspace_tree_walker_1.JPathData)) {
                        const jpathData = template;
                        let placeholderDataByJpath = [];
                        if (jpathData.isPlaceholderValue()) {
                            placeholderDataByJpath = placeholderData;
                        }
                        else {
                            placeholderDataByJpath = workspace_tree_walker_1.JPath.getByJPath(jpathData.getJPath(), placeholderData);
                        }
                        const placeholderInfo = workspace_tree_walker_1.WorkspaceTreeWalker.getNodeInfo(placeholderDataByJpath);
                        if (placeholderInfo.datatype === workspace_tree_walker_1.WorkspaceTreeWalker.DATATYPE_OBJECT) {
                            placeholderDataByJpath = JSON.stringify(placeholderDataByJpath);
                        }
                        //@advanced const placeholderDataBitsbuf: Uint16Array = this.charcodeConverter.stringToArray( 
                        //   placeholderDataByJpath, 
                        //   0 );
                        // this._renderedTemplatesTemporaryArray.push( placeholderDataBitsbuf ); 
                        this._renderedHtmlArray.push(placeholderDataByJpath);
                    }
                }
            }
        };
        const treeWalker = new workspace_tree_walker_1.WorkspaceTreeWalker();
        let inOutPayload = new workspace_tree_walker_1.WorkspaceTreeWalkerPayload();
        inOutPayload.dataset = templatesConf;
        inOutPayload.parentId = mainTemplateConfigTag;
        inOutPayload.id = "main";
        inOutPayload.parentIdForNestedNodes = "branchRepeatTag";
        inOutPayload.parentIdProperyName = "tag";
        inOutPayload.idProperyName = "branchRepeatTag";
        treeWalker.walkFlatRepeating(inOutPayload, callbackWalkRepeated);
        console.log("TREE WALKER RESULT");
        console.log(inOutPayload);
    }
    getFieldValue(dataElem) {
        const info = workspace_tree_walker_1.WorkspaceTreeWalker.getNodeInfo(dataElem);
        const normalizedRecord = workspace_tree_walker_1.WorkspaceTreeWalker.normalizeNodes(dataElem, info);
        return normalizedRecord;
    }
}
exports.ImprovedTemplateRenderer = ImprovedTemplateRenderer;
//# sourceMappingURL=ImprovedTemplateRenderer.js.map